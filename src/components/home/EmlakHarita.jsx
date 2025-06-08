import React, { useState } from 'react';
import { Search, Filter, Heart, Share, MapPin, X, Menu } from 'lucide-react';

const RealEstateSearch = () => {
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [filters, setFilters] = useState({
        saleType: 'Satılık',
        propertyType: 'Konut',
        minPrice: '',
        maxPrice: '',
        currency: 'TL',
        minArea: '',
        maxArea: '',
        rooms: '',
        buildingAge: '',
        floor: '',
        heating: '',
        bathrooms: '',
        furnished: false,
        elevator: false,
        parking: '',
        location: {
            country: 'Türkiye',
            city: 'İstanbul',
            district: '',
            neighborhood: ''
        }
    });

    const [properties] = useState([
        {
            id: 1,
            price: '1.300.000',
            currency: '₺',
            title: 'Modern Daire - Merkezi Konum',
            description: 'Şehir merkezinde, ulaşım kolaylığı olan modern daire...',
            rooms: '4+1',
            area: '200 m²',
            type: 'Satılık',
            tags: ['Fiyat Düştü', 'Apartman', 'Yeni', '3D Modelleme'],
            images: ['/public/ilan-gorsel.png', '/public/ilan-gorsel.png']
        },
        {
            id: 2,
            price: '950.000',
            currency: '₺',
            title: 'Bahçe Katı Daire',
            description: 'Geniş bahçeli, aile yaşamı için ideal daire...',
            rooms: '3+1',
            area: '150 m²',
            type: 'Satılık',
            tags: ['Bahçeli', 'Apartman', 'Krediye Uygun'],
            images: ['/public/ilan-gorsel.png', '/public/ilan-gorsel.png']
        },
        {
            id: 3,
            price: '2.500',
            currency: '₺',
            title: 'Kiralık Stüdyo Daire',
            description: 'Merkezi konumda, öğrenci ve genç profesyoneller için...',
            rooms: '1+0',
            area: '65 m²',
            type: 'Kiralık',
            tags: ['Merkezi', 'Stüdyo', 'Eşyalı'],
            images: ['/public/ilan-gorsel.png', '/public/ilan-gorsel.png']
        },
        {
            id: 4,
            price: '1.850.000',
            currency: '₺',
            title: 'Deniz Manzaralı Villa',
            description: 'Muhteşem deniz manzarası olan lüks villa...',
            rooms: '5+2',
            area: '350 m²',
            type: 'Satılık',
            tags: ['Villa', 'Deniz Manzarası', 'Lüks', 'Havuzlu'],
            images: ['/public/ilan-gorsel.png', '/public/ilan-gorsel.png']
        }
    ]);

    const updateFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const PropertyCard = ({ property }) => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        return (
            <div className="bg-white rounded-lg shadow-lg border relative overflow-hidden">
                {/* Tags */}
                <div className="absolute top-2 left-2 flex items-center gap-1 flex-wrap z-10">
                    {property.tags.map((tag, index) => (
                        <div key={index} className="text-white text-[9px] bg-blue-600 py-1 px-2 rounded-md">
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Image Carousel */}
                <div className="relative">
                    <img
                        className="w-full h-[200px] object-cover"
                        src={property.images[currentImageIndex]}
                        alt={property.title}
                    />
                    {property.images.length > 1 && (
                        <>
                            <button
                                onClick={() => setCurrentImageIndex(prev => prev === 0 ? property.images.length - 1 : prev - 1)}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => setCurrentImageIndex(prev => prev === property.images.length - 1 ? 0 : prev + 1)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            >
                                ›
                            </button>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                {property.images.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Property Details */}
                <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">
                            {property.price} {property.currency}
                        </span>
                        <div className="flex items-center gap-2">
                            <button className="text-gray-600 hover:text-orange-500">
                                <Share size={20} />
                            </button>
                            <button className="text-gray-600 hover:text-red-500">
                                <Heart size={20} />
                            </button>
                        </div>
                    </div>

                    <h3 className="font-medium text-gray-800">{property.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{property.description}</p>

                    <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="py-1 px-2 rounded-md text-xs border border-gray-400 bg-gray-50">
                            {property.type}
                        </span>
                        <span className="py-1 px-2 rounded-md text-xs border border-gray-400 bg-gray-50">
                            {property.rooms}
                        </span>
                        <span className="py-1 px-2 rounded-md text-xs border border-gray-400 bg-gray-50">
                            {property.area}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const FilterSection = ({ isMobile = false }) => (
        <div className={`space-y-4 ${isMobile ? 'p-4' : ''}`}>
            {/* Location Filters */}
            <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-medium text-gray-800">Adres</h3>
                <div className="grid grid-cols-1 gap-3">
                    <div>
                        <label className="text-sm text-gray-600">Şehir</label>
                        <select
                            value={filters.location.city}
                            onChange={(e) => updateFilter('location', {...filters.location, city: e.target.value})}
                            className="w-full py-2 px-3 border rounded-lg bg-white"
                        >
                            <option value="İstanbul">İstanbul</option>
                            <option value="Ankara">Ankara</option>
                            <option value="İzmir">İzmir</option>
                            <option value="Antalya">Antalya</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">İlçe</label>
                        <select
                            value={filters.location.district}
                            onChange={(e) => updateFilter('location', {...filters.location, district: e.target.value})}
                            className="w-full py-2 px-3 border rounded-lg bg-white"
                        >
                            <option value="">İlçe Seçin</option>
                            <option value="Kadıköy">Kadıköy</option>
                            <option value="Beşiktaş">Beşiktaş</option>
                            <option value="Şişli">Şişli</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Price Range */}
            <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-medium text-gray-800">Fiyat Aralığı</h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) => updateFilter('minPrice', e.target.value)}
                        className="flex-1 py-2 px-3 border rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={(e) => updateFilter('maxPrice', e.target.value)}
                        className="flex-1 py-2 px-3 border rounded-lg"
                    />
                </div>
                <div className="flex items-center justify-between p-1 rounded-lg border">
                    {['TL', 'USD', 'EUR', 'GBP'].map(curr => (
                        <button
                            key={curr}
                            onClick={() => updateFilter('currency', curr)}
                            className={`py-1 px-3 rounded-lg font-medium ${filters.currency === curr ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        >
                            {curr}
                        </button>
                    ))}
                </div>
            </div>

            {/* Area */}
            <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-medium text-gray-800">Metrekare</h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Min m²"
                        value={filters.minArea}
                        onChange={(e) => updateFilter('minArea', e.target.value)}
                        className="flex-1 py-2 px-3 border rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Max m²"
                        value={filters.maxArea}
                        onChange={(e) => updateFilter('maxArea', e.target.value)}
                        className="flex-1 py-2 px-3 border rounded-lg"
                    />
                </div>
            </div>

            {/* Room Count */}
            <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-medium text-gray-800">Oda Sayısı</h3>
                <select
                    value={filters.rooms}
                    onChange={(e) => updateFilter('rooms', e.target.value)}
                    className="w-full py-2 px-3 border rounded-lg bg-white"
                >
                    <option value="">Seçiniz</option>
                    <option value="1+0">Stüdyo (1+0)</option>
                    <option value="1+1">1+1</option>
                    <option value="2+1">2+1</option>
                    <option value="3+1">3+1</option>
                    <option value="4+1">4+1</option>
                    <option value="5+1">5+1</option>
                </select>
            </div>

            {/* Building Age */}
            <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-medium text-gray-800">Bina Yaşı</h3>
                <select
                    value={filters.buildingAge}
                    onChange={(e) => updateFilter('buildingAge', e.target.value)}
                    className="w-full py-2 px-3 border rounded-lg bg-white"
                >
                    <option value="">Seçiniz</option>
                    <option value="0">0 (Sıfır)</option>
                    <option value="1-5">1-5 Arası</option>
                    <option value="6-10">6-10 Arası</option>
                    <option value="11-15">11-15 Arası</option>
                    <option value="16+">16 ve üzeri</option>
                </select>
            </div>

            {/* Features */}
            <div className="rounded-lg border p-3 space-y-3">
                <h3 className="font-medium text-gray-800">Özellikler</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={filters.furnished}
                            onChange={(e) => updateFilter('furnished', e.target.checked)}
                            className="rounded"
                        />
                        <span className="text-sm">Eşyalı</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={filters.elevator}
                            onChange={(e) => updateFilter('elevator', e.target.checked)}
                            className="rounded"
                        />
                        <span className="text-sm">Asansör</span>
                    </label>
                </div>
            </div>

            {/* Apply Button */}
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Filtrele
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-32 py-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Emlak Arama</h1>

                    {/* Mobile Filter Button */}
                    <button
                        onClick={() => setShowMobileFilters(true)}
                        className="md:hidden w-full bg-orange-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 mb-4"
                    >
                        <Filter size={20} />
                        Filtreler
                    </button>

                    {/* Desktop Quick Filters */}
                    <div className="hidden md:flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
                        <select
                            value={filters.saleType}
                            onChange={(e) => updateFilter('saleType', e.target.value)}
                            className="py-2 px-3 border rounded-lg"
                        >
                            <option value="Satılık">Satılık</option>
                            <option value="Kiralık">Kiralık</option>
                        </select>

                        <select
                            value={filters.propertyType}
                            onChange={(e) => updateFilter('propertyType', e.target.value)}
                            className="py-2 px-3 border rounded-lg"
                        >
                            <option value="Konut">Konut</option>
                            <option value="İş Yeri">İş Yeri</option>
                            <option value="Arsa">Arsa</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Min Fiyat"
                            value={filters.minPrice}
                            onChange={(e) => updateFilter('minPrice', e.target.value)}
                            className="py-2 px-3 border rounded-lg w-32"
                        />

                        <input
                            type="text"
                            placeholder="Max Fiyat"
                            value={filters.maxPrice}
                            onChange={(e) => updateFilter('maxPrice', e.target.value)}
                            className="py-2 px-3 border rounded-lg w-32"
                        />

                        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                            <Search size={20} />
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex gap-6">
                    {/* Desktop Filters Sidebar */}
                    <div className="hidden md:block w-80 bg-white rounded-lg shadow-md h-fit">
                        <div className="p-4 border-b">
                            <h2 className="font-semibold text-gray-800">Filtreler</h2>
                        </div>
                        <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden">
                            <FilterSection />
                        </div>
                    </div>

                    {/* Map and Properties */}
                    <div className="flex-1">
                        {/* Map Section */}
                        <div className="mb-6">
                            <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <MapPin size={48} className="mx-auto mb-2" />
                                    <p className="text-lg font-medium">Harita Görünümü</p>
                                    <p className="text-sm">İlanların konumları burada gösterilecek</p>
                                </div>
                            </div>
                        </div>

                        {/* Results Info */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-600">
                                <span className="font-semibold">1.500</span> sonuç gösteriliyor
                            </p>
                            <select className="py-2 px-3 border rounded-lg bg-white">
                                <option value="">Gelişmiş Sıralama</option>
                                <option value="price-high">Fiyata göre (Önce en yüksek)</option>
                                <option value="price-low">Fiyata göre (Önce en düşük)</option>
                                <option value="date-new">Tarihe göre (Önce en yeni)</option>
                                <option value="area-big">m²'ye göre (Önce en büyük)</option>
                            </select>
                        </div>

                        {/* Properties Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {properties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-2">
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">‹</button>
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">1</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">›</button>
                        </div>
                    </div>
                </div>

                {/* Mobile Filters Modal */}
                {showMobileFilters && (
                    <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
                        <div className="absolute right-0 top-0 h-full w-80 bg-white">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="font-semibold text-gray-800">Filtreler</h2>
                                <button
                                    onClick={() => setShowMobileFilters(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="h-full overflow-y-auto pb-20">
                                <FilterSection isMobile={true} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RealEstateSearch;