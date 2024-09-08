import Link from "next/link";
import React from "react";
import Button from "./button";

export default function Navbar() {
    return (
        <div className="bg-gray-300 flex items-center justify-between py-2 px-8">
            <Link href="/">
                <h1 className="text-2xl font-bold underline">Cyberverdict</h1>
            </Link>

            <ul className="flex gap-4">
                {[
                    { href: "/about", text: "About" },
                    { href: "/FAQs", text: "FAQs" },
                    { href: "/blog", text: "Blog" },
                ].map(({ href, text }) => (
                    <Link key={href} href={href}>
                        <li className="hover:underline">{text}</li>
                    </Link>
                ))}
            </ul>

            <div className="flex gap-4">
                <Button>Sign In</Button>
                <Button variant="outline">Sign Up</Button>
            </div>
        </div>
    );
}
