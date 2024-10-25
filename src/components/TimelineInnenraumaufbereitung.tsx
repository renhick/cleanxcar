import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineInnenraumaufbereitung() {
    const data = [
        {
            title: "Schritt: 1",
            content: (
                <div>
                    <p className="text-muted-foreground dark:text-neutral-200 text-normal md:text-normal  mb-8">
                        <strong>Vorreinigung und Inspektion:</strong> Unsere professionelle Fahrzeuginnenraumaufbereitung beginnt mit einer gründlichen Vorreinigung.
                        Wir inspizieren das Fahrzeug sorgfältig, um Schmutz, Staub, und Flecken zu identifizieren.
                        Diese Phase ist entscheidend, um eine maßgeschneiderte Aufbereitungsstrategie zu entwickeln.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/cars.jpg"
                            alt="Fahrzeuginspektion"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/cars.jpg"
                            alt="Vorreinigung"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Schritt: 2",
            content: (
                <div>
                    <p className="text-muted-foreground dark:text-neutral-200 text-normal md:text-normal  mb-8">
                        <strong>Staubsaugen und Trockenreinigung:</strong> Wir entfernen lose Verschmutzungen und Staub durch leistungsstarke Staubsauger
                        und spezielle Bürsten. Dieser Schritt bereitet den Weg für eine tiefgehende Reinigung.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/cars.jpg"
                            alt="Staubsaugen"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/cars.jpg"
                            alt="Trockenreinigung"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Schritt: 3",
            content: (
                <div>
                    <p className="text-muted-foreground dark:text-neutral-200 text-normal md:text-normal  mb-8">
                        <strong>Fleckenentfernung und Polsterreinigung:</strong> Hartnäckige Flecken und Verschmutzungen werden gezielt behandelt und entfernt.
                        Die Polsterung wird schonend gereinigt, wobei spezielle Reinigungsmittel und Techniken verwendet werden,
                        um Frische und Sauberkeit wiederherzustellen.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/cars.jpg"
                            alt="Fleckenentfernung"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/cars.jpg"
                            alt="Polsterreinigung"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Schritt: 4",
            content: (
                <div>
                    <p className="text-muted-foreground dark:text-neutral-200 text-normal md:text-normal  mb-4">
                        <strong>Innenraum-Veredelung und Qualitätskontrolle:</strong> Unsere umfassende Veredelung beinhaltet:
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-muted-foreground dark:text-neutral-300 text-normal md:text-normal">
                            ✅ Pflege von Kunststoff&minus; und Lederflächen
                        </div>
                        <div className="flex gap-2 items-center text-muted-foreground dark:text-neutral-300 text-normal md:text-normal">
                            ✅ Wiederherstellung des Erscheinungsbilds des Armaturenbretts
                        </div>
                        <div className="flex gap-2 items-center text-muted-foreground dark:text-neutral-300 text-normal md:text-normal">
                            ✅ Streifenfreie Reinigung von Fenstern und Spiegeln
                        </div>
                        <div className="flex gap-2 items-center text-muted-foreground dark:text-neutral-300 text-normal md:text-normal">
                            ✅ Geruchsbeseitigung und Desinfektion
                        </div>
                        <div className="flex gap-2 items-center text-muted-foreground dark:text-neutral-300 text-normal md:text-normal">
                            ✅ Umfassende Qualitätskontrolle
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/cars.jpg"
                            alt="Innenraum-Veredelung"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/cars.jpg"
                            alt="Qualitätskontrolle"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}