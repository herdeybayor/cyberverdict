"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "First Name is required",
    }),
    lastName: z.string().min(1, {
        message: "Last Name is required",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
    confirmPassword: z.string().min(1, {
        message: "Confirm Password is required",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Register() {
    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormValues) => {
        console.log("data", data);
    };
    return (
        <>
            <h1 className="text-primary font-bold text-3xl">Register an Account</h1>
            <p className="text-primary mt-2 text-lg">with your Email Address</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-7">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name*</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter first name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name*</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
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
                                <FormLabel>Password*</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password*</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter confirm password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            I agree to the{" "}
                            <a href="#" className="text-primary">
                                Terms of Service
                            </a>
                        </label>
                    </div>

                    <Button type="submit" className="w-full rounded-lg">
                        Register
                    </Button>
                </form>
            </Form>

            <div className="mt-5">
                <p className="text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </>
    );
}
