import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Diamond, Droplets, SparkleIcon } from "lucide-react";

const CeramicCoatingBenefits = () => {
    const benefits = [
        {
            title: "Ultimativer Lackschutz",
            description: "9H Härtegrad Keramikversiegelung bietet maximalen Schutz vor Kratzern, Steinschlägen und Umwelteinflüssen",
            icon: <Diamond className="w-8 h-8 text-primary" />,
            badges: ["9H Härtegrad", "Kratzerfest", "Steinschlagschutz"]
        },
        {
            title: "Langzeit-Performance",
            description: "Professionelle Keramikversiegelung hält bis zu 5 Jahre und bietet dauerhaften Schutz und Glanz",
            icon: <Clock className="w-8 h-8 text-primary" />,
            badges: ["5 Jahre Haltbarkeit", "UV-Beständig", "Wetterresistent"]
        },
        {
            title: "Selbstreinigungseffekt",
            description: "Hydrophobe Eigenschaften lassen Wasser und Schmutz einfach abperlen - für mühelose Pflege",
            icon: <Droplets className="w-8 h-8 text-primary" />,
            badges: ["Lotus-Effekt", "Pflegeleicht", "Schmutzabweisend"]
        },
        {
            title: "Brillanter Glanz",
            description: "Keramikbeschichtung verstärkt die Farbtiefe und verleiht einen einzigartigen, kristallinen Hochglanz",
            icon: <SparkleIcon className="w-8 h-8 text-primary" />,
            badges: ["Spiegelglanz", "Farbbrillanz", "Candy-Effekt"]
        }
    ];

    return (
        <div className="w-full mx-auto mt-10">
            <div className='flex justify-center items-center flex-col'>
                <Badge>Keramikversiegelung</Badge>
                <h1 className='text-4xl mt-2 font-bold text-gray-800 text-center'>Vorteile einer Keramikversiegelung</h1>
                <p className='max-w-prose text-muted-foreground text-center mt-2'>Professionelle Fahrzeugschutz für maximalen Werterhalt und Sauberkeit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className='w-14 h-14 rounded-sm bg-muted flex justify-center items-center'>{benefit.icon}</div>
                                <div>
                                    <CardTitle className='text-gray-900 text-xl'>{benefit.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="mb-4">{benefit.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                                {benefit.badges.map((badge, badgeIndex) => (
                                    <Badge key={badgeIndex} variant="secondary">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CeramicCoatingBenefits;