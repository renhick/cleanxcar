import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Sparkles, Clock, Zap } from "lucide-react";

const Benefits = () => {
    const benefits = [
        {
            title: "Umweltfreundlich",
            description: "Trockeneisstrahlen hinterlässt keine schädlichen Rückstände oder Chemikalien und trägt zur Reduzierung des CO2-Fußabdrucks bei",
            icon: <Leaf className="w-8 h-8 text-primary" />,
            badges: ["CO2-neutral", "Keine Chemikalien", "Umweltschonend"]
        },
        {
            title: "Schonend zum Lack",
            description: "Entfernt Verschmutzungen effektiv, ohne den Autolack zu beschädigen oder Kratzer zu hinterlassen",
            icon: <Shield className="w-8 h-8 text-primary" />,
            badges: ["Lackschonend", "Kratzerlos", "Materialschonend"]
        },
        {
            title: "Effektive Reinigung",
            description: "Mühelos werden Teer, Rost, Farbspritzer und mehr gründlich beseitigt ohne aggressive Reinigungsmittel",
            icon: <Sparkles className="w-8 h-8 text-primary" />,
            badges: ["Teerentfernung", "Rostbeseitigung", "Tiefenreinigung"]
        },
        {
            title: "Zeit- und Kosteneffizient",
            description: "Schnelle Reinigung ohne Wartezeiten - Fahrzeuge können direkt nach der Behandlung verwendet werden",
            icon: <Zap className="w-8 h-8 text-primary" />,
            badges: ["Keine Wartezeit", "Sofort nutzbar", "Zeiteffizient"]
        }
    ];

    return (
        <div className="w-full mx-auto mt-10">
            <div className='flex justify-center items-center flex-col'>
                <Badge>Trockeneisreinigung</Badge>
                <h1 className='text-4xl mt-2 font-bold text-gray-800 text-center'>Vorteile der Trockeneisreinigung</h1>
                <p className='max-w-prose text-muted-foreground text-center mt-2'>Professionelle und umweltfreundliche Fahrzeugreinigung für beste Ergebnisse.</p>
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

export default Benefits;