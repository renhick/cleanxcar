import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from "next/image"

const Partner = () => {
    return (
        <MaxWidthWrapper>
            <div className='w-full grid grid-cols-5 gap-10'>

                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_1.png" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_2.png" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_3.jpg" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_4.jpg" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_5.jpg" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_6.png" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_7.svg" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_8.png" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_9.png" width={225} height={225} alt='Partner'></Image>
                </div>
                <div className='w-full flex justify-center items-center filter grayscale'>
                    <Image src="/partners/partner_10.jpg" width={225} height={225} alt='Partner'></Image>
                </div>

            </div>
        </MaxWidthWrapper>
    )
}

export default Partner