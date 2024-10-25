"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from "next/image"
import Benefits from '@/components/Benefits'
import Banner from '@/components/Banner'

const page = () => {
    const handleCall = () => {
        window.location.href = 'tel:015204737960';
    };

    const handleMail = () => {
        window.location.href = 'mailto:info@cleanxcar.de';
    }
    return (
        <MaxWidthWrapper>
            <div className='mt-40'>
                <Badge>Trockeneisreinigung</Badge>
                <h1 className='text-5xl font-bold mt-2'>Schonende und effektive Reinigung mit modernster Trockeneistechnologie</h1>
                <p className='mt-5 text-sm text-muted-foreground'>Sorgen Sie für eine gründliche Reinigung und Konservierung mit unserer fortschrittlichen Trockeneistechnologie. Wir entfernen hartnäckige Verschmutzungen sanft und effektiv, ohne die Oberfläche zu beschädigen.</p>
                <div className='mt-5 flex items-center gap-2'>
                    <Button onClick={handleCall}>
                        Termin vereinbaren per Telefon
                        <ArrowRight className='w-5 h-5 ml-2'></ArrowRight>
                    </Button>
                    <Button variant="outline" onClick={handleMail}>
                        Termin vereinbaren per Mail
                        <ArrowRight className='w-5 h-5 ml-2'></ArrowRight>
                    </Button>
                </div>
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="h-[50rem] w-full bg-[url('/img_2.jpg')] rounded-md bg-cover bg-center">
                    {/* <Image src="/img_1.jpg" width={1179} height={1960} alt='Trockeneis' className='h-full'></Image> */}
                </div>
                <div className="h-[50rem] w-full bg-[url('/img_1.jpg')] rounded-md bg-cover bg-center">
                    {/* <Image src="/img_1.jpg" width={1179} height={1960} alt='Trockeneis' className='h-full'></Image> */}
                </div>
            </div>

            <div className='mt-5'>
                <Benefits></Benefits>
            </div>

            <div className='mt-5'>
                <Banner></Banner>
            </div>
        </MaxWidthWrapper>

    )
}

export default page