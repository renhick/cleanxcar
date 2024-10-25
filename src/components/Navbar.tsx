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
import { Film, Mail, Phone } from 'lucide-react'


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Innenraumaufbereitung",
        href: "/Innenraumaufbereitung",
        description:
            "Professionelle Pflege des Innenraums.",
    },
    {
        title: "Außenaufbereitung",
        href: "/Aussenaufbereitung",
        description:
            "Hochwertige Außenpflege für strahlenden Glanz.",
    },
    {
        title: "Komplettaufbereitung",
        href: "/Komplettaufbereitung",
        description:
            "Umfassende Reinigung von innen und außen",
    },
    {
        title: "Keramikversiegelung",
        href: "/Keramikversiegelung",
        description: "Langanhaltender Schutz durch Spezialversiegelung.",
    },
    {
        title: "Trockeneisreinigung",
        href: "/Trockeneisreinigung",
        description: "Intensive & schonende Reinigung.",
    },
    //    {
    //         title: "Lederpflege & Reperatur",
    //         href: "/Lederpflege",
    //         description: "Lederreperaturen aller Art von Poster bis Fußmatten.",
    //     },
]

const Navbar = () => {

    const handleCall = () => {
        window.location.href = 'tel:015204737960';
    };

    const handleMail = () => {
        window.location.href = 'mailto:info@cleanxcar.de';
    }

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
                                            <li className="row-span-3 bg-[url('/eray.jpg')] bg-cover bg-center rounded-md">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"

                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                            Eray Onur
                                                        </div>
                                                        <p className="text-sm leading-tight text-white/70">
                                                            Geschäftsführer von CleanXCar.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/" title="Instagram">
                                                Bleibe auf dem neusten Stand. Erhalte Infos und Updates.
                                            </ListItem>
                                            <ListItem href="/" title="Whatsapp">
                                                Sie können mich unter 01520 4737960 erreichen.
                                            </ListItem>
                                            <ListItem href="/" title="Mail">
                                                Ich antworte Ihnen binnen 24 Stunden unter info@cleanxcar.de
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="#about" legacyBehavior passHref>
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
                            <Button variant="ghost" onClick={handleCall}>
                                <Phone className='w-5 h-5' />
                                <p className='sr-only'>Telefon</p>
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="ghost" onClick={handleMail}>
                                <Mail className='w-5 h-5' />
                                <p className='sr-only'>Mail</p>
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