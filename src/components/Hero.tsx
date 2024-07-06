import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <div>
            <MaxWidthWrapper>
                <section className='mt-40'>
                    <div className='flex md:items-center flex-col'>
                        <div className='md:text-center flex items-center flex-col'>
                            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 break-words'>
                                <span className='text-primary'>CleanXCar</span> <span className='md:inline hidden'>-</span> Professionelle Fahrzeug<span className='md:hidden'>-</span><br className='md:hidden' />aufbereitung
                            </h1>

                            <p className='mt-5 text-muted-foreground max-w-prose'>Ihr zuverlässiger Partner in Sachen Fahrzeugpflege. Gründliche Innenreinigung, glänzende Außenaufbereitung. Für ein strahlend sauberes Auto.</p>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <Link href="/">
                                <Button className='flex items-center gap-2'>
                                    Termin vereinbaren
                                    <ArrowRight className='w-5 h-5' />
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline">
                                    Entdecken
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </MaxWidthWrapper>

            <section className='mt-10'>
                <MaxWidthWrapper>
                    <div className='w-full'>
                        <Image src="/porsche.png" width={1515} height={426} alt='Auto Bild'></Image>
                    </div>
                </MaxWidthWrapper>
                <div className='w-full -mt-10 md:-mt-20 bg-gradient-to-b from-primary to-[#022347] pb-10'>
                    <MaxWidthWrapper>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 pt-20 md:pt-32'>
                            <div className="w-full rounded-lg border bg-white/10 border-white/20 p-5 bg-[url('/footer-grid.svg')] bg-cover bg-center text-center">
                                <h1 className='text-3xl font-bold text-white'>387+</h1>
                                <p className='text-white/50'>aufbereitete Fahrzeuge</p>
                            </div>
                            <div className="w-full rounded-lg border bg-white/10 border-white/20 p-5 bg-[url('/footer-grid.svg')] bg-cover bg-center text-center">
                                <h1 className='text-3xl font-bold text-white'>100+</h1>
                                <p className='text-white/50'>aufbereitete Supercars</p>
                            </div>
                            <div className="w-full rounded-lg border bg-white/10 border-white/20 p-5 bg-[url('/footer-grid.svg')] bg-cover bg-center text-center">
                                <h1 className='text-3xl font-bold text-white'>130+</h1>
                                <p className='text-white/50'>5 Sterne Bewertungen</p>
                            </div>
                            <div className="w-full rounded-lg border bg-white/10 border-white/20 p-5 bg-[url('/footer-grid.svg')] bg-cover bg-center text-center">
                                <h1 className='text-3xl font-bold text-white'>130+</h1>
                                <p className='text-white/50'>5 Sterne Bewertungen</p>
                            </div>

                        </div>
                    </MaxWidthWrapper>
                </div>
            </section>
        </div>


    )
}

export default Hero