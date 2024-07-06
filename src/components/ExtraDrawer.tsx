import * as React from "react"

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


const extraService = [
    {
        id: 1,
        header: "Shampoonieren der Sitze",
        price: "99,95",
        text: "Reinigung textiler Oberflächen mittels Sprühextraktionssauger",
    },
    {
        id: 2,
        header: "Lederreinugung & Pflege",
        price: "99,95",
        text: "Intensive Reinigung der Ledersitze & Pflege",
    },
    {
        id: 3,
        header: "Ozonbehandlung",
        price: "79,95",
        text: "Der besondere Frischekick gegen Gerüche & Keime",
    },
    {
        id: 4,
        header: "Tierhaarentfernung",
        price: "59,95",
        text: "Entfernung festsitzender Tierhaare im kompletten Innenraum",
    },
    {
        id: 5,
        header: "Motorreinigung & Konservierung",
        price: "79,95",
        text: "Entfernung von Staub, Schmutz & Ölrückständen",
    },
    {
        id: 6,
        header: "Cabriodach-Imprägnierung",
        price: "179,95",
        text: "Vermeidung von teuren Reparaturkosten durch den Schutz Ihres Verdeckstoffes",
    },
    {
        id: 7,
        header: "Scheibenversiegelung",
        price: "95,95",
        text: "Verbesserte Sicht durch Wasser und Schmutzabweisende Versiegelung",
    },
    {
        id: 8,
        header: "Felgen-Versiegelung",
        price: "49,95/Felge *",
        text: "Verbesserte Sicht durch Wasser und Schmutzabweisende Versiegelung",
    },
    {
        id: 9,
        header: "Trockeneis-Reinigung",
        price: "auf Anfrage *",
        text: "Das wie-neu- Erlebnis mit unserer schonenden & Umweltfreundlichen Trockeneis-Reinigung",
    },
    {
        id: 10,
        header: "Motorradaufbereitung",
        price: "199",
        text: "Ihr Bike mit strahlendem Glanz, Schutz vor Witterungseinflüssen & Wertsteigerung",
    },
];

const ExtraDrawer = () => {
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
                                <div key={item.id} className="border border-input  rounded-md p-5 ">
                                    <div className='flex justify-between items-center'>
                                        <p className='font-semibold'>{item.header}</p>
                                        <p className='text-muted-foreground'>ab {item.price}€</p>
                                    </div>
                                    <div>
                                        <p className='text-muted-foreground'>{item.text}</p>
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
