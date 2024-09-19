"use client";

import React from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Logo } from "@/components/custom/logo";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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

    const onSubmit = React.useCallback((data: FormValues) => {
        console.log("data", data);
    }, []);

    return (
        <div className="h-screen flex justify-center items-center overflow-hidden">
            <div className="h-full basis-1/2 relative hidden lg:flex items-center justify-center">
                <Image src="/images/book-stack.png" className="-z-10" fill alt="" />
                <div className="backdrop-blur-sm bg-primary/50 w-full h-full absolute inset-0 -z-10" />
                <div className="text-white">
                    <Image src="/images/quote.png" width={24} height={24} alt="" className="absolute -ml-6 -mt-11" />
                    <p className="max-w-96 text-lg leading-[1.72]">
                        Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and
                        shakers in our society for the indefinite future
                    </p>

                    <span className="font-medium mt-16 inline-block">Elon Musk</span>

                    <span className="block w-10 h-8 border-white border-r-[14px] border-b-[14px] ml-auto -mr-5 mt-4" />
                </div>
            </div>
            <div className="h-full basis-full lg:basis-1/2 p-6 lg:px-20 lg:py-16 overflow-auto">
                <Logo />
                <div className="mt-8 lg:mt-48 w-max mx-auto">
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

                            <Button type="button" className="w-full rounded-lg" variant="outline">
                                Sign up
                            </Button>
                        </form>
                    </Form>

                    <div className="mt-10 text-center">
                        <span className="text-primary hover:underline cursor-pointer text-sm" title="Forgot your password?">
                            Forgot your password?
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
