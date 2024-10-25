"use client"

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {

    const handleCall = () => {
        window.location.href = 'tel:015204737960';
    };

    const handleMail = () => {
        window.location.href = 'mailto:info@cleanxcar.de';
    }
    return (
        <MaxWidthWrapper>
            <Card className='mt-4 bg-gradient-to-b from-primary to-[#022347] text-white'>
                <CardHeader>
                    <CardTitle>Bereit für den nächsten Schritt?</CardTitle>
                    <CardDescription className='text-white/70'>CleanXCar steht stets für Ihre Wünsche offen. Rufen Sie uns einfach binnen der Öffnungszeiten an.</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className='text-white/70'>
                        <p className='font-bold'>Öffnungszeiten:</p>
                        <p>Motags bis Freitags von 11 &minus; 18 Uhr</p>
                        <p>Samstags von 12 &minus; 16 Uhr</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-5'>
                        <Button className='flex items-center gap-2' onClick={handleCall}>
                            <Phone className='w-5 h-5' />
                            <p>01520 4737960 anrufen</p>
                        </Button>
                        <Button className='flex items-center gap-2 text-gray-900' variant="outline" onClick={handleMail}>
                            <Mail className='w-5 h-5' />
                            <p>info@cleanxcar.de</p>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}

export default Contact