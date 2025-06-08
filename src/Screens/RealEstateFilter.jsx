import React, { useState, useEffect } from 'react';
import { Heart, Share2, MapPin, ArrowUp, X } from 'lucide-react';
import Header from "../components/public/header.jsx";

const RealEstateFilter = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [showPopup, setShowPopup] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentSlides, setCurrentSlides] = useState({});
    const [filters, setFilters] = useState([
        { id: 1, text: 'Adres: Aksaray, Güzelyurt, Ihlara' },
        { id: 2, text: 'Oda Sayısı: 2' },
        { id: 3, text: 'Kat Sayısı: 5' },
        { id: 4, text: 'Bina Yaşı: 5' },
        { id: 5, text: 'Isıtma: Merkezi' },
        { id: 6, text: 'Zemin Etüdü: Var' },
        { id: 7, text: 'Asansör: Var' },
        { id: 8, text: 'Kiracılı: Evet' }
    ]);

    // Scroll to top functionality
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const tabs = [
        { id: 'tab1', label: 'Satılık' },
        { id: 'tab2', label: 'Kiralık' },
        { id: 'tab3', label: 'Ev Arkadaşı' },
        { id: 'tab4', label: 'Projeler' },
        { id: 'tab5', label: 'Ortak' },
        { id: 'tab6', label: 'Sanal Sahneleme' },
        { id: 'tab7', label: 'Evimin Değeri' }
    ];

    const roomOptions = [
        { value: '1+0', label: 'Stüdyo (1+0)' },
        { value: '1+1', label: '1+1' },
        { value: '1.5+1', label: '1.5+1' },
        { value: '2+0', label: '2+0' },
        { value: '2+1', label: '2+1' },
        { value: '2.5+1', label: '2.5+1' },
        { value: '2+2', label: '2+2' },
        { value: '3+0', label: '3+0' },
        { value: '3+1', label: '3+1' },
        { value: '3.5+1', label: '3.5+1' },
        { value: '3+2', label: '3+2' },
        { value: '3+3', label: '3+3' },
        { value: '4+0', label: '4+0' },
        { value: '4+1', label: '4+1' },
        { value: '4.5+1', label: '4.5+1' },
        { value: '4.5+2', label: '4.5+2' },
        { value: '4+2', label: '4+2' },
        { value: '4+3', label: '4+3' },
        { value: '4+4', label: '4+4' },
        { value: '5+1', label: '5+1' },
        { value: '5.5+1', label: '5.5+1' },
        { value: '5+2', label: '5+2' },
        { value: '5+3', label: '5+3' },
        { value: '5+4', label: '5+4' },
        { value: '6+1', label: '6+1' },
        { value: '6.5+1', label: '6.5+1' },
        { value: '6+2', label: '6+2' },
        { value: '6+3', label: '6+3' },
        { value: '6+4', label: '6+4' },
        { value: '7+1', label: '7+1' },
        { value: '7+2', label: '7+2' },
        { value: '7+3', label: '7+3' },
        { value: '7+4', label: '7+4' },
        { value: '8+1', label: '8+1' },
        { value: '8+2', label: '8+2' },
        { value: '8+3', label: '8+3' },
        { value: '8+4', label: '8+4' },
        { value: '9+1', label: '9+1' },
        { value: '9+2', label: '9+2' },
        { value: '9+3', label: '9+3' },
        { value: '9+4', label: '9+4' },
        { value: '10+1', label: '10+1' },
        { value: '10+2', label: '10+2' },
        { value: '10plus', label: '10 Üzeri' }
    ];

    const ageOptions = [
        '0', '1', '2', '3', '4', '5-10 Arası', '11-15 Arası', '16-20 Arası',
        '21-25 Arası', '26-30 Arası', '31 ve üzeri'
    ];

    const properties = Array(18).fill(null).map((_, index) => ({
        id: index + 1,
        price: '1.300.000 ₺',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium...',
        type: 'Satılık',
        rooms: '4+1',
        area: '200 m²',
        tags: ['Fiyat Düştü', 'Apartman', 'Yeni', '3D Modelleme'],
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=270&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=270&fit=crop'
        ],
        isAd: (index + 1) % 5 === 0
    }));

    const removeFilter = (id) => {
        setFilters(filters.filter(filter => filter.id !== id));
    };

    const clearAllFilters = () => {
        setFilters([]);
    };

    const nextSlide = (propertyId) => {
        setCurrentSlides(prev => ({
            ...prev,
            [propertyId]: (prev[propertyId] || 0) + 1
        }));
    };

    const prevSlide = (propertyId) => {
        setCurrentSlides(prev => ({
            ...prev,
            [propertyId]: Math.max((prev[propertyId] || 0) - 1, 0)
        }));
    };

    const FormSection = () => (
        <div className="form-section bg-white py-2 px-3 rounded-lg rounded-tl-none flex flex-wrap items-end gap-2 text-black">
            <div className="property-type lg:col-span-1 col-span-12 space-y-1">
                <h5 className="text-sm font-medium text-left">Gayrimenkul Tipi</h5>
                <select className="py-2.5 px-3 border rounded-lg w-full bg-inherit text-sm">
                    <option value="konut" defaultValue>Konut</option>
                    <option value="arsa">Arsa</option>
                    <option value="is-yeri">İşyeri</option>
                </select>
            </div>
            <div className="space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">İl</h5>
                <select className="w-24 py-2.5 px-3 border rounded-lg bg-inherit text-sm">
                    <option value="istanbul">İstanbul</option>
                    <option value="sivas">Sivas</option>
                    <option value="izmir">İzmir</option>
                    <option value="ankara">Ankara</option>
                </select>
            </div>
            <div className="space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">İlçe</h5>
                <select className="py-2.5 px-3 border rounded-lg bg-inherit text-sm">
                    <option value="istanbul">İstanbul</option>
                    <option value="sivas">Sivas</option>
                    <option value="izmir">İzmir</option>
                    <option value="ankara">Ankara</option>
                </select>
            </div>
            <div className="space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">Mahalle</h5>
                <select className="py-2.5 px-3 border rounded-lg bg-inherit text-sm">
                    <option value="istanbul">İstanbul</option>
                    <option value="sivas">Sivas</option>
                    <option value="izmir">İzmir</option>
                    <option value="ankara">Ankara</option>
                </select>
            </div>
            <div className="age space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">Bina Yaşı</h5>
                <select className="py-2.5 px-3 border rounded-lg bg-inherit text-sm">
                    {ageOptions.map(age => (
                        <option key={age} value={age}>{age}</option>
                    ))}
                </select>
            </div>
            <div className="area space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">Kaç M2</h5>
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="py-2 px-3 border rounded-lg bg-inherit placeholder-gray-600 focus:outline-none w-20"
                        placeholder="min m2"
                    />
                    <input
                        type="text"
                        className="py-2 px-3 border rounded-lg bg-inherit placeholder-gray-600 focus:outline-none w-20"
                        placeholder="max m2"
                    />
                </div>
            </div>
            <div className="room-size space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">Oda Sayısı</h5>
                <select className="py-2.5 px-3 border rounded-lg bg-inherit text-sm">
                    {roomOptions.map(room => (
                        <option key={room.value} value={room.value}>{room.label}</option>
                    ))}
                </select>
            </div>
            <div className="space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">Fiyat</h5>
                <div className="flex gap-2">
                    <input type="text" className="py-2.5 px-3 border rounded-lg bg-inherit focus:outline-none w-20 text-sm" placeholder="min TL" />
                    <input type="text" className="py-2.5 px-3 border rounded-lg bg-inherit focus:outline-none w-20 text-sm" placeholder="max TL" />
                </div>
            </div>
            <div className="space-y-1">
                <h5 className="text-sm font-medium text-left pl-2">Para</h5>
                <select className="py-2.5 px-3 border rounded-lg w-14 bg-inherit text-sm">
                    <option value="" defaultValue>TL</option>
                    <option value="">USD</option>
                    <option value="">EURO</option>
                    <option value="">GBP</option>
                </select>
            </div>
            <div>
                <button className="bg-orange-500 py-2 px-3 rounded-lg text-white hover:bg-orange-600 transition-colors">Ara</button>
            </div>
            <div>
                <button className="bg-blue-600 py-2 px-3 rounded-lg text-white hover:bg-blue-700 transition-colors">Haritada Ara</button>
            </div>
        </div>
    );

    const PropertyCard = ({ property }) => {
        const currentSlide = currentSlides[property.id] || 0;

        if (property.isAd) {
            return (
                <div className="bg-white rounded-lg shadow-lg border border-black relative">
                    <img
                        className="h-full rounded-lg w-full object-cover"
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop"
                        alt="Reklam"
                    />
                </div>
            );
        }

        return (
            <div className="bg-white rounded-lg shadow-lg border border-black relative group">
                <div className="absolute top-1 left-1 flex items-center gap-1 flex-wrap p-2 z-10">
                    {property.tags.map((tag, index) => (
                        <div key={index} className={`text-white text-xs py-1 px-2 rounded-md ${
                            index === 0 ? 'bg-gray-600' :
                                index === 1 ? 'bg-gray-700' :
                                    index === 2 ? 'bg-blue-400' : 'bg-blue-600'
                        }`}>
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="relative overflow-hidden rounded-t-lg">
                    <img
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        src={property.images[currentSlide % property.images.length]}
                        alt="Property"
                    />

                    {property.images.length > 1 && (
                        <>
                            <button
                                onClick={() => prevSlide(property.id)}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => nextSlide(property.id)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                ›
                            </button>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                {property.images.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${
                                            index === currentSlide % property.images.length ? 'bg-white' : 'bg-white bg-opacity-50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="py-3 px-4 space-y-1">
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">{property.price}</span>
                        <div className="inline-flex items-center gap-2">
                            <button className="hover:text-blue-600 transition-colors">
                                <Share2 size={20} />
                            </button>
                            <button className="hover:text-red-500 transition-colors">
                                <Heart size={20} />
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">{property.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="py-1 px-2 rounded-md text-xs border border-gray-600">{property.type}</div>
                        <div className="py-1 px-2 rounded-md text-xs border border-gray-600">{property.rooms}</div>
                        <div className="py-1 px-2 rounded-md text-xs border border-gray-600">{property.area}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="font-sans min-h-screen bg-gray-50">
            <Header></Header>
            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-orange-500 text-white shadow-lg transition z-50 hover:bg-orange-600"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            {/* Hero Section */}
            <section
                className="bg-cover bg-no-repeat lg:h-96 h-[550px] relative"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop)'
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="flex flex-col items-center justify-center gap-6 h-full relative z-10 text-white px-5 lg:px-0">
                    <h1 className="lg:text-4xl text-xl font-semibold text-center">
                        Emlakta gerçek güven,
                        <br />
                        sadece doğrudan iletişimle olur.
                    </h1>

                    <div className="tabs w-full max-w-4xl">
                        <div className="flex gap-1 flex-wrap justify-center">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    className={`md:px-4 px-2 py-1 md:text-base text-xs md:py-2 rounded-t-lg transition-colors ${
                                        activeTab === tab.id
                                            ? 'bg-white text-black'
                                            : 'bg-blue-600 text-white hover:bg-blue-500'
                                    } ${index >= 6 ? 'hidden lg:block' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="tab-contents">
                            {tabs.map(tab => (
                                <div
                                    key={tab.id}
                                    className={activeTab === tab.id ? 'block' : 'hidden'}
                                >
                                    <FormSection />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Filter Button */}
            <div className="bg-blue-600 py-2 px-5 md:hidden flex items-center justify-center gap-10">
                <button
                    onClick={() => setShowPopup(true)}
                    className="text-white"
                >
                    Filtrele
                </button>
            </div>

            {/* Mobile Filter Popup */}
            {showPopup && (
                <div className="popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto p-6 relative">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                        >
                            <X size={24} />
                        </button>
                        <div className="space-y-3">
                            <div className="text-center text-lg font-semibold mb-4">Filtreler</div>
                            {/* Mobile filter content would go here */}
                            <div className="sticky bottom-0 bg-white pt-4">
                                <button className="bg-orange-500 py-2 w-full text-white rounded-lg hover:bg-orange-600 transition-colors">
                                    Ara
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <section className="container mx-auto py-10 px-5 lg:px-0">
                <div className="flex flex-col md:flex-row items-start gap-5">
                    {/* Sidebar - Hidden on mobile */}
                    <div className="md:w-1/4 bg-white rounded-lg border p-2 space-y-3 hidden md:block">
                        {/* Sidebar content */}
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <a href="#" className="hover:text-blue-600">Emlak</a>
                            <a href="#" className="ml-3 hover:text-blue-600">Konut</a>
                            <a href="#" className="ml-6 hover:text-blue-600">Kiralık (500)</a>
                            <div className="ml-9 h-24 overflow-y-auto flex flex-col space-y-1">
                                <a href="#" className="hover:text-blue-600">Turistik Günlük Kiralık (300)</a>
                                <a href="#" className="hover:text-blue-600">Daire</a>
                                <a href="#" className="hover:text-blue-600">Rezidans</a>
                                <a href="#" className="hover:text-blue-600">Müstakil Ev</a>
                                <a href="#" className="hover:text-blue-600">Villa</a>
                                <a href="#" className="hover:text-blue-600">Çiftlik Evi</a>
                                <a href="#" className="hover:text-blue-600">Yalı</a>
                                <a href="#" className="hover:text-blue-600">Yalı Dairesi</a>
                            </div>
                        </div>

                        <div
                            className="bg-cover bg-no-repeat py-3 text-center rounded-lg"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=100&fit=crop)'
                            }}
                        >
                            <a href="#" className="text-center text-white hover:text-blue-200 transition-colors">
                                <MapPin className="inline mr-2" size={20} />
                                Harita Görünümü
                            </a>
                        </div>

                        {/* Additional filters would go here */}
                        <div className="sticky bottom-5 z-10">
                            <button className="bg-orange-500 py-2 w-full text-white rounded-lg hover:bg-orange-600 transition-colors">
                                Ara
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4 w-full">
                        {/* Sorting and Results Count */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0 mb-5">
                            <div></div>
                            <div className="inline-flex flex-col-reverse md:flex-row md:items-center gap-2">
                                <p className="whitespace-nowrap text-sm text-gray-600">
                                    <span className="font-semibold">1.500</span> sonuç gösteriliyor.
                                </p>
                                <select className="py-2 px-3 border rounded-lg w-full bg-inherit text-sm">
                                    <option value="" defaultValue>Gelişmiş Sıralama</option>
                                    <option value="">Fiyata göre (Önce en yüksek)</option>
                                    <option value="">Fiyata göre (Önce en düşük)</option>
                                    <option value="">Oda Sayısı (Önce en yüksek)</option>
                                    <option value="">Oda Sayısı (Önce en düşük)</option>
                                    <option value="">Tarihe göre (Önce en yeni ilan)</option>
                                    <option value="">Tarihe göre (Önce en eski ilan)</option>
                                    <option value="">m² Fiyatı (Önce en yüksek)</option>
                                    <option value="">m² Fiyatı (Önce en düşük)</option>
                                </select>
                            </div>
                        </div>

                        {/* Active Filters */}
                        {filters.length > 0 && (
                            <div className="border rounded-lg p-2 mb-5">
                                <div className="flex flex-wrap gap-2">
                                    {filters.map(filter => (
                                        <div key={filter.id} className="filter-item flex items-center bg-blue-600 text-white text-sm px-3 py-1 rounded-lg">
                                            <span>{filter.text}</span>
                                            <button
                                                onClick={() => removeFilter(filter.id)}
                                                className="ml-2 text-white hover:text-red-200 transition-colors"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-xs ml-4 text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Tümünü Temizle
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Property Grid */}
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
                            {properties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealEstateFilter;