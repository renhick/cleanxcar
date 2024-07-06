import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const extraService = [
    {
        id: 1,
        header: "Shampoonieren der Sitze",
        price: "99,95",
        text: "Reinigung textiler Oberflächen mittels Sprühextraktionssauger",
    },
    {
        id: 2,
        header: "Lederreinugung & Pflege",
        price: "99,95",
        text: "Intensive Reinigung der Ledersitze & Pflege",
    },
    {
        id: 3,
        header: "Ozonbehandlung",
        price: "79,95",
        text: "Der besondere Frischekick gegen Gerüche & Keime",
    },
    {
        id: 4,
        header: "Tierhaarentfernung",
        price: "59,95",
        text: "Der besondere Frischekick gegen Gerüche & Keime",
    },
];


const Extras = () => {
  return (
    <section className='mt-10'>
        <MaxWidthWrapper>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2'>
                {extraService.map((item) =>(
                    <div key={item.id} className='border border-input rounded-lg p-5'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold'>{item.header}</p>
                            <p className='text-muted-foreground'>ab {item.price}€</p>
                        </div>

                        <div>
                            <p className='text-muted-foreground'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-5 flex justify-center'>
                    <Button variant="outline" className='flex items-center gap-2'>
                        Alle Extraleistungen anschauen
                        <ArrowRight className='w-5 h-5'></ArrowRight>
                    </Button>
                </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Extras