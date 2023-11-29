"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select transaction status to display.",
    })
    .email(),
});

export default function TransactionStatus() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: any) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 mt-8"
      >
        <FormField
          control={form.control}
          name="transactionStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md text-black font-semibold">
                Transaction Status
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select  status " />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="success">success</SelectItem>
                  <SelectItem value="Get Tipped">pending</SelectItem>
                  <SelectItem value="Withdrawals">failed</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
