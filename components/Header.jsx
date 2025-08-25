import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Nav } from "@/components/Nav";
import { MobileNav} from "@/components/MobileNav";

export const Header = () => {

    return (
        <header className="py-8 xl:py-12 pl-8 text-white">
            <div className="container mx-axuto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Pedro <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/*  desktop nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Contact me</Button>
                    </Link>
                </div>
                {/*  mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
} 