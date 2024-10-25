"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import CeramicCoatingBenefits from '@/components/CeramicCoatingBenefits'
import Questions4 from '@/components/Questions4'
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
                <Badge>Keramikversiegelung</Badge>
                <h1 className='text-5xl font-bold mt-2'>Ultimativer Schutz für Ihren Lack mit modernster Keramiktechnologie</h1>
                <p className='mt-5 text-sm text-muted-foreground'>Schützen Sie Ihren Lack mit unserer modernsten Keramiktechnologie. Wir versiegeln Ihren Lack für besseren Schutz, einfaches Waschen und für das Wie&minus;Neu&minus;Gefühl.</p>
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

            <div className='mt-10'>
                <Image src="/ceramic.jpg" width={2500} height={1406} alt='Keramik' className='rounded-md'></Image>
            </div>

            <CeramicCoatingBenefits></CeramicCoatingBenefits>

            <div className='mt-5'>
                <Questions4></Questions4>
            </div>

            <div className='mt-5'>
                <Banner></Banner>
            </div>
        </MaxWidthWrapper>
    )
}

export default page