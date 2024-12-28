'use client';

import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Badge } from './ui/badge';
import ExtraDrawer from './ExtraDrawer';

interface Service {
    id: string;
    header: string;
    price: string;
    text: string;
}

const Extras = () => {
    const [extraService, setExtraService] = useState<Service[]>([]);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const response = await fetch('/api/admin/services');
                const data = await response.json();
                setExtraService(Array.isArray(data.services) ? data.services.slice(0, 4) : []);
            } catch (error) {
                console.error('Fehler:', error);
                setExtraService([]);
            }
        };

        loadServices();
    }, []);

    return (
        <section className='mt-10'>
            <MaxWidthWrapper>
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
                                <div key={item.id} className="border border-white/20 rounded-md p-5 bg-white/20 bg-[url('/footer-grid.svg')] bg-cover bg-center -webkit-backdrop-filter -webkit-backdrop-blur-md backdrop-blur-md">
                                    <div className='flex justify-between items-center'>
                                        <p className='font-semibold text-white'>{item.header}</p>
                                        <p className='text-white/60'>{item.price}</p>
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
        </section>
    )
}

export default Extras