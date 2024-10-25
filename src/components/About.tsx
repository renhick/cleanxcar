import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { Badge } from './ui/badge'

const About = () => {
    return (
        <MaxWidthWrapper>
            <section className='mt-20' id='about'>
                <Image src="/personal_2.jpg" width={2500} height={1667} alt='Unternehmensfoto' className='rounded-lg'></Image>
                <div className='mt-5'>
                    <Badge>Geschäftsführer</Badge>
                    <h1 className='text-gray-900 text-4xl font-bold'>Eray Onur</h1>

                    <div className='mt-5'>
                        <h1 className='text-xl font-bold'>Ihre Fahrzeuge in den besten Händen.</h1>
                        <p className='mt-2 text-muted-foreground'>Herzlich willkommen! Als Gründer und Geschäftsführer von CleanXCar liegt mir die perfekte Aufbereitung Ihres Fahrzeugs besonders am Herzen.

                            Seit über 3 Jahren widme ich mich mit Leidenschaft der professionellen Fahrzeugaufbereitung. Was als kleine Werkstatt begann, hat sich zu einem der führenden Unternehmen in der Region entwickelt.

                            Mein Team und ich arbeiten täglich daran, Ihrem Fahrzeug neuen Glanz zu verleihen. Dabei setzen wir auf modernste Technologien und nachhaltige Produkte, um bestmögliche Ergebnisse zu erzielen.</p>
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    )
}

export default About