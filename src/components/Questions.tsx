import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { CircleArrowUp, CircleDotDashed, CircleGauge, CircleHelp, Clock } from 'lucide-react'

const Questions = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Häufig gestellte Fragen von unseren Kunden</CardTitle>
                <CardDescription>Hier können Sie Antworten zu häufig gestellten Fragen erhalten.</CardDescription>
            </CardHeader>

            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleHelp className='w-5 h-5 text-primary' />
                                Warum ist eine professionelle Innenraumaufbereitung wichtig?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine professionelle Innenraumaufbereitung ist wichtig, da sie sicherstellt, dass Ihr Fahrzeuginnenraum nicht nur sauber, sondern auch hygienisch und in bestmöglichem Zustand ist. Sie hilft, den Wert Ihres Fahrzeugs zu erhalten, unangenehme Gerüche zu beseitigen und Allergene zu reduzieren. Darüber hinaus schafft sie ein angenehmes Fahrerlebnis und verbessert den Gesamteindruck Ihres Fahrzeugs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Clock className='w-5 h-5 text-primary' />
                                Wie oft sollte eine Innenraumaufbereitung durchgeführt werden?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Die Häufigkeit hängt von der Nutzung Ihres Fahrzeugs ab. Im Allgemeinen empfehlen wir eine Innenraumaufbereitung alle 6 bis 12 Monate, um den Innenraum in gutem Zustand zu halten. Wenn Sie viel Zeit in Ihrem Auto verbringen oder häufig Passagiere befördern, kann eine häufigere Aufbereitung notwendig sein.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleArrowUp className='w-5 h-5 text-primary' />
                                Welche Vorteile bietet die Geruchsbeseitigung bei der Innenraumaufbereitung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Die Geruchsbeseitigung ist mehr als nur ein ästhetischer Aspekt. Sie entfernt unangenehme Gerüche, die durch Tabakrauch, Haustiere, Lebensmittel oder andere Quellen entstehen können. Dies schafft eine frische und angenehme Atmosphäre im Fahrzeuginnenraum, was Ihr Fahrerlebnis erheblich verbessert.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleDotDashed className='w-5 h-5 text-primary' />
                                Kann eine Innenraumaufbereitung Allergene und Keime reduzieren?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Ja, eine professionelle Innenraumaufbereitung kann Allergene und Keime reduzieren. Durch spezielle Reinigung und Desinfektion werden Staubmilben, Bakterien und Viren beseitigt. Dies schafft eine hygienische Umgebung im Fahrzeuginnenraum und kann besonders für Allergiker und Familien mit Kindern von Vorteil sein.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleGauge className='w-5 h-5 text-primary' />
                                Was ist der Unterschied zwischen einer Innenraumaufbereitung und einer einfachen Reinigung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Innenraumaufbereitung geht weit über eine herkömmliche Reinigung hinaus. Während eine Reinigung oberflächlichen Schmutz entfernt, beinhaltet die Aufbereitung eine gründliche Reinigung und Pflege von Kunststoff- und Lederflächen, die Beseitigung von unangenehmen Gerüchen, die Desinfektion und die Wiederherstellung des Erscheinungsbilds des Innenraums. Sie zielt darauf ab, den Fahrzeuginnenraum in bestmöglichem Zustand zu präsentieren und ein angenehmes, sauberes sowie hygienisches Umfeld zu schaffen.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default Questions