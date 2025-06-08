import React, {useState, useRef, useEffect} from 'react';
import {
    ChevronDown,
    ChevronUp,
    ArrowRight,
    Search,
    Calendar,
    Share,
    Heart,
    Phone,
    MessageCircle,
    MapPin,
    Home,
    Car,
    Wifi,
    Bath,
    Bed,
    Coffee,
    Tv,
    Shield,
    Users,
    Lock,
    Star
} from 'lucide-react';
import Header from "../components/public/header.jsx";
import Footer from "../components/public/footer.jsx";

const RoommateDetailPage = () => {
    const [activeTab, setActiveTab] = useState('ilan-bilgi');
    const [activeInnerTab, setActiveInnerTab] = useState('hastane');
    const [activeSearchTab, setActiveSearchTab] = useState('tab1');
    const [selectedImages, setSelectedImages] = useState(0);
    const [showPopup, setShowPopup] = useState(null);
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const [selectedCity, setSelectedCity] = useState('istanbul');
    const [selectedDistricts, setSelectedDistricts] = useState([]);
    const [priceRange, setPriceRange] = useState({min: '', max: ''});
    const [areaRange, setAreaRange] = useState({min: '', max: ''});

    const images = [
        '/public/ilan-gorsel.png',
        '/public/ilan-gorsel.png',
        '/public/ilan-gorsel.png',
        '/public/ilan-gorsel.png',
        '/public/ilan-gorsel.png'
    ];

    const propertyFeatures = [
        {icon: '🔥', name: 'Isıtma Ünitesi'},
        {icon: '🚿', name: 'Özel Banyo'},
        {icon: '👕', name: 'Çekmeceli Dolap'},
        {icon: '🚪', name: 'Gömme Dolap'},
        {icon: '🛏️', name: 'Çift Kişilik Yatak'},
        {icon: '❄️', name: 'Klima'},
        {icon: '💻', name: 'Çalışma Masası'},
        {icon: '🌿', name: 'Balkon'},
        {icon: '📺', name: 'TV'}
    ];

    const buildingFeatures = [
        {icon: '🪑', name: 'Mobilyalı'},
        {icon: '🍽️', name: 'Bulaşık Makinesi'},
        {icon: '👔', name: 'Çamaşır Makinesi'},
        {icon: '🔥', name: 'Kurutma Makinesi'},
        {icon: '🍞', name: 'Fırın'},
        {icon: '🍳', name: 'Donanımlı Mutfak'},
        {icon: '❄️', name: 'Klima'},
        {icon: '🌐', name: 'ADSL'},
        {icon: '🧊', name: 'Buzdolabı'},
        {icon: '📺', name: 'TV'},
        {icon: '🌿', name: 'Balkon'},
        {icon: '🛗', name: 'Asansör'},
        {icon: '🔥', name: 'Doğalgaz'},
        {icon: '🏊', name: 'Havuz Erişimi'},
        {icon: '🚗', name: 'Otopark'},
        {icon: '👮', name: 'Kapıcı / Resepsiyon'},
        {icon: '♿', name: 'Engelli Erişimine Uygun'}
    ];

    const tabs = [
        {id: 'ilan-bilgi', label: 'İlan Bilgileri'},
        {id: 'konum', label: 'Konum'},
        {id: 'sokak', label: 'Sokak Görünümü'},
        {id: 'video', label: 'Video'},
        {id: 'sanal-tur', label: 'Sanal Tur'}
    ];

    const searchTabs = [
        {id: 'tab1', label: 'Satılık'},
        {id: 'tab2', label: 'Kiralık'},
        {id: 'tab3', label: 'Ev Arkadaşı'},
        {id: 'tab4', label: 'Projeler'},
        {id: 'tab5', label: 'Ortak'}
    ];

    const cities = [
        {value: 'istanbul', label: 'İstanbul'},
        {value: 'ankara', label: 'Ankara'},
        {value: 'izmir', label: 'İzmir'},
        {value: 'bursa', label: 'Bursa'}
    ];

    const roomOptions = [
        '1+0', '1+1', '1.5+1', '2+0', '2+1', '2.5+1', '2+2', '3+0', '3+1', '3.5+1', '3+2', '3+3', '4+0', '4+1', '4.5+1', '4.5+2', '4+2', '4+3', '4+4', '5+1', '5.5+1', '5+2', '5+3', '5+4'
    ];

    const toggleAccordion = (id) => {
        setExpandedAccordion(expandedAccordion === id ? null : id);
    };

    const PropertyCard = ({image, price, description, tags}) => (
        <div className="bg-white rounded-lg shadow-lg border relative py-6">
            <div className="absolute top-2 left-2 flex items-center gap-1 flex-wrap z-10">
                <span className="text-white text-xs bg-blue-600 py-1 px-2 rounded-md">Fiyat Düştü</span>
                <span className="text-white text-xs bg-gray-600 py-1 px-2 rounded-md">Apartman</span>
                <span className="text-white text-xs bg-blue-500 py-1 px-2 rounded-md">Yeni</span>
            </div>
            <img className="rounded-t-lg w-full h-64 object-cover" src={image} alt=""/>
            <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">{price}</span>
                    <div className="flex items-center gap-2">
                        <Share className="w-5 h-5 cursor-pointer"/>
                        <Heart className="w-5 h-5 cursor-pointer"/>
                    </div>
                </div>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="py-1 px-2 rounded-md text-xs border border-gray-600">
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <Header></Header>

            {/* Main Content */}
            <section className="container mx-auto py-12 px-5">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="lg:w-2/3">
                        {/* Tab Navigation */}
                        <div className="text-black p-2 rounded-lg flex gap-4 flex-wrap mb-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                                        activeTab === tab.id ? 'bg-white text-black' : 'text-gray-700'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'ilan-bilgi' && (
                            <div className="space-y-8">
                                {/* Breadcrumb */}
                                <div className="flex items-center gap-2 text-sm">
                                    <span>Ana Sayfa</span>
                                    <ArrowRight className="w-4 h-4"/>
                                    <span>Ev Arkadaşı</span>
                                    <ArrowRight className="w-4 h-4"/>
                                    <span>İstanbul</span>
                                </div>

                                {/* Image Gallery */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                                    <div className="lg:col-span-2 lg:row-span-2 relative">
                                        <div className="absolute top-2 left-2 flex gap-1 flex-wrap z-10">
                                            <span className="text-white text-xs bg-blue-600 py-1 px-2 rounded-full">3D Görüntüleme</span>
                                            <span className="text-white text-xs bg-gray-600 py-1 px-2 rounded-full">Kat Planı</span>
                                            <span className="text-white text-xs bg-blue-500 py-1 px-2 rounded-full">Sokak Görünümü</span>
                                        </div>
                                        <img
                                            className="rounded-lg w-full h-full object-cover cursor-pointer"
                                            src={images[selectedImages]}
                                            alt=""
                                            onClick={() => setSelectedImages(0)}
                                        />
                                    </div>
                                    {images.slice(1, 5).map((image, index) => (
                                        <div key={index} className="relative">
                                            {index === 3 && (
                                                <div className="absolute bottom-2 right-2 z-10">
                                                    <button
                                                        className="bg-blue-600 text-white text-sm py-1 px-2 rounded-full">
                                                        30 Fotoğraf
                                                    </button>
                                                </div>
                                            )}
                                            <img
                                                className="rounded-lg w-full h-32 object-cover cursor-pointer"
                                                src={image}
                                                alt=""
                                                onClick={() => setSelectedImages(index + 1)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Property Info */}
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <p className="text-orange-500">
                                            İlan No: <span className="font-semibold text-black">#123456789</span>
                                        </p>
                                        <p className="text-orange-500">
                                            İlan Tarihi: <span className="font-semibold text-black">28 Şubat 2024</span>
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-xl mb-2">Bursa / Mudanya / Eryetiş Mah.</h2>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-3xl font-semibold">1.500 ₺</span>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 max-w-md">
                                            <button className="py-2 px-3 text-white rounded-lg text-sm bg-blue-600">
                                                Favorilerime Ekle
                                            </button>
                                            <button className="py-2 px-3 text-white rounded-lg text-sm bg-blue-600">
                                                Paylaş
                                            </button>
                                            <button className="py-2 px-3 text-white rounded-lg text-sm bg-blue-600">
                                                PDF İndir
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                {/* Property Details */}
                                <section className="bg-white p-6 border shadow-lg rounded-lg space-y-6">
                                    <h4 className="text-2xl font-semibold">Genel Bakış</h4>

                                    <div className="border border-gray-300 rounded-lg p-4 space-y-6">
                                        {/* Bedroom Features */}
                                        <div>
                                            <h5 className="text-lg font-semibold text-orange-500 mb-3">Yatak Odanız</h5>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {propertyFeatures.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2 py-1 px-2">
                                                        <span className="text-lg">{feature.icon}</span>
                                                        <span className="text-sm">{feature.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Building Features */}
                                        <div>
                                            <h5 className="text-lg font-semibold text-orange-500 mb-3">Emlak
                                                Özellikleri</h5>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {buildingFeatures.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2 py-1 px-2">
                                                        <span className="text-lg">{feature.icon}</span>
                                                        <span className="text-sm">{feature.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div>
                                            <h5 className="text-lg font-semibold text-orange-500 mb-3">Detaylar</h5>
                                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 list-disc pl-5">
                                                <li>Emlak Türü: Daire</li>
                                                <li>Kaç M2: 90m2</li>
                                                <li>Bulunduğu Kat: 5</li>
                                                <li>Asansör: Var</li>
                                                <li>Banyo Sayısı: 2</li>
                                                <li>Tuvalet Sayısı: 2</li>
                                                <li>Wi-Fi: Var</li>
                                                <li>Otopark: Var</li>
                                                <li>Depozito: 1000₺</li>
                                                <li>Evcil Hayvan: Farketmez</li>
                                                <li>Cinsiyet: Erkek</li>
                                                <li>Sigara: Evet</li>
                                                <li>Yaş Aralığı: 18 - 25</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-lg font-semibold mb-2">KacM2'nin görüşü</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
                                            exercitationem.
                                            Dolor recusandae obcaecati temporibus saepe eveniet ullam,
                                            nihil laboriosam! Aspernatur dignissimos blanditiis id vitae iste quibusdam,
                                            tempora
                                            cupiditate nulla voluptatem!
                                        </p>
                                    </div>

                                    <div>
                                        <h5 className="text-lg font-semibold mb-4">Bu dairedeki diğer odalar</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[1, 2, 3].map((_, index) => (
                                                <PropertyCard
                                                    key={index}
                                                    image="/api/placeholder/300/200"
                                                    price="1.300.000 ₺"
                                                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus!"
                                                    tags={['Satılık', '4+1', '200 m²']}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* House Rules */}
                                <section className="bg-white p-6 border shadow-lg rounded-lg space-y-4">
                                    <h4 className="text-2xl font-semibold">Ev Kuralları</h4>

                                    <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300">
                                        <p className="flex items-center gap-2">
                                            <Users className="w-5 h-5"/>
                                            Evcil hayvanlara izin verilmez
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Coffee className="w-5 h-5"/>
                                            Sigara içilmesine izin veriliyor
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Users className="w-5 h-5"/>
                                            Sadece tek kişilik kullanım
                                        </p>
                                    </div>

                                    <div>
                                        <h5 className="text-lg font-semibold mb-3">Ev Sahibi Kuralları</h5>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><span
                                                className="font-semibold">İzin verilen asgari kiracı yaşı:</span> 18
                                            </li>
                                            <li><span
                                                className="font-semibold">İzin verilen maksimum kiracı yaşı:</span> 35
                                            </li>
                                            <li>En az 6 ay kalış süresi olması halinde kayıt yaptırmak mümkündür.</li>
                                            <li><span className="font-semibold">Depozito:</span> aylık kira bedeline
                                                100₺ eklenecektir.
                                            </li>
                                            <li><span className="font-semibold">Ödeme Şekli:</span> banka havalesi, kart
                                                veya nakit.
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* Location Tab */}
                        {activeTab === 'konum' && (
                            <div className="bg-white p-6 border shadow-lg rounded-lg">
                                <h4 className="text-2xl font-semibold mb-4">Konum</h4>
                                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-12 h-12 text-gray-400"/>
                                    <span className="ml-2 text-gray-500">Harita Yükleniyor...</span>
                                </div>
                            </div>
                        )}

                        {/* Street View Tab */}
                        {activeTab === 'sokak' && (
                            <div className="bg-white p-6 border shadow-lg rounded-lg">
                                <h4 className="text-2xl font-semibold mb-4">Sokak Görünümü</h4>
                                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-12 h-12 text-gray-400"/>
                                    <span className="ml-2 text-gray-500">Sokak Görünümü Yükleniyor...</span>
                                </div>
                            </div>
                        )}

                        {/* Video Tab */}
                        {activeTab === 'video' && (
                            <div className="bg-white p-6 border shadow-lg rounded-lg">
                                <h4 className="text-2xl font-semibold mb-4">Video</h4>
                                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <Tv className="w-12 h-12 text-gray-400"/>
                                    <span className="ml-2 text-gray-500">Video Yükleniyor...</span>
                                </div>
                            </div>
                        )}

                        {/* Virtual Tour Tab */}
                        {activeTab === 'sanal-tur' && (
                            <div className="bg-white p-6 border shadow-lg rounded-lg">
                                <h4 className="text-2xl font-semibold mb-4">Sanal Tur</h4>
                                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <Home className="w-12 h-12 text-gray-400"/>
                                    <span className="ml-2 text-gray-500">Sanal Tur Yükleniyor...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-1/3 space-y-6">
                        {/* Owner Contact */}
                        <div className="bg-white p-4 border border-orange-500 rounded-lg">
                            <h3 className="font-semibold mb-2">Yaşar Tan</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Hesap açma tarihi: <span>Mayıs 2025</span>
                            </p>

                            <div className="space-y-2 mb-4">
                                <div
                                    className="flex items-center justify-between p-2 border border-orange-500 rounded-lg">
                                    <span>Cep Telefonu</span>
                                    <a href="tel:05555555555" className="font-semibold">0555 555 55 55</a>
                                </div>
                                <div
                                    className="flex items-center justify-between p-2 border border-orange-500 rounded-lg">
                                    <span>Sabit Telefon</span>
                                    <a href="tel:05555555555" className="font-semibold">0555 555 55 55</a>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-sm">
                                <button className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4"/>
                                    Mesaj Gönder
                                </button>
                                <button
                                    onClick={() => setShowPopup('randevu')}
                                    className="flex items-center gap-1"
                                >
                                    <Calendar className="w-4 h-4"/>
                                    Randevu Oluştur
                                </button>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-white p-6 border shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Konaklamak istediğiniz tarihi seçin</h3>

                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-2">Giriş Tarihi</label>
                                    <input
                                        type="date"
                                        className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-2">Çıkış Tarihi</label>
                                    <select
                                        className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                        <option>1 Ay</option>
                                        <option>3 Ay</option>
                                        <option>6 Ay</option>
                                        <option>12 Ay</option>
                                        <option>12+ Ay</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowPopup('konaklama')}
                                className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold"
                            >
                                Konaklama Talebi Oluştur
                            </button>
                        </div>

                        {/* Security Features */}
                        <div className="bg-white p-4 border shadow-lg rounded-lg space-y-4">
                            {[
                                {
                                    icon: Lock,
                                    title: 'Mevduat Korumalı',
                                    desc: 'Yardım etmek için buradayız! Ev sahibiniz depozitonuzu iade etmezse, biz iade edeceğiz.'
                                },
                                {
                                    icon: Shield,
                                    title: 'Mülk KacM2 tarafından kontrol edildi',
                                    desc: '27 Eylül 2024\'te kontrol edildi. Ekibimiz, ilanda gördüğünüz evi tam olarak aldığınızdan emin olmak için evi inceledi.'
                                },
                                {
                                    icon: Star,
                                    title: 'Faturalar dahil',
                                    desc: 'Kira ve kamu hizmetleri giderlerini kapsayan faturalarla sorunsuz bir kiralama deneyimi yaşayın.'
                                },
                                {icon: Home, title: 'Doğrulanmış ev sahibi', desc: 'Ev sahibi 3 yıldır bizimle.'}
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div
                                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5"/>
                                    </div>
                                    <div className="flex-1">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full text-left"
                                        >
                                            <h3 className="text-lg font-semibold flex items-center justify-between">
                                                {item.title}
                                                {expandedAccordion === index ?
                                                    <ChevronUp className="w-5 h-5"/> :
                                                    <ChevronDown className="w-5 h-5"/>
                                                }
                                            </h3>
                                        </button>
                                        {expandedAccordion === index && (
                                            <div className="mt-2">
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Other Properties Section */}
                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-semibold">Diğer Evler</h4>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Tümünü Gör</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((_, index) => (
                            <PropertyCard
                                key={index}
                                image="/api/placeholder/300/200"
                                price="1.300.000 ₺"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus! Accusantium..."
                                tags={['Satılık', '4+1', '200 m²']}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Popups */}
            {showPopup === 'randevu' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-screen overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">Randevu Oluştur</h2>
                            <button
                                onClick={() => setShowPopup(null)}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                ✖
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                                <Calendar className="w-12 h-12 text-gray-400"/>
                                <span className="ml-2 text-gray-500">Takvim</span>
                            </div>

                            <div>
                                <h5 className="text-lg font-medium mb-2">Tur Türü</h5>
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <button className="py-2 px-4 bg-blue-600 text-white rounded-lg text-sm">
                                        Kişisel Tur
                                    </button>
                                    <button className="py-2 px-4 bg-blue-600 text-white rounded-lg text-sm">
                                        Görüntülü Tur
                                    </button>
                                </div>
                            </div>

                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="tel"
                                placeholder="Telefon"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="E-Posta"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <textarea
                                placeholder="Mesaj"
                                rows="4"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="terms"/>
                                <label htmlFor="terms" className="text-xs">
                                    Bu formu göndererek Kullanım Şartlarını kabul ediyorum.
                                </label>
                            </div>

                            <button className="w-full py-2 bg-orange-500 text-white rounded-lg">
                                Randevu Al
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showPopup === 'konaklama' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">Konaklama Talebi Oluştur</h2>
                            <button
                                onClick={() => setShowPopup(null)}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                ✖
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Ad</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Soyad</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">E-Posta Adresi</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Cep Telefonu</label>
                                <input
                                    type="tel"
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Medeni Durum</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>Evli</option>
                                    <option>Bekar</option>
                                    <option>Boşanmış</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Eğitim Durumu</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>İlkokul</option>
                                    <option>Ortaokul</option>
                                    <option>Lise</option>
                                    <option>Üniversite</option>
                                    <option>Yüksek Lisans</option>
                                    <option>Doktora</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Doğum Yeri</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Yaş Aralığı</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>18 - 25 Yaş</option>
                                    <option>25 - 35 Yaş</option>
                                    <option>35 - 45 Yaş</option>
                                    <option>45 Yaş Üstü</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Cinsiyet</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>Kadın</option>
                                    <option>Erkek</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Evcil Hayvan</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>Var</option>
                                    <option>Yok</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Sigara Kullanımı</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>Kullanıyorum</option>
                                    <option>Kullanmıyorum</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Meslek</label>
                                <select
                                    className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Seçiniz</option>
                                    <option>Öğrenci</option>
                                    <option>Öğretmen</option>
                                    <option>Yazılımcı</option>
                                    <option>Mühendis</option>
                                    <option>Doktor</option>
                                    <option>Diğer</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                Talebiniz başarıyla alınmış olup en kısa sürede tarafınıza dönüş yapılacaktır.
                            </p>
                            <button className="py-2 px-6 bg-orange-500 text-white rounded-lg">
                                Talep Gönder
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer></Footer>
            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="fixed bottom-10 right-10 p-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-colors z-40"
            >
                <ChevronUp className="w-5 h-5"/>
            </button>
        </div>
    );
};

export default RoommateDetailPage;