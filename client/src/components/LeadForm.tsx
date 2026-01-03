import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, ArrowRight } from "lucide-react";

const formSchema = insertLeadSchema.extend({
  // Override or add specific UI validations if needed
});

export default function LeadForm() {
  const { mutate, isPending } = useCreateLead();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      currentRevenue: "",
      mainChallenges: "",
      goals: "",
      howDidYouHear: "",
    },
  });

  function onSubmit(data: InsertLead) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Request Your Audit</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@company.com" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 000-0000" {...field} value={field.value || ""} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Business Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="agency">Agency</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="currentRevenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Monthly Revenue</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pre-revenue">Pre-revenue</SelectItem>
                    <SelectItem value="0-10k">$0 - $10k</SelectItem>
                    <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k+">$100k+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mainChallenges"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Main Challenges</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="What's stopping you from scaling right now?" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[100px] focus:border-primary/50"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#6b7b3a] to-[#8a9c52] hover:shadow-lg hover:shadow-[#6b7b3a]/20 text-white font-bold py-6 text-lg"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
