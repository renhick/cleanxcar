import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { CircleArrowUp, CircleDotDashed, CircleGauge, CircleHelp, Clock } from 'lucide-react'

const Questions2 = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Häufig gestellte Fragen von unseren Kunden</CardTitle>
                <CardDescription>Hier können Sie Antworten zu häufig gestellten Fragen zur Außenaufbereitung erhalten.</CardDescription>
            </CardHeader>

            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleHelp className='w-5 h-5 text-primary' />
                                Warum ist eine professionelle Außenaufbereitung wichtig?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine professionelle Außenaufbereitung ist essentiell für den Werterhalt Ihres Fahrzeugs. Sie schützt den Lack vor Umwelteinflüssen, beseitigt hartnäckige Verschmutzungen und Kratzer und stellt den ursprünglichen Glanz wieder her. Zudem bietet sie einen langanhaltenden Schutz gegen UV-Strahlung, Oxidation und andere schädliche Einwirkungen, die den Lack Ihres Fahrzeugs beeinträchtigen können.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Clock className='w-5 h-5 text-primary' />
                                Wie oft sollte eine Außenaufbereitung durchgeführt werden?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Für optimalen Schutz empfehlen wir eine professionelle Außenaufbereitung zwei- bis dreimal pro Jahr. Die Häufigkeit kann je nach Nutzung, Standort und Umweltbedingungen variieren. Fahrzeuge, die häufig im Freien parken oder besonderen Umweltbelastungen ausgesetzt sind, sollten häufiger aufbereitet werden. Eine regelmäßige Aufbereitung ist besonders wichtig vor und nach der Winterperiode.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleArrowUp className='w-5 h-5 text-primary' />
                                Welche Vorteile bietet eine Lackversiegelung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Lackversiegelung bietet mehrere wichtige Vorteile: Sie schützt den Lack langanhaltend vor UV-Strahlung, Oxidation und chemischen Einflüssen. Der Lotus-Effekt erschwert das Anhaften von Schmutz und erleichtert die Reinigung. Die Versiegelung verleiht dem Fahrzeug einen brillanten Tiefenglanz und trägt zur Werterhaltung bei. Je nach verwendetem Produkt kann der Schutz 6-12 Monate oder länger anhalten.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleDotDashed className='w-5 h-5 text-primary' />
                                Können Kratzer und Swirls durch eine Aufbereitung entfernt werden?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Ja, durch professionelle Politur können leichte bis mittlere Kratzer und Swirls effektiv entfernt werden. Durch mehrere Polierdurchgänge mit unterschiedlichen Körnungen werden Unebenheiten ausgeglichen und der Lack wieder auf Hochglanz gebracht. Tiefere Kratzer, die bis in die Grundierung oder das Metall reichen, benötigen jedoch eine Lackierung.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <CircleGauge className='w-5 h-5 text-primary' />
                                Was ist der Unterschied zwischen einer Außenaufbereitung und einer normalen Autowäsche?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Außenaufbereitung ist deutlich umfangreicher als eine normale Autowäsche. Während die Autowäsche nur oberflächlichen Schmutz entfernt, umfasst die Aufbereitung eine Lackkorrektur durch Polieren, die Entfernung von Teer und Baumharz, eine intensive Felgenreinigung, die Aufbereitung von Kunststoffteilen sowie eine professionelle Versiegelung. Das Ziel ist nicht nur die Reinigung, sondern auch die Korrektur von Lackschäden und ein langanhaltender Schutz der Oberflächen.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default Questions2