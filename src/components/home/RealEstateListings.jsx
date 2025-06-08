import React, {useState} from 'react';
import {Share, Heart, ChevronLeft, ChevronRight} from 'lucide-react';
import adsLogo from "../../assets/ads.png";

const RealEstateListings = () => {
    const [currentSlides, setCurrentSlides] = useState({});

    // Örnek emlak verileri
    const properties = [
        {
            id: 1,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: ["Fiyat Düştü", "Acil"],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 2,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 3,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 4,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 6,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 7,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: ["Fiyat Düştü", "Acil"],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 8,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 9,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 10,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 11,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: ["Fiyat Düştü", "Acil"],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 12,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 15,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 16,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 17,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 18,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 19,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        },
        {
            id: 20,
            price: "1.300.000 ₺",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...",
            status: "Satılık",
            rooms: "4+1",
            area: "200 m²",
            tags: ["Fiyat Düştü", "Apartman", "Yeni", "3D Modelleme"],
            badges: [],
            images: [
                "/public/ilan-gorsel.png",
                "/public/ilan-gorsel2.png",
            ]
        }
    ];

    // Banner reklam alanları
    const bannerAds = [5, 14, 19];

    const nextSlide = (propertyId) => {
        setCurrentSlides(prev => ({
            ...prev,
            [propertyId]: prev[propertyId] === 1 ? 0 : 1
        }));
    };

    const prevSlide = (propertyId) => {
        setCurrentSlides(prev => ({
            ...prev,
            [propertyId]: prev[propertyId] === 0 ? 1 : 0
        }));
    };

    const getTagColor = (index) => {
        const colors = ['bg-slate-600', 'bg-slate-700', 'bg-blue-600', 'bg-blue-700'];
        return colors[index % colors.length];
    };

    const PropertyCard = ({property}) => {
        const currentSlide = currentSlides[property.id] || 0;

        return (
            <div className="bg-white rounded-lg shadow-lg border border-black relative">
                {/* Üst etiketler */}
                <div className="absolute top-1 left-1 flex items-center gap-1 flex-wrap p-2 z-50">
                    {property.tags.map((tag, index) => (
                        <div
                            key={index}
                            className={`text-white text-xs py-1 px-2 rounded-md ${getTagColor(index)}`}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Resim slider */}
                <div className="relative overflow-hidden rounded-t-lg">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {property.images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img
                                    className="w-full h-[270px] object-cover"
                                    src={image}
                                    alt={`Property ${property.id} - Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Slider kontrolleri */}
                    {property.images.length > 1 && (
                        <>
                            <button
                                onClick={() => prevSlide(property.id)}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                            >
                                <ChevronLeft size={16}/>
                            </button>
                            <button
                                onClick={() => nextSlide(property.id)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                            >
                                <ChevronRight size={16}/>
                            </button>

                            {/* Pagination dots */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                {property.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlides(prev => ({...prev, [property.id]: index}))}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            currentSlide === index ? 'bg-white' : 'bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* İçerik */}
                <div className="py-3 px-4 space-y-1">
                    {/* Fiyat ve aksiyonlar */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">{property.price}</span>
                        <div className="flex items-center gap-2">
                            <button className="hover:text-blue-600 transition-colors">
                                <Share size={20}/>
                            </button>
                            <button className="hover:text-red-600 transition-colors">
                                <Heart size={20}/>
                            </button>
                        </div>
                    </div>

                    {/* Açıklama */}
                    <p className="text-sm text-gray-500">{property.description}</p>

                    {/* Alt bilgiler */}
                    <div className={`flex items-center ${property.badges.length > 0 ? 'justify-between' : 'gap-2'}`}>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="py-1 px-2 rounded-md text-xs border border-gray-600">
                                {property.status}
                            </div>
                            <div className="py-1 px-2 rounded-md text-xs border border-gray-600">
                                {property.rooms}
                            </div>
                            <div className="py-1 px-2 rounded-md text-xs border border-gray-600">
                                {property.area}
                            </div>
                        </div>

                        {/* Durum rozetleri */}
                        {property.badges.length > 0 && (
                            <div className="flex items-center gap-2">
                                {property.badges.map((badge, index) => (
                                    <div
                                        key={index}
                                        className={`py-1 px-2 rounded-md text-xs text-white ${
                                            badge === 'Fiyat Düştü' ? 'bg-green-500' :
                                                badge === 'Acil' ? 'bg-red-500' : 'bg-blue-500'
                                        }`}
                                    >
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const BannerAd = () => (
        <div className="bg-white rounded-lg shadow-lg border border-black relative">
            <img
                className="h-full w-full rounded-lg object-cover"
                src={adsLogo}
                alt="Banner Advertisement"
            />
        </div>
    );

    // Grid'e yerleştirilecek öğeleri hazırla
    const gridItems = [];
    let propertyIndex = 0;

    for (let i = 0; i < 20; i++) {
        if (bannerAds.includes(i)) {
            gridItems.push(<BannerAd key={`banner-${i}`}/>);
        } else if (propertyIndex < properties.length) {
            gridItems.push(<PropertyCard key={properties[propertyIndex].id} property={properties[propertyIndex]}/>);
            propertyIndex++;
        }
    }

    return (
        <section className="container mx-auto py-16 px-5 lg:px-0">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                {gridItems}
            </div>
        </section>
    );
};

export default RealEstateListings;