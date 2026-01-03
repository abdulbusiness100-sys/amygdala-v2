import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      // Zod validation is handled by react-hook-form, but double checking runtime
      const validated = api.leads.create.input.parse(data);
      
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
           const error = api.leads.create.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        if (res.status === 500) {
            const error = api.leads.create.responses[500].parse(await res.json());
            throw new Error(error.message);
        }
        throw new Error('Failed to submit lead');
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Received",
        description: "We've received your audit request. A strategist will contact you shortly.",
      });
      // In a real app we might invalidate a leads list, but this is public facing form
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
