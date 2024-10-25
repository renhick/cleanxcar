import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Recycle, PersonStanding, Earth } from 'lucide-react'

const Banner = () => {
    return (
        <Card className='bg-gradient-to-b from-primary to-[#022347]'>
            <CardHeader>
                <CardTitle>
                    <div className='flex items-center gap-2'>
                        <Recycle className='w-10 h-10 text-white' />
                        <PersonStanding className='w-10 h-10 text-white' />
                        <Earth className='w-10 h-10 text-white'/>
                    </div>
                    <p className='mt-2 text-6xl font-semibold text-white'>Gemacht, um einen <br /> Unterschied zu machen.</p>
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                <div className='w-full h-[1px] bg-white/10'></div>

                <div className='mt-5'>
                    <p className='text-sm text-white/70'>Unsere Leidenschaft für Fahrzeuge vereinen wir mit einem starken Umweltbewusstsein. Wir nutzen umweltfreundliche Produkte, wassersparende Techniken und energieeffiziente Ausrüstung, um Ihr Auto auf nachhaltige Weise auf Hochglanz zu bringen. Für eine saubere Umwelt und ein strahlendes Auto.</p>
                    <p className='text-sm text-white/70 mt-2'>Wir geben Ihnen das Versprechen, Ihr Fahrzeug nachhaltig und qualitativ aufzubereiten. <span className='text-white'>CleanXCar &minus; Touch of Excellence</span></p>
                </div>
            </CardContent>
        </Card>
    )
}

export default Banner