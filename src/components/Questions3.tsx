import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Timer, Wallet, Shield, ClipboardCheck, Star } from 'lucide-react'

const Questions3 = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Häufig gestellte Fragen zur Komplettaufbereitung</CardTitle>
                <CardDescription>Hier finden Sie wichtige Informationen zur professionellen Komplettaufbereitung Ihres Fahrzeugs.</CardDescription>
            </CardHeader>

            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <ClipboardCheck className='w-5 h-5 text-primary' />
                                Was beinhaltet eine Komplettaufbereitung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Komplettaufbereitung umfasst sowohl die Innen- als auch Außenaufbereitung Ihres Fahrzeugs. Im Innenraum werden alle Oberflächen gereinigt, desinfiziert und gepflegt, inklusive Polsterreinigung, Lederpflege und Klimaanlagenreinigung. Die Außenaufbereitung beinhaltet eine professionelle Handwäsche, Lackkorrektur, Politur, Felgenaufbereitung und abschließende Versiegelung. Auch der Motorraum wird gereinigt und konserviert.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Timer className='w-5 h-5 text-primary' />
                                Wie lange dauert eine Komplettaufbereitung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine professionelle Komplettaufbereitung nimmt in der Regel 1-2 Arbeitstage in Anspruch. Die genaue Dauer hängt vom Zustand und der Größe des Fahrzeugs ab. Bei stark verschmutzten Fahrzeugen oder zusätzlichen Leistungen wie Keramikversiegelung kann sich die Bearbeitungszeit auf bis zu 3 Tage verlängern. Wir nehmen uns die nötige Zeit, um ein optimales Ergebnis zu erzielen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Wallet className='w-5 h-5 text-primary' />
                                Was kostet eine Komplettaufbereitung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Die Kosten für eine Komplettaufbereitung variieren je nach Fahrzeuggröße und -zustand zwischen 300€ und 800€. Für Premiumfahrzeuge oder bei speziellen Anforderungen wie Keramikversiegelung können die Kosten auch höher liegen. Im Erstgespräch erstellen wir Ihnen nach Begutachtung Ihres Fahrzeugs ein individuelles Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Shield className='w-5 h-5 text-primary' />
                                Wie lange hält eine Komplettaufbereitung?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Bei normaler Nutzung und regelmäßiger Pflege hält eine Komplettaufbereitung etwa 6-12 Monate. Die Haltbarkeit hängt stark von verschiedenen Faktoren ab, wie Standort, Nutzungsintensität und äußeren Einflüssen. Die verwendete Versiegelungsart spielt ebenfalls eine wichtige Rolle - eine Keramikversiegelung kann beispielsweise bis zu mehreren Jahren Schutz bieten.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <Star className='w-5 h-5 text-primary' />
                                Für welche Fahrzeuge ist eine Komplettaufbereitung besonders empfehlenswert?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>
                            Eine Komplettaufbereitung ist besonders empfehlenswert für Fahrzeuge, die verkauft werden sollen, nach längerer Standzeit wieder in Betrieb genommen werden oder einfach eine grundlegende Auffrischung benötigen. Auch bei Leasingrückläufern kann eine professionelle Aufbereitung helfen, kostspielige Nachzahlungen zu vermeiden. Generell profitieren alle Fahrzeuge von einer regelmäßigen Komplettaufbereitung, da sie zur Werterhaltung beiträgt und die Langlebigkeit aller Materialien fördert.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default Questions3