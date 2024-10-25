import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Separator } from './ui/separator';
import Image from 'next/image';
import { Badge } from './ui/badge';

const data = [
    {
        id: 1,
        header: "Innenraumaufbereitung",
        info: "Autopflege für makellosen Innenraum.",
        src: "/services/interiour.jpg",
        width: 2500,
        height: 1667,
        link: "/Innenraumaufbereitung"
    },
    {
        id: 2,
        header: "Außenaufbereitung",
        info: "Glanzvolle Pflege für Autolack.",
        src: "/services/exterior.jpg",  // Update with the correct path if needed
        width: 2500,
        height: 1667,
        link: "/Aussenaufbereitung"
    },
    {
        id: 3,
        header: "Komplettaufbereitung",
        info: "Fahrzeugaufbereitung für innen und außen.",
        src: "/services/complete.jpg",  // Update with the correct path if needed
        width: 2500,
        height: 1667,
        link: "/Komplettaufbereitung"
    },
    {
        id: 4,
        header: "Keramikversiegelung",
        info: "Perfekt für langanhaltenden Lackschutz.",
        src: "/services/ceramic.jpg",  // Update with the correct path if needed
        width: 2500,
        height: 1667,
        link: "/Keramikversiegelung"
    },
];

const Services = () => {
    return (
        <section className='mt-20'>
            <MaxWidthWrapper>
                <div className='flex justify-center items-center flex-col'>
                    <Badge>Service</Badge>
                    <h1 className='text-4xl mt-2 font-bold text-gray-800 text-center'>Bringen Sie den Glanz Ihres Autos zurück</h1>
                    <p className='max-w-prose text-muted-foreground text-center mt-2'>Erleben Sie den ultimativen Autopflege-Service für ein makelloses, neuwertiges Aussehen und neuen Glanz Ihres Fahrzeugs.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 mt-10'>
                    {data.map((item) => (
                        <div key={item.id} className="rounded-lg border border-input shadow-sm relative overflow-hidden h-60 md:h-64">
                            <Image src={item.src} width={item.width} height={item.height} alt="Beschreibungs Bild" className='absolute top-0 left-0 w-full -z-20' />
                            <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/60 -z-10'></div>
                            <div className='p-5 pt-0 z-50 flex flex-col justify-between h-full'>
                                <div>
                                    <h1 className="text-2xl font-bold text-white break-words mt-5">
                                        {item.header}
                                    </h1>
                                    <h1 className="text-white/60">{item.info}</h1>
                                </div>
                                {/* <p className="text-muted-foreground mt-5">{item.text}</p> */}
                                <Link href={item.link}>
                                    <Button className="mt-5 flex items-center gap-2">
                                        Informationen und Bilder
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Services;
