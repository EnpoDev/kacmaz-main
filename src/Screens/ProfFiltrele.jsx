import React, {useState, useEffect} from 'react';
import {Search, Star, Medal, Mail, MapPin, ArrowRight, ArrowLeft, X, Filter} from 'lucide-react';
import Header from "../components/public/header.jsx";

// Mock data for demonstration
const mockCompanies = [
    {
        id: 1,
        name: "Sanal Sahneleme Yapay Zeka",
        rating: 4.9,
        verified: true,
        badges: ["En Çok Satış", "Yüksek Kalite", "Hızlı Teslimat"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum veritatis! Quae, tenetur itaque optio quod iusto veniam dignissimos cupiditate assumenda incidunt et eaque quo voluptate ea dolorum libero accusantium.",
        location: "1095 Lorem ipsum dolor sit amet New Jersey 07960, Amerika Birleşik Devletleri",
        images: ["/public/ilan-gorsel.png", "/public/ilan-gorsel.png"]
    },
    // Add more mock companies...
];

const mockCategories = [
    {id: 1, name: "Yatak Odası Tasarımı", image: "/public/ilan-gorsel3.png"},
    {id: 2, name: "Mutfak Tasarımı", image: "/public/ilan-gorsel3.png"},
    {id: 3, name: "Banyo Tasarımı", image: "/public/ilan-gorsel3.png"},
    {id: 4, name: "Salon Tasarımı", image: "/public/ilan-gorsel3.png"},
    {id: 5, name: "Bahçe Tasarımı", image: "/public/ilan-gorsel3.png"},
];

const cities = ["İstanbul", "Ankara", "İzmir", "Sivas"];
const districts = ["Kadıköy", "Beşiktaş", "Şişli", "Beyoğlu"];

const HeroSection = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const handleSearch = () => {
        onSearch({searchTerm, selectedCity, selectedDistrict});
    };

    return (
        <section className="relative h-80 lg:h-72 bg-gradient-to-r from-blue-900 to-blue-700">

            <div className="absolute inset-0 bg-black/50"></div>


            <div
                className="flex flex-col items-center justify-center gap-4 h-full relative z-10 text-white text-center px-5 lg:px-0">

                <h1 className="md:text-3xl text-2xl font-semibold">Yerel Profesyonellerle Eşleşin</h1>
                <p className="text-lg">Birkaç soruyu yanıtlayın ve size yardımcı olabilecek profesyonellerle iletişime
                    geçmenizi sağlayalım.</p>
                <div className="flex flex-col md:flex-row items-stretch gap-4 text-sm md:text-base">
                    <input
                        type="text"
                        className="rounded-lg py-3 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 md:w-80 text-black"
                        placeholder="Aradığınız Hizmeti Yazın"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="py-3 px-3 bg-white text-black rounded-lg md:w-52 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="">İl Seçiniz</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    <select
                        className="py-3 px-3 bg-white text-black rounded-lg md:w-52 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                        <option value="">İlçe Seçiniz</option>
                        {districts.map(district => (
                            <option key={district} value={district}>{district}</option>
                        ))}
                    </select>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 py-3 px-3 text-white rounded-lg font-semibold transition-colors"
                        onClick={handleSearch}
                    >
                        Şimdi Ara
                    </button>
                </div>
            </div>
        </section>
    );
};

const CategorySlider = ({categories}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleCount(1.5);
            else if (window.innerWidth < 768) setVisibleCount(2);
            else if (window.innerWidth < 1024) setVisibleCount(4);
            else setVisibleCount(5);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= categories.length - Math.floor(visibleCount) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, categories.length - Math.floor(visibleCount)) : prev - 1
        );
    };

    return (
        <div className="container mx-auto py-6 px-5 lg:px-0 hidden md:block">

            <p className="text-2xl font-semibold text-gray-900 mb-4">Aşağıdakilerden hangisi projenize en uygun?</p>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 gap-4 py-4"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                            width: `${(categories.length / visibleCount) * 100}%`
                        }}
                    >
                        {categories.map((category) => (
                            <div key={category.id} className="flex-shrink-0"
                                 style={{width: `${100 / categories.length}%`}}>
                                <div
                                    className="hover:-translate-y-1 flex items-stretch transition-all duration-500 cursor-pointer">
                                    <img className="h-20 w-28 rounded-l-lg object-cover" src={category.image}
                                         alt={category.name}/>
                                    <div
                                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-40 h-20 flex items-center justify-center">
                                        <span className="text-sm px-2">{category.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                >
                    <ArrowLeft size={20}/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                >
                    <ArrowRight size={20}/>
                </button>
            </div>
        </div>
    );
};

const FilterSidebar = ({isVisible, onClose, filters, onFilterChange}) => {
    const filterOptions = {
        categories: ["Genel Müteahhitler", "İç Mimar", "Bahçıvan", "Elektrikçi"],
        features: ["En Çok Satış", "Yüksek Kalite", "Hızlı Teslimat"],
        certifications: ["ISO 9001", "LEED Sertifikası", "Güvenlik Sertifikası"],
        verification: ["Doğrulanmış Kullanıcı", "Kimlik Doğrulanmış"],
        ratings: ["5 Yıldız", "4+ Yıldız", "3+ Yıldız"]
    };

    const handleFilterChange = (filterType, value) => {
        onFilterChange(filterType, value);
    };

    const sidebarContent = (
        <div className="space-y-3">
            {/* Address Filters */}
            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                <h3 className="font-medium">Adres</h3>
                <h4 className="ml-2">İl</h4>
                <select
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters.city || ''}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                >
                    <option value="">İl Seçin</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
                <h4 className="ml-2">İlçe</h4>
                <select
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    multiple
                    value={filters.districts || []}
                    onChange={(e) => {
                        const values = Array.from(e.target.selectedOptions, option => option.value);
                        handleFilterChange('districts', values);
                    }}
                >
                    {districts.map(district => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                </select>
            </div>

            {/* Category Filter */}
            <select
                className="py-2 px-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.category || ''}
                onChange={(e) => handleFilterChange('category', e.target.value)}
            >
                <option value="">Kategori</option>
                {filterOptions.categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            {/* Other Filters */}
            {Object.entries(filterOptions).slice(1).map(([key, options]) => (
                <select
                    key={key}
                    className="py-2 px-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters[key] || ''}
                    onChange={(e) => handleFilterChange(key, e.target.value)}
                >
                    <option value="">{key === 'features' ? 'İşinde Öne Çıkanlar' :
                        key === 'certifications' ? 'Sertifika ve Ödüller' :
                            key === 'verification' ? 'Doğrulama' : 'Derecelendirme'}</option>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            ))}

            <button className="bg-orange-500 hover:bg-orange-600 py-2 w-full text-white rounded-lg transition-colors">
                Ara
            </button>
        </div>
    );

    if (!isVisible) {
        return (
            <div className="md:w-1/4 w-full bg-white rounded-lg border p-2 hidden md:block">
                {sidebarContent}
            </div>
        );
    }

    return (
        <>
            {/* Mobile Filter Popup */}
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50 md:hidden">
                <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                    >
                        <X size={24}/>
                    </button>
                    {sidebarContent}
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="md:w-1/4 w-full bg-white rounded-lg border p-2 hidden md:block">

                {sidebarContent}
            </div>
        </>
    );
};

const CompanyCard = ({company}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === company.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? company.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-5 md:py-4 py-2 border-b">
            {/* Image Slider */}
            <div className="md:w-1/3 w-full relative">
                <img
                    className="h-52 w-full rounded-lg object-cover"
                    src={company.images[currentImageIndex]}
                    alt={company.name}
                />
                {company.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                        >
                            <ArrowLeft size={16}/>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                        >
                            <ArrowRight size={16}/>
                        </button>
                    </>
                )}
            </div>

            {/* Company Info */}
            <div className="md:w-1/2 w-full space-y-2">
                <div className="flex items-center gap-2">
                    <img className="md:w-12 w-10 md:h-12 h-10 rounded-full object-cover" src="/api/placeholder/50/50"
                         alt="Profile"/>
                    <div>
                        <h2 className="text-lg font-medium">{company.name}</h2>
                        <div className="flex items-center gap-2">
                            <p className="md:text-base text-xs flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1"/>
                                {company.rating} Değerlendirme
                            </p>
                            {company.verified && (
                                <div className="text-white text-xs bg-blue-600 py-1 px-2 rounded-full">
                                    Doğrulanmış Kullanıcı
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center flex-wrap gap-3">
                    {company.badges.map((badge, index) => (
                        <div key={index} className="py-1 px-2 rounded-lg bg-gray-200 text-sm flex items-center gap-1">
                            <Medal className="w-4 h-4"/>
                            {badge}
                        </div>
                    ))}
                </div>

                <div className="text-gray-500">
                    <p>{company.description}</p>
                    <button className="flex items-center justify-end text-black mt-2 hover:underline">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4 ml-1"/>
                    </button>
                </div>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/5 w-full">
                <button
                    className="py-2 px-4 border rounded-lg border-blue-600 text-blue-600 font-medium w-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4"/>
                    Mesaj Gönderin
                </button>
                <div className="mt-4 flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0"/>
                    <p className="text-sm">{company.location}</p>
                </div>
            </div>
        </div>
    );
};

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    return (
        <nav className="flex items-center justify-center mt-6 space-x-2">
            <button
                className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center disabled:opacity-50"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ArrowLeft className="w-4 h-4 mr-1"/>
                Önceki
            </button>

            {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                const pageNum = index + 1;
                return (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`px-3 py-1 rounded ${
                            currentPage === pageNum
                                ? 'bg-gray-300 text-gray-900'
                                : 'text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {pageNum}
                    </button>
                );
            })}

            {totalPages > 5 && <span className="px-3 py-1 text-gray-600">...</span>}

            <button
                className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center disabled:opacity-50"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Sonraki
                <ArrowRight className="w-4 h-4 ml-1"/>
            </button>
        </nav>
    );
};

const CompanyFilterPage = () => {
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [filters, setFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState([
        {label: 'Genel Müteahhitler', type: 'category'},
        {label: 'Kategori Adı', type: 'category'}
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Scroll to top functionality
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const handleSearch = (searchData) => {
        console.log('Search triggered:', searchData);
        // Implement search logic here
    };

    const removeActiveFilter = (index) => {
        setActiveFilters(prev => prev.filter((_, i) => i !== index));
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="font-sans overflow-x-hidden bg-gray-50 min-h-screen">
            {/* Scroll to Top Button */}
            <Header></Header>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-orange-500 text-white shadow-lg transition-opacity z-50 hover:bg-orange-600"
                >
                    ↑
                </button>
            )}

            {/* Hero Section */}
            <HeroSection onSearch={handleSearch}/>

            {/* Mobile Filter Toggle */}
            <div className="bg-blue-600 py-2 px-5 md:hidden flex items-center justify-center gap-10">
                <button
                    onClick={() => setShowMobileFilter(true)}
                    className="text-white flex items-center gap-2"
                >
                    <Filter className="w-4 h-4"/>
                    Filtrele
                </button>
            </div>

            {/* Category Slider */}
            <CategorySlider categories={mockCategories}/>

            {/* Main Content */}
            <section className="container mx-auto pb-10 px-5 lg:px-0">
                <div className="flex items-start gap-8">
                    {/* Filter Sidebar */}
                    <FilterSidebar
                        isVisible={showMobileFilter}
                        onClose={() => setShowMobileFilter(false)}
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />

                    {/* Results Section */}
                    <div className="md:w-3/4 w-full pt-4 md:pt-0">
                        {/* Search and Active Filters */}
                        <div
                            className="flex flex-col md:flex-row md:items-center justify-between w-full gap-3 md:gap-0 mb-6">
                            <div className="flex items-center flex-wrap gap-2">
                                {activeFilters.map((filter, index) => (
                                    <div key={index}
                                         className="inline-flex gap-2 bg-blue-600 rounded-full text-white py-1 px-2 text-sm">
                                        {filter.label}
                                        <button onClick={() => removeActiveFilter(index)}>
                                            <X className="w-4 h-4"/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 border rounded-lg py-2 px-2 bg-white">
                                <Search className="w-5 h-5 text-gray-400"/>
                                <input
                                    className="bg-inherit focus:outline-none placeholder-gray-400 w-full md:w-auto"
                                    placeholder="İsim veya anahtar kelime ile ara"
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Company Cards */}
                        <div className="space-y-2 py-5 bg-white rounded-lg p-4">
                            {mockCompanies.map((company) => (
                                <CompanyCard key={company.id} company={company}/>
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={5}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyFilterPage;