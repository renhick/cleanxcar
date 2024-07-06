import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import ExtraDrawer from './ExtraDrawer';

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
        text: "Der besondere Frischekick gegen Gerüche & Keime",
    },
];


const Extras = () => {
    return (
        <section className='mt-10'>
            <MaxWidthWrapper>
                {/* <div className='flex justify-center items-center flex-col'>
                    <Badge>Dienstleistungen</Badge>
                    <h1 className='text-4xl mt-2 font-bold text-gray-800 text-center'>Revitalisieren Sie Ihr Fahrzeug: Unsere Exklusiv-Dienstleistungen für Fahrzeugaufbereitung</h1>
                    <p className='max-w-prose text-muted-foreground text-center mt-2'>Erleben Sie Spitzenqualität: Unsere umfassenden Dienstleistungen bringen den Glanz Ihres Autos zurück!</p>
                </div> */}

                <div className="w-full p-5 min-h-96 rounded-lg bg-[url('/banner.jpg')] bg-cover bg-center relative">
                    <div className='absolute top-0 left-0 w-full h-full bg-black/80 rounded-lg'></div>

                    <div className='z-50 relative'>
                        <Badge>Extras</Badge>
                        <div className='max-w-prose'>
                            <h1 className='text-2xl font-bold text-white break-words mt-2'>Profitieren Sie von unseren umfassenden Dienstleistungen im Bereich der Fahrzeugaufbereitung.</h1>
                            <p className='text-white/60'>Verwöhnen Sie Ihr Auto mit zusätzlicher Pflege ganz nach Ihren Wünschen.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 mt-5 z-50'>
                            {extraService.map((item) => (
                                <div key={item.id} className="border border-white/20  rounded-md p-5 bg-white/20 bg-[url('/footer-grid.svg')] bg-cover bg-center">
                                    <div className='flex justify-between items-center'>
                                        <p className='font-semibold text-white'>{item.header}</p>
                                        <p className='text-white/60'>ab {item.price}€</p>
                                    </div>

                                    <div>
                                        <p className='text-white/60'>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ExtraDrawer></ExtraDrawer>
                    </div>
                </div>

            
            </MaxWidthWrapper>
        </section >
    )
}

export default Extras