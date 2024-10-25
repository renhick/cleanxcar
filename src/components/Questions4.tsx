import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Timer, Wallet, Shield, ClipboardCheck, Star } from 'lucide-react'

const Questions4 = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Häufig gestellte Fragen zur Keramikversiegelung</CardTitle>
                <CardDescription>Hier finden Sie wichtige Informationen zur professionellen Keramikversiegelung Ihres Fahrzeugs.</CardDescription>
            </CardHeader>

            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <ClipboardCheck className='w-5 h-5 text-primary' />
                                Was beinhaltet eine Keramikversiegelung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Keramikversiegelung umfasst die gründliche Vorbereitung der Fahrzeugoberfläche durch Reinigung, Politur und gegebenenfalls Lackkorrektur, gefolgt von der Applikation der Keramikversiegelung. Diese Versiegelung schützt den Lack vor Umwelteinflüssen, UV-Strahlung und sorgt für eine langanhaltende Glanzschicht.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Timer className='w-5 h-5 text-primary' />
                                Wie lange dauert eine Keramikversiegelung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Die Durchführung einer professionellen Keramikversiegelung dauert in der Regel 1-3 Tage. Der genaue Zeitrahmen hängt von der Vorbereitung, dem Zustand des Lacks und der Fahrzeuggröße ab. Wir nehmen uns die nötige Zeit, um optimale Ergebnisse zu gewährleisten.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Wallet className='w-5 h-5 text-primary' />
                                Was kostet eine Keramikversiegelung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Die Kosten für eine Keramikversiegelung variieren je nach Fahrzeugtyp und Zustand zwischen 500€ und 1500€. Premiumprodukte oder besondere Anforderungen können die Kosten erhöhen. Nach Begutachtung erstellen wir Ihnen ein individuelles Angebot.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Shield className='w-5 h-5 text-primary' />
                                Wie lange hält eine Keramikversiegelung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Keramikversiegelung hält je nach Pflege und äußeren Einflüssen mehrere Jahre. Sie bietet robusten Schutz gegen Witterung und UV-Strahlung. Regelmäßige Nachpflege und sorgsamer Umgang können die Haltbarkeit auf bis zu 5 Jahre verlängern.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Star className='w-5 h-5 text-primary' />
                                Für welche Fahrzeuge ist eine Keramikversiegelung besonders empfehlenswert?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Keramikversiegelung ist besonders für Neuwagen, hochwertige Fahrzeuge und Leasingfahrzeuge empfehlenswert, um den Lack dauerhaft zu schützen und den Wert des Fahrzeugs zu erhalten. Sie bietet außerdem einen idealen Schutz für Fahrzeuge, die intensiver Nutzung und widrigen Witterungsverhältnissen ausgesetzt sind.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default Questions4
