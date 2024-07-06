"use client"

import React from 'react'
import Link from "next/link"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import { Film } from 'lucide-react'


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/",
        description:
            "A modal dialog that interrupts the user",
    },
    {
        title: "Hover Card",
        href: "/",
        description:
            "For sighted users to preview content",
    },
    {
        title: "Progress",
        href: "/",
        description:
            "Displays an indicator showing the completion",
    },
    {
        title: "Scroll-area",
        href: "/",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/",
        description:
            "A set of layered sections of content—known as tab",
    },
    {
        title: "Tooltip",
        href: "/",
        description:
            "A popup that displays information related to an element when the",
    },
]

const Navbar = () => {
    return (

        <div className='fixed bg-white w-full top-0 left-0 pt-5 border-b border-b-black/10 z-[100]'>
            <MaxWidthWrapper>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-5'>
                    <div className='hidden md:block'>
                        <Link href="/">
                            <Image src="/logo.png" className='h-10 w-auto' width={1308} height={402} alt='CleanXCar Logo'></Image>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center'>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Dienstleistungen</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[360px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Kontakt</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            shadcn/ui
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Beautifully designed components built with Radix UI and
                                                            Tailwind CSS.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/docs" title="Introduction">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </ListItem>
                                            <ListItem href="/docs/installation" title="Installation">
                                                How to install dependencies and structure your app.
                                            </ListItem>
                                            <ListItem href="/docs/primitives/typography" title="Typography">
                                                Styles for headings, paragraphs, lists...etc
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Über uns
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className='justify-end gap-2 w-full items-center hidden md:flex'>
                        <Link href="/">
                            <Button variant="ghost">
                                <Film className='w-5 h-5 text-primary' />
                                <p className='sr-only'>Instagram</p>
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="ghost">
                                <Film className='w-5 h-5 text-primary' />
                                <p className='sr-only'>Whatsapp</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar