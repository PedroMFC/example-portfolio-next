"use client";
import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work "
    },
    {
        name: "contact",
        path: "contact"
    },
]

export const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={clsx(
                    "capitalize font-medium hover:text-accent transition-all", {
                        "text-accent border-b-2 border-accent": link.path === pathname
                    }
                )}>{link.name}</Link>
            })}
        </nav>
    )
} 