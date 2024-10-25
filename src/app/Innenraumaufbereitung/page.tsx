import Banner from '@/components/Banner'
import Extras2 from '@/components/Extras2'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Questions from '@/components/Questions'
import { TimelineInnenraumaufbereitung } from '@/components/TimelineInnenraumaufbereitung'
import { Compare } from '@/components/ui/compare'
import { Mouse } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="w-full h-[40rem] md:h-screen bg-[url('/services/interiour.jpg')] bg-cover bg-center relative flex flex-col justify-center text-white p-10 md:p-20">
                <h1 className='text-3xl md:text-5xl xl:text-8xl font-bold max-w-[100%] lg:max-w-[80%] '>Verwöhnen Sie ihr Auto von innen: Unsere Innenraum-Reinigung sorgt für Fahrspaß deluxe!</h1>
                <div className='absolute left-[50%] bottom-5 transform translate-x-[-50%]'>
                    <Mouse className='w-10 h-10 animate-bounce' />
                </div>
            </div>


            <MaxWidthWrapper>

                <div className='mt-10'>
                    <Compare
                        firstImage="/before.jpg"
                        secondImage="/after.jpg"
                        firstImageClassName="object-cover object-center"
                        secondImageClassname="object-cover object-center"
                        className="w-full rounded-md h-[700px]"
                        slideMode="hover"
                    />
                </div>

                <div>
                    <TimelineInnenraumaufbereitung></TimelineInnenraumaufbereitung>
                </div>

                <div>
                    <Extras2></Extras2>
                </div>

                <div className='mt-5'>
                    <Questions></Questions>
                </div>

                <div className='mt-5'>
                    <Banner></Banner>
                </div>

               

            </MaxWidthWrapper>
        </div>


    )
}

export default page