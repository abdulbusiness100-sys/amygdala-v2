import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

function getMailTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

async function sendLeadNotification(lead: {
  name: string;
  email: string;
  phone?: string | null;
  businessType?: string;
  currentRevenue?: string;
  mainChallenges?: string;
  goals?: string;
  howDidYouHear?: string;
}) {
  const transporter = getMailTransporter();
  if (!transporter) return;

  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone || "—"],
    ["Business Type", lead.businessType || "—"],
    ["Monthly Revenue", lead.currentRevenue || "—"],
    ["Main Challenges", lead.mainChallenges || "—"],
    ["Goals", lead.goals || "—"],
    ["How Did You Hear", lead.howDidYouHear || "—"],
  ]
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td><td style="padding:8px 12px;color:#111">${value}</td></tr>`)
    .join("");

  await transporter.sendMail({
    from: `"SPIDXR Network" <${process.env.SMTP_USER}>`,
    to: "spidxr253@gmail.com",
    subject: "New Client",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="background:#111;color:#E8C547;padding:20px;margin:0">New COO Assessment Submission</h2>
        <table style="width:100%;border-collapse:collapse;background:#fafafa">${rows}</table>
        <p style="padding:16px;color:#888;font-size:12px">Submitted via spidxrnetwork.co.uk</p>
      </div>
    `,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      sendLeadNotification(lead).catch(() => {});
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
