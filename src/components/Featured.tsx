import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Featured = () => {
  return (
    <MaxWidthWrapper>
      <section className='mt-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className="w-full h-[35rem] bg-[url('/clean.jpg')] bg-cover bg-center p-10 flex flex-col justify-end rounded-lg">
            <h1 className='text-2xl uppercase font-bold text-white'>Innenraumaufbereitung</h1>
            <Link href="/">
              <Button variant="outline" className='bg-transparent text-white mt-2 flex items-center gap-2'>
                Mehr Informationen
                <ArrowRight className='w-5 h-5'></ArrowRight>
              </Button>
            </Link>
          </div>
          <div className="w-full h-[35rem] bg-[url('/finish.jpg')] bg-cover bg-center p-10 flex flex-col justify-end rounded-lg">
            <h1 className='text-2xl uppercase font-bold text-white'>Außenaufbereitung</h1>
            <Link href="/">
              <Button variant="outline" className='bg-transparent text-white mt-2 flex items-center gap-2'>
                Mehr Informationen
                <ArrowRight className='w-5 h-5'></ArrowRight>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}

export default Featured