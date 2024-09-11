import React from "react";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="h-full flex-1 relative flex items-center justify-center">
                <Image src="/images/book-stack.png" className="-z-10" fill alt="" />
                <div className="backdrop-blur-sm bg-primary/50 w-full h-full absolute inset-0 -z-10" />
                <div className="text-white">
                    <p className="max-w-96 text-lg leading-[1.72]">
                        Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and
                        shakers in our society for the indefinite future
                    </p>

                    <span className="font-medium mt-16 inline-block">Elon Musk</span>
                </div>
            </div>
            <div className="h-full flex-1">
                <div>LoginPage</div>
            </div>
        </div>
    );
}
