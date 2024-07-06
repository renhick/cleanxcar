import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { ArrowRight, Navigation } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='w-full mt-20 p-10 bg-gradient-to-b from-primary to-[#022347]'>
            <MaxWidthWrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-2 md:gap-20'>
                    <div className='text-white'>
                        <Image className='w-44 h-auto brightness-200' src="/logo_2.png" width={1308} height={402} alt='cxc Logo'></Image>
                        <Separator className='mt-5 bg-white/10'></Separator>
                        <p className='text-sm text-white/60 mt-5'>Natürliche Brillanz, wie am ersten Tag entdeckt. Gönnen Sie Ihrem Fahrzeug eine Aufbereitung, die seinen Glanz wieder aufleben lässt.</p>
                        <div className='flex items-center gap-2 mt-5'>
                            <Link href="/">
                                <Button variant="outline" className="flex items-center gap-2 bg-transparent border-white/10">
                                    Kontakt aufnehmen
                                    <ArrowRight className="w-5 h-5"></ArrowRight>
                                </Button>
                            </Link>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-0 gap-5'>
                        <div className='text-white'>
                            <h1 className='text-xl font-semibold'>Dienstleistungen</h1>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Innenraumaufbereitung</p>
                                </Link>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Außenaufbereitung</p>
                                </Link>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Komplettaufbereitung</p>
                                </Link>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Keramikversiegelung</p>
                                </Link>
                            </div>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-xl font-semibold'>Über Uns</h1>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Bildergallerie</p>
                                </Link>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Bewertungen</p>
                                </Link>
                            </div>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-xl font-semibold'>Kontakt</h1>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Kontaktformular</p>
                                </Link>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Anfahrt</p>
                                </Link>
                            </div>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-xl font-semibold'>Rechtliches</h1>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Impressum</p>
                                </Link>
                                <Link href="/">
                                    <p className='text-sm text-white/60'>Datenschutzerklärung</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-xs text-white/60 mt-10'>
                    <p>	&copy; Copyright CleanXCar. All right reserved 2024</p>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer