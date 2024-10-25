import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Mouse } from 'lucide-react'
import React from 'react'
import Image from "next/image"
import Extras3 from '@/components/Extras3'
import Questions2 from '@/components/Questions2'
import Banner from '@/components/Banner'

const page = () => {
    return (
        <div>
            <div className="w-full h-[40rem] md:h-screen bg-[url('/services/exterior.jpg')] bg-cover bg-center relative flex flex-col justify-center text-white p-10 md:p-20">
                <h1 className='text-3xl md:text-5xl xl:text-8xl font-bold max-w-[100%] lg:max-w-[80%]'>Professionelle Außenaufbereitung, Ihr Fahrzeug wird in neuem Glanz strahlen.</h1>
                <div className='absolute left-[50%] bottom-5 transform translate-x-[-50%]'>
                    <Mouse className='w-10 h-10 animate-bounce' />
                </div>
            </div>
            <MaxWidthWrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-20'>
                    <div className='w-full h-auto rounded-md relative overflow-hidden'>
                        <Image src="/außen_1.jpg" width={1667} height={2500} alt={'Außen'} className='h-full rounded-md'></Image>
                        <div className='absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black p-5 flex flex-col justify-end text-white'>
                            <p className='text-xl font-semibold'>Lacktiefenmessung</p>
                            <p className='mt-2 text-xs text-white/70 max-w-xs'>Dieser Schritt dient uns festzustellen in welchem Zustand der Lack deines Fahrzeuges ist.</p>
                        </div>
                    </div>
                    <div className='w-full h-auto rounded-md relative overflow-hidden'>
                        <Image src="/außen_2.jpg" width={1667} height={2500} alt={'Außen'}  className='h-full rounded-md'></Image>
                        <div className='absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black p-5 flex flex-col justify-end text-white'>
                            <p className='text-xl font-semibold'>Oberflächenreinigung & Kneten</p>
                            <p className='mt-2 text-xs text-white/70 max-w-xs'>Dieser Schritt ist essenziell um nach der Wäsche jeden Fleck zu entfernen und ist die Vorbereitung für die anstehende Politur.</p>
                        </div>
                    </div>
                    <div className='w-full h-auto rounded-md relative overflow-hidden'>
                        <Image src="/außen_3.jpg" width={1667} height={2500} alt={'Außen'}  className='h-full rounded-md'></Image>
                        <div className='absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black p-5 flex flex-col justify-end text-white'>
                            <p className='text-xl font-semibold'>Polieren</p>
                            <p className='mt-2 text-xs text-white/70 max-w-xs'>Durch unser Handwerk der Politur lassen wir Ihren Lack wieder erstrahlen wie am ersten Tag.</p>
                        </div>
                    </div>
                    <div className='w-full h-auto rounded-md relative overflow-hidden'>
                        <Image src="/außen_4.jpg" width={1667} height={2500} alt={'Außen'}  className='h-full rounded-md'></Image>
                        <div className='absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black p-5 flex flex-col justify-end text-white'>
                            <p className='text-xl font-semibold'>Finish und Kontrolle</p>
                            <p className='mt-2 text-xs text-white/70 max-w-xs'>Bevor ein Fahrzeug zur Abholung freigegeben wird. Wird das Fahrzeug gründlich kontrolliert.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <Extras3></Extras3>
                    <Questions2></Questions2>
                    <Banner></Banner>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default page