import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "../components/public/header.jsx";
import Footer from "../components/public/footer.jsx";

const ProfesyonellerPage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [authStep, setAuthStep] = useState('step1');

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

    // Service categories data
    const serviceCategories = [
        'Popüler Hizmetler',
        'Ev Tasarımı ve Yenileme',
        'Mimarlık & Mühendislik',
        'Bayi ve Satıcılar',
        'Bahçe ve Peyzaj',
        'Boya ve Badana',
        'Çatı ve Oluk',
        'Çilingir',
        'Duvar, Tavan ve Alçı',
        'Elektrik & Elektronik ve Aydınlatma',
        'Alarm & Güvenlik',
        'Isıtma, Soğutma ve Havalandırma',
        'İnşaat & Harfiyat',
        'Kapı, Pencere, Cam & Cam Balkon',
        'Mobilya ve Marangoz',
        'Mutfak ve Banyo Tadilat',
        'Su Tesisatı',
        'Yalıtım ve Mantolama',
        'Yer Döşeme ve Kaplama',
        'Demir & Ferforje',
        'Mobilya ve Döşeme',
        'Temizlik & İlaçlama'
    ];

    const ServiceSlider = ({ title, index }) => {
        // CSS selector için güvenli ID oluştur
        const safeId = `slider-${index}`;

        return (
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    navigation={{
                        nextEl: `.swiper-button-next-${safeId}`,
                        prevEl: `.swiper-button-prev-${safeId}`
                    }}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        }
                    }}
                    className="relative"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                                <img
                                    className="h-[170px] w-full rounded-t-lg object-cover"
                                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&h=170&fit=crop"
                                    alt="Hizmet"
                                />
                                <div className="bg-white shadow-lg p-4 rounded-b-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200">
                                    <a href="#" className="text-gray-800">Ev Tadilat</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Buttons */}
                    <div className={`swiper-button-prev-${safeId} absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors`}>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className={`swiper-button-next-${safeId} absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors`}>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </Swiper>
            </div>
        );
    };

    const AuthModal = () => (
        <div className={`fixed inset-0 z-[999999] ${authModalOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" onClick={() => setAuthModalOpen(false)}></div>
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => setAuthStep('step1')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ←
                        </button>
                        <h2 className="text-xl font-semibold">
                            {authStep === 'login' ? 'Giriş Yap' : authStep === 'forgotPassword' ? 'Şifremi Unuttum' : 'Hesap Oluştur'}
                        </h2>
                        <button
                            onClick={() => setAuthModalOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    {authStep === 'step1' && (
                        <div className="space-y-4">
                            <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                                <div className="flex items-center">
                                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                                    Google ile devam edin
                                </div>
                            </button>
                            <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                                <div className="flex items-center">
                                    <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2" />
                                    Apple ile kayıt ol
                                </div>
                            </button>
                            <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                                <div className="flex items-center">
                                    <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5 mr-2" />
                                    Microsoft ile kayıt ol
                                </div>
                            </button>
                            <div className="text-center text-gray-500">VEYA</div>
                            <input
                                id="email-step1"
                                type="email"
                                placeholder="E-Posta Adresi"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <button
                                onClick={() => setAuthStep('step2')}
                                className="w-full bg-orange-500 text-white py-2 rounded-lg"
                            >
                                Devam Et
                            </button>
                            <p className="text-center text-sm text-gray-500">
                                Devam ederek, Hizmet Şartlarımızı kabul etmiş ve Gizlilik Politikamızı onaylamış olursunuz.
                            </p>
                        </div>
                    )}

                    {authStep === 'step2' && (
                        <div className="space-y-4">
                            <input
                                id="email-step2"
                                type="email"
                                placeholder="E-Posta Adresi"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                id="password-step2"
                                type="password"
                                placeholder="Şifre (minimum 6 karakter)"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
                                Kayıt Ol
                            </button>
                            <p className="text-center text-sm text-gray-500">
                                Zaten Hesabınız Var mı?
                                <button
                                    onClick={() => setAuthStep('login')}
                                    className="text-orange-500 ml-1"
                                >
                                    Giriş Yap
                                </button>
                            </p>
                        </div>
                    )}

                    {authStep === 'login' && (
                        <div className="space-y-4">
                            <div className="text-center text-gray-500">VEYA</div>
                            <input
                                id="email-login"
                                type="email"
                                placeholder="E-Posta Adresi"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                id="password-login"
                                type="password"
                                placeholder="Şifre"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
                                Giriş Yap
                            </button>
                            <p className="text-center text-sm text-gray-500">
                                Şifreni mi unuttun?
                                <button
                                    onClick={() => setAuthStep('forgotPassword')}
                                    className="text-orange-500 ml-1"
                                >
                                    Şifremi Unuttum
                                </button>
                            </p>
                        </div>
                    )}

                    {authStep === 'forgotPassword' && (
                        <div className="space-y-4">
                            <input
                                id="email-forgot"
                                type="email"
                                placeholder="E-Posta Adresi"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
                                Şifre Sıfırlama Bağlantısı Gönder
                            </button>
                            <p className="text-center text-sm text-gray-500">
                                Giriş ekranına dönmek için
                                <button
                                    onClick={() => setAuthStep('login')}
                                    className="text-orange-500 ml-1"
                                >
                                    Giriş Yap
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    const MobileMenu = () => (
        <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-[999999] ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between border-b p-5">
                <img className="w-[100px] h-[20px]" src="https://via.placeholder.com/100x20/486078/ffffff?text=LOGO" alt="Logo" />
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 text-3xl"
                >
                    &times;
                </button>
            </div>
            <ul className="space-y-4 p-5">
                <li><a href="#" className="block text-base text-gray-700 hover:text-blue-500">Satılık</a></li>
                <li><a href="#" className="block text-base text-gray-700 hover:text-blue-500">Kiralık</a></li>
                <li><a href="#" className="block text-base text-gray-700 hover:text-blue-500">Projeler</a></li>
                <li><a href="#" className="block text-base text-gray-700 hover:text-blue-500">Ortak</a></li>
            </ul>
        </div>
    );

    return (
        <div className="font-sans overflow-x-hidden">
            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-orange-500 text-white shadow-lg transition z-[999999]"
                >
                    ↑
                </button>
            )}

            <Header />

            {/* Hero Section */}
            <section className="bg-cover bg-no-repeat lg:h-[300px] h-[400px] relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=400&fit=crop)'}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0">
                    <h1 className="md:text-3xl text-2xl font-semibold text-center">Projeniz için doğru profesyoneli bulun</h1>
                    <div className="flex flex-col md:flex-row items-stretch gap-4 md:text-base text-sm">
                        <input
                            type="text"
                            className="rounded-lg py-3 px-3 bg-white focus:outline-none md:w-80 text-black"
                            placeholder="Aradığınız Hizmeti Yazın"
                        />
                        <select className="py-3 px-3 bg-white text-black rounded-lg md:w-52 w-full">
                            <option value="">İl Seçiniz</option>
                        </select>
                        <select className="py-3 px-3 bg-white text-black rounded-lg md:w-52 w-full">
                            <option value="">İlçe Seçiniz</option>
                        </select>
                        <button className="bg-orange-500 py-3 px-3 text-white rounded-lg font-semibold">Şimdi Ara</button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="container mx-auto py-10 px-5 md:px-0">
                <div className="space-y-8">
                    {serviceCategories.map((category, index) => (
                        <ServiceSlider key={index} title={category} index={index} />
                    ))}
                </div>
            </section>

            {/* Nearby Services */}
            <section className="container mx-auto px-5 lg:px-0">
                <h2 className="text-2xl font-semibold">Yakınındaki Hizmetler</h2>
                <div className="space-y-2 py-5">
                    <div className="flex flex-col md:flex-row items-start gap-5 pb-4 border-b">
                        <div className="md:w-1/4">
                            <img className="h-[210px] w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=210&fit=crop" alt="Service" />
                        </div>
                        <div className="md:w-1/2 space-y-2">
                            <div className="flex items-center gap-2">
                                <img className="w-[60px] h-[60px] rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="Profile" />
                                <div>
                                    <h2 className="text-lg font-medium">Sanal Sahneleme Yapay Zeka</h2>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">
                                            ⭐ 4.9 Değerlendirme
                                        </p>
                                        <div className="text-white text-xs bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış Kullanıcı</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap gap-3">
                                <div className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                                    🏆 En Çok Satış
                                </div>
                                <div className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                                    🏆 En Çok Satış
                                </div>
                                <div className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                                    🏆 En Çok Satış
                                </div>
                            </div>
                            <div className="text-gray-500">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum veritatis! Quae, tenetur itaque optio quod iusto veniam dignissimos cupiditate assumenda incidunt et eaque quo voluptate ea dolorum libero accusantium.</p>
                                <a href="#" className="flex items-center justify-end text-black">Devamını Oku →</a>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <button className="py-2 px-4 border rounded-lg border-blue-600 text-blue-600 font-medium w-full">
                                ✉️ Mesaj Gönderin
                            </button>
                            <div className="mt-4 flex items-start gap-2 text-gray-600">
                                <span className="text-lg mt-1">📍</span>
                                <p>1095 Lorem ipsum dolor sit amet New Jersey 07960, Amerika Birleşik Devletleri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Auth Modal */}
            <AuthModal />

            {/* Mobile Menu */}
            <MobileMenu />

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[999998]"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default ProfesyonellerPage;