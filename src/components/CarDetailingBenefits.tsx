import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Car, Shield, Euro, ThumbsUp, Heart } from "lucide-react";

const CarDetailingBenefits = () => {
    const benefits = [
        {
            title: "Wertsteigerung",
            description: "Professionelle Aufbereitung erhöht den Wiederverkaufswert Ihres Fahrzeugs erheblich",
            icon: <Euro className="w-8 h-8 text-primary" />,
            badges: ["Bis zu +30% Restwert", "Bessere Verhandlungsposition"]
        },
        {
            title: "Langlebiger Schutz",
            description: "Hochwertige Versiegelung schützt den Lack vor Umwelteinflüssen und UV-Strahlung",
            icon: <Shield className="w-8 h-8 text-primary" />,
            badges: ["Lackschutz", "Konservierung", "UV-Schutz"]
        },
        {
            title: "Optische Aufwertung",
            description: "Beseitigung von Kratzern, Swirls und anderen Lackdefekten für einen Showroom-Glanz",
            icon: <Sparkles className="w-8 h-8 text-primary" />,
            badges: ["Spiegelglanz", "Kratzerentfernung", "Tiefenglanz"]
        },
        {
            title: "Hygiene & Gesundheit",
            description: "Gründliche Innenraumreinigung entfernt Bakterien, Allergene und unangenehme Gerüche",
            icon: <Heart className="w-8 h-8 text-primary" />,
            badges: ["Desinfektion", "Allergenentfernung", "Geruchsneutral"]
        }
    ];

    return (
        <div className="w-full mx-auto mt-10">
            <div className='flex justify-center items-center flex-col'>
                <Badge>Komplettaufbereitung</Badge>
                <h1 className='text-4xl mt-2 font-bold text-gray-800 text-center'>Vorteile der Komplettaufbereitung</h1>
                <p className='max-w-prose text-muted-foreground text-center mt-2'>Professionelle Fahrzeugpflege für maximalen Werterhalt.</p>
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

export default CarDetailingBenefits;