"use client";

import { useCallback } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ResetPasswordPage() {
    const form = useForm({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = useCallback((data: FormValues) => {
        console.log("data", data);
    }, []);

    return (
        <>
            <h1 className="text-primary font-bold text-3xl">Reset Password</h1>
            <p className="text-primary mt-2 text-lg">Enter your email address to reset your password</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-7">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email address*</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Enter email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full rounded-lg">
                        Reset Password
                    </Button>
                </form>
            </Form>

            <div className="mt-5">
                <p className="text-center">
                    Remember your password?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </>
    );
}
