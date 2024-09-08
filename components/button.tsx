import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
};

export default function Button({ variant = "primary", ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "bg-blue-500 text-white px-4 py-2 rounded-full font-medium shadow-md hover:text-blue-500 hover:bg-white border border-blue-500 transition-colors duration-300",
                variant === "outline" && "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white"
            )}
            {...props}
        />
    );
}
