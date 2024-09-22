import Image from "next/image";

import { Logo } from "@/components/custom/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
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
                <div className="mt-8 lg:mt-16 w-max mx-auto">{children}</div>
            </div>
        </div>
    );
}
