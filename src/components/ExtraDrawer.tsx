'use client';

import * as React from "react"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ScrollArea } from "./ui/scroll-area";
import { ArrowRight } from "lucide-react";

interface Service {
    id: string;
    header: string;
    price: string;
    text: string;
}

const ExtraDrawer = () => {
    const [extraService, setExtraService] = useState<Service[]>([]);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const response = await fetch('/api/admin/services');
                const data = await response.json();
                setExtraService(data.services);
            } catch (error) {
                console.error('Fehler beim Laden der Dienstleistungen:', error);
            }
        };

        loadServices();
    }, []);

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className='flex items-center gap-2 mt-5'>
                    Alle Extraleistungen anschauen
                    <ArrowRight className='w-5 h-5'></ArrowRight>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <MaxWidthWrapper className="mt-5">
                    <DrawerTitle>
                        Extraleistungen
                    </DrawerTitle>
                    <DrawerDescription>
                        Hier sehen Sie die Extraleistungen:
                    </DrawerDescription>

                    <ScrollArea className="h-96 mt-5">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 pr-5'>
                            {extraService.map((item) => (
                                <div key={item.id} className="border border-input rounded-md p-5">
                                    <div className='flex justify-between items-center'>
                                        <p className='font-semibold'>{item.header}</p>
                                        <p className='text-muted-foreground'>{item.price}</p>
                                    </div>
                                    <div>
                                        <p className='text-muted-foreground mt-1'>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Schließen</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </MaxWidthWrapper>
            </DrawerContent>
        </Drawer>
    )
}

export default ExtraDrawer
