import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
    href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
    return (
        <Link href={href}>
            <div className="flex items-center gap-2.5">
                <Image src="/logo.svg" width={48} height={48} alt="logo" />
                <h4 className="font-bold text-3xl text-primary">Cyberverdict</h4>
            </div>
        </Link>
    );
}
