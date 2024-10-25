import Banner from '@/components/Banner'
import CarDetailingBenefits from '@/components/CarDetailingBenefits'
import Galary from '@/components/Galary'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Questions3 from '@/components/Questions3'
import React from 'react'

const page = () => {
    return (
        <div>
            <MaxWidthWrapper>
                <h1 className='mt-40 font-bold text-5xl'><span className='text-primary'>CleanXCar &minus; Komplettaufbereitung</span>. Die Kombination aus der Innenraumaufbereitung und der Außenaufbereitung.</h1>
            </MaxWidthWrapper>
            <Galary></Galary>
            <MaxWidthWrapper className='flex flex-col gap-5'>
                <CarDetailingBenefits></CarDetailingBenefits>
                <div className='mt-10'>
                    <Questions3></Questions3>
                </div>
                <Banner></Banner>
            </MaxWidthWrapper>
        </div>
    )
}

export default page