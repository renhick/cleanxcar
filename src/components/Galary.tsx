import React from 'react';
import { Card } from './ui/card';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from "next/image"

const Gallery = () => {
    const images = [
        { id: 1, src: "/clean.jpg", alt: "Landschaft 1", featured: true },
        { id: 2, src: "/cars.jpg", alt: "Portrait 1" },
        { id: 3, src: "/finish.jpg", alt: "Portrait 2" },
        { id: 4, src: "/customer.jpg", alt: "Landschaft 2" },
        { id: 5, src: "/services/ceramic.jpg", alt: "Quadrat 1" },
        { id: 6, src: "/services/interiour.jpg", alt: "Landschaft 3" },
        { id: 7, src: "/banner.jpg", alt: "Landschaft 3" },
        { id: 8, src: "/business.jpg", alt: "Landschaft 3" },
    ];

    return (
        <MaxWidthWrapper>
            <div className="w-full mt-10">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
                    {/* Featured Image */}
                    <Card className="md:col-span-4 md:row-span-2 overflow-hidden">
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </Card>

                    {/* Regular Images */}
                    {images.slice(1, 6).map((image) => (
                        <Card key={image.id} className="md:col-span-2 overflow-hidden group">
                            <div className="relative h-full">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                            </div>
                        </Card>
                    ))}

                    {/* Zwei zusätzliche große Bilder unten */}
                    {images.slice(6).map((image) => (
                        <Card key={image.id} className="md:col-span-3 md:row-span-2 overflow-hidden group">
                            <div className="relative h-full">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="relative h-full group overflow-hidden rounded-md mt-4 ">
                     <Image className='rounded-md transition-transform duration-300 group-hover:scale-105' src="/cars_2.jpg" width={2500} height={1667} alt='test'></Image>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>

               
            </div>
        </MaxWidthWrapper>
    );
};

export default Gallery;