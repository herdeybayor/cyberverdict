"use client";

import { useCallback } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = useCallback((data: FormValues) => {
        console.log("data", data);
    }, []);

    return (
        <>
            <h1 className="text-primary font-bold text-3xl">Login to your Account</h1>
            <p className="text-primary mt-2 text-lg">with your registered Email Address</p>

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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enter Password*</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Remember my password
                        </label>
                    </div>

                    <Button type="submit" className="w-full rounded-lg">
                        Login
                    </Button>

                    <div className="flex items-center space-x-2">
                        {["", "Or", ""].map((text, index) => {
                            if (text === "") {
                                return <div key={index} className="w-full border-b border-border" />;
                            } else {
                                return (
                                    <span key={index} className="text-sm font-medium leading-none">
                                        {text}
                                    </span>
                                );
                            }
                        })}
                    </div>

                    <div>
                        <Link href="/register">
                            <Button type="button" className="w-full rounded-lg" variant="outline">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </form>
            </Form>

            <div className="mt-10 text-center">
                <Link href="/reset-password" className="text-primary hover:underline cursor-pointer text-sm" title="Forgot your password?">
                    Forgot your password?
                </Link>
            </div>
        </>
    );
}
