import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Badge } from './ui/badge'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import Image from "next/image"

const ratings = [
    {
        name: "Jürgen Braun",
        date: "vor 2 Monaten",
        text: "Ich bin absolut begeistert.! Super freundlich, Mega gute Arbeit, Perfekte Qualität.!! Ich komme ganz sicher wieder.! Auch Preis - Leistung ist Top.!",
    },
    {
        name: "Roland Gruschinski",
        date: "vor einem Jahr",
        text: "Ich habe mein Sportboot zur Aufbereitung der Persenning und des Bootsrumpfes zu CleanXCar gebracht. Sehr, sehr gute Arbeit. Kompetent und netter Kontakt. Sehr gutes Preis/Leistungsverhältnis.",
    },
    {
        name: "David Pfeifer",
        date: "vor 2 Monaten",
        text: "Sehr zu empfehlen! Super Ergebnis und gute Preis-Leistung. Das Auto sieht nach der Innenreinigung wie neu aus. Alle sind sehr freundlich und zuvorkommend. Ich komme gerne wieder 😊",
    },
    {
        name: "Simon Hau",
        date: "vor 3 Wochen",
        text: "Super zufrieden. Mein Auto hatte nach dem Hausbau doch sehr stark gelitten und wurde im Innenraum wieder super aufbereitet! Hätte ich nie auch nur annähernd so hinbekommen. Klare Weiterempfehlung!",
    },
];
const Partners = () => {
    return (
        <MaxWidthWrapper>
            <section className='mt-20'>
                <div className='flex justify-center items-center flex-col'>
                    <Badge>Partner</Badge>
                    <h1 className='text-4xl mt-2 font-bold text-gray-800 text-center'>Bewertungen, die für sich sprechen.</h1>
                    <p className='max-w-prose text-muted-foreground text-center mt-2'>Unsere erstklassige Fahrzeugaufbereitung überzeugt durch zahlreiche positive Bewertungen. Lassen Sie Ihr Auto von den Besten pflegen und erleben Sie den Unterschied.</p>
                </div>

                <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={ratings}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section>

            <section className='mt-5'>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>

                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_1.png" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_2.png" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_3.jpg" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_4.jpg" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_5.jpg" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_11.png" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_7.svg" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_8.png" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_9.png" width={225} height={225} alt='Partner'></Image>
                    </div>
                    <div className='w-full flex justify-center items-center filter grayscale'>
                        <Image src="/partners/partner_10.jpg" width={225} height={225} alt='Partner'></Image>
                    </div>

                </div>
            </section>
        </MaxWidthWrapper>
    )
}

export default Partners