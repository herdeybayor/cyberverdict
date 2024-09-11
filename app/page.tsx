import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Link href="/login">
                <Button>Get Started</Button>
            </Link>
        </div>
    );
}
