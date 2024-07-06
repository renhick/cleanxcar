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
        price: "149",
        text: "Erleben Sie Sauberkeit und Frische im Innenraum Ihres Fahrzeugs. Unsere Leistungen umfassen gründliche Reinigung, Geruchsbeseitigung, Polsterpflege, Scheibenreinigung und Desinfektion.",
        src: "/services/interiour.jpg",
        width: 2500,
        height: 1667,
    },
    {
        id: 2,
        header: "Außenaufbereitung",
        price: "199",
        text: "Unsere Dienstleistungen umfassen gründliche Fahrzeugwäsche, Lackaufbereitung, Felgen- und Reifenpflege, Versiegelung sowie Scheiben- und Scheinwerferpolitur. Für ein Auto, das nicht nur glänzt, sondern auch alle Blicke auf sich zieht.",
        src: "/services/exterior.jpg",  // Update with the correct path if needed
        width: 2500,
        height: 1667,
    },
    {
        id: 3,
        header: "Komplettaufbereitung",
        price: "299",
        text: "Unsere Rundum-Sorglos-Aufbereitung verwandelt Ihr Auto von innen und außen. Von Innenraumreinigung bis Lackpolitur, wir kümmern uns um alles, damit Ihr Fahrzeug in Topform erstrahlt. Gönnen Sie Ihrem Auto die Pflege, die es verdient.",
        src: "/services/complete.jpg",  // Update with the correct path if needed
        width: 2500,
        height: 1667,
    },
    {
        id: 4,
        header: "Keramikversiegelung",
        price: "299",
        text: "Unsere Keramikversiegelung schützt Ihren Lack langanhaltend vor Umwelteinflüssen und Verunreinigungen. Ein unsichtbarer Schild, der Ihren Lack strahlen lässt und ihm das gewisse Extra verleiht. Verleihen Sie Ihrem Auto den Schutz, den es verdient.",
        src: "/services/ceramic.jpg",  // Update with the correct path if needed
        width: 2500,
        height: 1667,
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
                                    <h1 className="text-muted-foreground">ab {item.price}€</h1>
                                </div>
                                {/* <p className="text-muted-foreground mt-5">{item.text}</p> */}
                                <Link href="/">
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
