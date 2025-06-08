import React, { useState, useEffect } from 'react';
import {
    ArrowUp,
    ArrowRight,
    Heart,
    Share2,
    Calendar,
    Phone,
    MessageCircle,
    Search,
    MapPin,
    Eye,
    Video,
    Star,
    Car,
    Shield,
    Wifi,
    Building2,
    Home,
    X,
    ChevronDown,
    ChevronRight,
    Play,
    Download,
    Camera,
    Navigation,
    Maximize2,
    Filter,
    Grid3X3,
    Map,
    Clock,
    Users,
    Bath,
    Bed,
    Square,
    ParkingCircle as Parking,
    CheckCircle2,
    ExternalLink,
    ZoomIn,
    Sparkles,
    TrendingUp,
    Award,
    Gift
} from 'lucide-react';
import Header from "../components/public/header.jsx";
import Footer from "../components/public/footer.jsx";

const ModernEmlakDetay = () => {
    const [activeTab, setActiveTab] = useState('ilan-bilgi');
    const [activeSearchTab, setActiveSearchTab] = useState('tab1');
    const [activeInnerTab, setActiveInnerTab] = useState('hastane');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showModal, setShowModal] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [expandedSections, setExpandedSections] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [showImageViewer, setShowImageViewer] = useState(false);

    // Scroll to top functionality with smooth animation
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

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Sample data with enhanced structure
    const propertyImages = [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    const propertyDetails = [
        { icon: Home, label: 'Emlak Tipi', value: 'Satılık Daire', color: 'text-blue-600' },
        { icon: TrendingUp, label: 'm² Fiyatı', value: '10.417 ₺', color: 'text-green-600' },
        { icon: Square, label: 'm² (Brüt)', value: '144', color: 'text-purple-600' },
        { icon: Square, label: 'm² (Net)', value: '140', color: 'text-purple-600' },
        { icon: Bed, label: 'Oda Sayısı', value: '3+1', color: 'text-orange-600' },
        { icon: Building2, label: 'Bina Yaşı', value: '1', color: 'text-indigo-600' },
        { icon: Building2, label: 'Bulunduğu Kat', value: '7', color: 'text-indigo-600' },
        { icon: Building2, label: 'Kat Sayısı', value: '9', color: 'text-indigo-600' }
    ];

    const premiumFeatures = [
        { icon: Shield, name: '24/7 Güvenlik', premium: true },
        { icon: Car, name: 'Kapalı Otopark', premium: true },
        { icon: Wifi, name: 'Fiber İnternet', premium: false },
        { icon: Users, name: 'Spor Salonu', premium: true },
        { icon: Bath, name: 'Türk Hamamı', premium: true },
        { icon: Award, name: 'Konsiyerj', premium: true },
        { icon: Sparkles, name: 'Yüzme Havuzu', premium: true },
        { icon: CheckCircle2, name: 'Asansör', premium: false }
    ];

    // Enhanced Property Card Component
    const PropertyCard = ({ isProject = false, featured = false }) => (
        <div className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
            {featured && (
                <div className="absolute top-3 left-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Öne Çıkan
                    </div>
                </div>
            )}

            <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">Fiyat Düştü</span>
                <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">Apartman</span>
                {isProject && <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">Proje</span>}
            </div>

            <div className="relative overflow-hidden">
                <img
                    src={propertyImages[Math.floor(Math.random() * propertyImages.length)]}
                    alt="Property"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-3 right-3">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                    </div>
                </div>
                <button className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70">
                    <Camera className="w-4 h-4" />
                </button>
            </div>

            <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1.300.000 ₺</span>
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full">
                            <Star className="w-4 h-4 text-white fill-current" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-full">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`transition-all p-2 rounded-full ${isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
                        >
                            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        </button>
                    </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    Modern yaşamın konforunu sunan, deniz manzaralı lüks daire. Merkezi konumda...
                </p>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 rounded-full">Satılık</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 rounded-full">4+1</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border border-orange-200 rounded-full">200 m²</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        2 saat önce
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 inline ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );

    // Enhanced Modal Component
    const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
        if (!isOpen) return null;

        const sizeClasses = {
            sm: 'max-w-md',
            md: 'max-w-2xl',
            lg: 'max-w-4xl',
            xl: 'max-w-6xl'
        };

        return (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
                <div className={`bg-white rounded-2xl shadow-2xl ${sizeClasses[size]} w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300`}>
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    // Enhanced Image Viewer
    const ImageViewer = () => (
        <Modal
            isOpen={showImageViewer}
            onClose={() => setShowImageViewer(false)}
            title="Emlak Galerisi"
            size="xl"
        >
            <div className="space-y-6">
                <div className="relative">
                    <img
                        src={propertyImages[currentImageIndex]}
                        alt={`Görsel ${currentImageIndex + 1}`}
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button
                            onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                            className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all"
                            disabled={currentImageIndex === 0}
                        >
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </button>
                        <button
                            onClick={() => setCurrentImageIndex(Math.min(propertyImages.length - 1, currentImageIndex + 1))}
                            className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all"
                            disabled={currentImageIndex === propertyImages.length - 1}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-3">
                    {propertyImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative rounded-lg overflow-hidden aspect-square ${
                                currentImageIndex === index
                                    ? 'ring-3 ring-blue-500 ring-offset-2'
                                    : 'hover:ring-2 hover:ring-gray-300'
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </Modal>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 font-['Inter']">
            {/* Enhanced Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 z-40 group"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
            )}

            <Header />

            {/* Main Content */}
            <section className="container mx-auto py-8 px-32">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Enhanced Navigation Tabs */}
                        <div className="sticky top-4 z-30 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-3 flex flex-wrap gap-2 mb-8 shadow-lg">
                            {[
                                { id: 'ilan-bilgi', label: 'İlan Bilgileri', icon: Home },
                                { id: 'aciklama', label: 'Açıklama', icon: FileText },
                                { id: 'konum', label: 'Konum', icon: MapPin },
                                { id: 'sokak', label: 'Sokak Görünümü', icon: Eye },
                                { id: 'video', label: 'Video', icon: Video },
                                { id: 'sanal-tur', label: 'Sanal Tur', icon: Navigation }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-3 text-sm rounded-xl transition-all duration-300 font-medium ${
                                        activeTab === tab.id
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-black shadow-lg transform scale-105'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Enhanced Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm mb-8 flex-wrap bg-white rounded-xl p-4 border border-gray-100">
                            {['Ana Sayfa', 'Emlak', 'Konut', 'Satılık', 'İstanbul', 'Sarıyer', 'Yeniköy'].map((item, index) => (
                                <React.Fragment key={item}>
                                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors font-medium">{item}</span>
                                    {index < 6 && <ChevronRight className="w-4 h-4 text-gray-300" />}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'ilan-bilgi' && (
                            <div className="space-y-8">
                                {/* Enhanced Image Gallery */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl overflow-hidden">
                                    <div className="md:col-span-2 md:row-span-2 relative group">
                                        <div className="absolute top-4 left-4 flex gap-2 z-10">
                                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                                                <Grid3X3 className="w-3 h-3" />
                                                3D Görüntü
                                            </span>
                                            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Kat Planı</span>
                                        </div>
                                        <img
                                            src={propertyImages[0]}
                                            alt="Ana görsel"
                                            className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700"
                                            onClick={() => setShowImageViewer(true)}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                            <button
                                                onClick={() => setShowImageViewer(true)}
                                                className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 flex items-center gap-2"
                                            >
                                                <ZoomIn className="w-4 h-4" />
                                                Büyük Görsel
                                            </button>
                                        </div>
                                    </div>

                                    {propertyImages.slice(1, 5).map((img, index) => (
                                        <div key={index} className="relative group cursor-pointer">
                                            <img
                                                src={img}
                                                alt={`Görsel ${index + 2}`}
                                                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                                onClick={() => {
                                                    setCurrentImageIndex(index + 1);
                                                    setShowImageViewer(true);
                                                }}
                                            />
                                            {index === 3 && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center">
                                                    <button
                                                        onClick={() => setShowImageViewer(true)}
                                                        className="text-white text-lg font-bold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                                                    >
                                                        <Camera className="w-5 h-5" />
                                                        +25 Fotoğraf
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Enhanced Property Info */}
                                <div className="flex flex-col lg:flex-row justify-between gap-8">
                                    <div className="flex-1 space-y-6">
                                        <div className="flex gap-6 text-orange-500 text-sm">
                                            <span className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                İlan No: <strong className="text-gray-800">#123456789</strong>
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <strong className="text-gray-800">28 Şubat 2024</strong>
                                            </span>
                                        </div>

                                        <div>
                                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bursa / Mudanya / Eryetiş Mah.</h1>
                                            <p className="text-gray-600">Modern yaşamın konforunu sunan lüks daire</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1.500.000 ₺</span>
                                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full">
                                                <Star className="w-6 h-6 text-white fill-current" />
                                            </div>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">10.417 ₺/m²</span>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { icon: Heart, label: 'Favorilerime Ekle', color: 'from-pink-500 to-red-500' },
                                                { icon: Share2, label: 'Paylaş', color: 'from-blue-500 to-cyan-500' },
                                                { icon: Download, label: 'PDF İndir', color: 'from-green-500 to-emerald-500' }
                                            ].map((action, index) => (
                                                <button
                                                    key={index}
                                                    className={`bg-gradient-to-r ${action.color} hover:shadow-lg text-white py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                                                >
                                                    <action.icon className="w-4 h-4" />
                                                    {action.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Enhanced Contact Card */}
                                    <div className="lg:w-80">
                                        <div className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-200 rounded-2xl p-6 space-y-6 shadow-xl">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                                                    YT
                                                </div>
                                                <h3 className="font-bold text-xl text-gray-900">Yaşar Tan</h3>
                                                <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    Doğrulanmış Hesap • Mayıs 2025
                                                </p>
                                            </div>

                                            <div className="space-y-3">
                                                {[
                                                    { label: 'Cep Telefonu', value: '0555 555 55 55', icon: Phone },
                                                    { label: 'Sabit Telefon', value: '0555 555 55 55', icon: Phone }
                                                ].map((contact, index) => (
                                                    <div key={index} className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl p-4 flex justify-between items-center group hover:bg-white transition-all">
                                                        <div className="flex items-center gap-3">
                                                            <contact.icon className="w-5 h-5 text-blue-600" />
                                                            <span className="text-gray-700">{contact.label}</span>
                                                        </div>
                                                        <a href={`tel:${contact.value}`} className="font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                                                            {contact.value}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex gap-3 text-sm">
                                                <button className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 py-3 rounded-xl transition-all font-medium">
                                                    <MessageCircle className="w-4 h-4" />
                                                    Mesaj
                                                </button>
                                                <button
                                                    onClick={() => setShowModal('appointment')}
                                                    className="flex-1 flex items-center justify-center gap-2 text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 py-3 rounded-xl transition-all font-medium"
                                                >
                                                    <Calendar className="w-4 h-4" />
                                                    Randevu
                                                </button>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mt-4">
                                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-black py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                                                Taşınmaz No: #123456789
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Property Details */}
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                            <Home className="w-5 h-5 text-white" />
                                        </div>
                                        İlan Detayları
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {propertyDetails.map((detail, index) => (
                                            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-start gap-4">
                                                    <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 ${detail.color} group-hover:scale-110 transition-transform duration-300`}>
                                                        <detail.icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="text-sm text-gray-600 font-medium">{detail.label}</span>
                                                        <div className="text-lg font-bold text-gray-900 mt-1">{detail.value}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced Features */}
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        Premium Özellikler
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                        {premiumFeatures.map((feature, index) => (
                                            <div key={index} className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                                                feature.premium
                                                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:border-yellow-300'
                                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                            }`}>
                                                {feature.premium && (
                                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                                        Premium
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-3">
                                                    <feature.icon className={`w-6 h-6 ${feature.premium ? 'text-orange-600' : 'text-blue-600'}`} />
                                                    <span className="font-medium text-gray-900">{feature.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => setShowModal('all-features')}
                                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Tüm Özellikleri Görüntüle
                                        </button>
                                    </div>
                                </div>

                                {/* Enhanced Promotions */}
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                                            <Gift className="w-5 h-5 text-white" />
                                        </div>
                                        Özel Fırsatlar & İndirimler
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            {
                                                title: "%12'ye varan indirimler",
                                                desc: "Peşin ödeme avantajıyla özel indirim fırsatları",
                                                gradient: "from-blue-600 to-cyan-500",
                                                icon: "💰"
                                            },
                                            {
                                                title: "%12'den itibaren faiz",
                                                desc: "Uygun koşullarla aile konut kredisi imkanı",
                                                gradient: "from-purple-600 to-pink-500",
                                                icon: "🏦"
                                            },
                                            {
                                                title: "Peşinatsız ipotek",
                                                desc: "Sıfır peşinatla ev sahibi olma fırsatı",
                                                gradient: "from-green-500 to-emerald-500",
                                                icon: "🏠"
                                            },
                                            {
                                                title: "Geri ödeme garantisi",
                                                desc: "60 gün içinde memnun kalmazsa geri ödeme",
                                                gradient: "from-orange-500 to-red-500",
                                                icon: "✅"
                                            }
                                        ].map((promo, index) => (
                                            <div key={index} className={`bg-gradient-to-br ${promo.gradient} rounded-2xl p-6 text-white space-y-4 hover:scale-105 transition-all duration-300 shadow-lg group cursor-pointer`}>
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-lg mb-2">{promo.title}</h5>
                                                        <p className="text-sm opacity-90 leading-relaxed">{promo.desc}</p>
                                                    </div>
                                                    <div className="text-3xl ml-3 group-hover:scale-110 transition-transform">
                                                        {promo.icon}
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-sm opacity-75">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    Sınırlı süre
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced Video and Nearby */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                                                <Video className="w-4 h-4 text-white" />
                                            </div>
                                            Emlak Videosu
                                        </h4>
                                        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl h-64 flex items-center justify-center cursor-pointer group overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20"></div>
                                            <div className="text-center text-white z-10">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                                    <Play className="w-8 h-8 ml-1" />
                                                </div>
                                                <p className="text-lg font-semibold mb-1">4K Kalite Video</p>
                                                <p className="text-sm opacity-75">3:45 dakika</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                                <MapPin className="w-4 h-4 text-white" />
                                            </div>
                                            Yakınımdaki Yerler
                                        </h4>

                                        <div className="flex gap-2 mb-6 flex-wrap">
                                            {[
                                                { key: 'hastane', label: 'Hastane', icon: '🏥', color: 'red' },
                                                { key: 'okul', label: 'Okul', icon: '🏫', color: 'blue' },
                                                { key: 'eczane', label: 'Eczane', icon: '💊', color: 'green' },
                                                { key: 'market', label: 'Market', icon: '🛒', color: 'orange' }
                                            ].map(place => (
                                                <button
                                                    key={place.key}
                                                    onClick={() => setActiveInnerTab(place.key)}
                                                    className={`px-4 py-2 text-sm rounded-xl border-2 transition-all duration-300 flex items-center gap-2 font-medium ${
                                                        activeInnerTab === place.key
                                                            ? `bg-${place.color}-600 text-white border-${place.color}-600 scale-105`
                                                            : `text-${place.color}-600 border-${place.color}-200 hover:border-${place.color}-400 hover:bg-${place.color}-50`
                                                    }`}
                                                >
                                                    <span className="text-lg">{place.icon}</span>
                                                    {place.label}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-48 flex items-center justify-center overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                                            <div className="text-center z-10">
                                                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                                <span className="text-blue-800 font-medium">İnteraktif Harita</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Similar Properties */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                                <Home className="w-5 h-5 text-white" />
                                            </div>
                                            Benzer Emlaklar
                                        </h4>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <Grid3X3 className="w-4 h-4" />
                                            </button>
                                            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-1">
                                                Tümünü Gör
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {Array.from({ length: 4 }, (_, index) => (
                                            <PropertyCard key={index} featured={index === 0} />
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced Projects */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                                <Building2 className="w-5 h-5 text-white" />
                                            </div>
                                            Yeni Projeler
                                        </h4>
                                        <button className="text-green-600 hover:text-green-700 font-medium transition-colors flex items-center gap-1">
                                            Tüm Projeleri Gör
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {Array.from({ length: 4 }, (_, index) => (
                                            <PropertyCard key={index} isProject={true} featured={index === 1} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Other tab contents remain similar but enhanced... */}
                        {activeTab === 'aciklama' && (
                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-white" />
                                        </div>
                                        Emlak Açıklaması
                                    </h4>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                            Modern mimarisiyle öne çıkan bu lüks daire, şehrin en prestijli bölgelerinden birinde konumlanmıştır.
                                            Geniş ve ferah yaşam alanları, yüksek kaliteli malzemeler ve özenli işçilikle tasarlanmış bu özel
                                            konut, konforu ve estetiği bir araya getiriyor.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Deniz manzaralı geniş balkonları, modern mutfağı ve lüks banyolarıyla hayalinizdeki evi gerçekleştiren
                                            bu daire, aynı zamanda zengin sosyal olanakları ile de dikkat çekiyor. 24 saat güvenlik, kapalı otopark,
                                            spor salonu ve yüzme havuzu gibi premium hizmetler, yaşam kalitenizi en üst seviyeye çıkarıyor.
                                        </p>
                                    </div>
                                </div>

                                {/* Enhanced Floor Plans */}
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                                            <Grid3X3 className="w-5 h-5 text-white" />
                                        </div>
                                        Kat Planları & Oda Detayları
                                    </h4>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {[
                                            { name: 'Ana Yatak Odası', size: '25 m²', icon: '🛏️', color: 'blue' },
                                            { name: 'Yatak Odası 1', size: '18 m²', icon: '🛏️', color: 'purple' },
                                            { name: 'Yatak Odası 2', size: '16 m²', icon: '🛏️', color: 'indigo' },
                                            { name: 'Oturma Odası', size: '35 m²', icon: '🛋️', color: 'green' },
                                            { name: 'Mutfak', size: '15 m²', icon: '🍽️', color: 'orange' },
                                            { name: 'Yemek Odası', size: '20 m²', icon: '🍽️', color: 'red' },
                                            { name: 'Misafir Odası', size: '12 m²', icon: '🪑', color: 'teal' },
                                            { name: 'Ana Banyo', size: '8 m²', icon: '🚿', color: 'cyan' },
                                            { name: 'Misafir Banyosu', size: '5 m²', icon: '🚿', color: 'pink' },
                                            { name: 'Balkon', size: '12 m²', icon: '🌅', color: 'yellow' }
                                        ].map((room, index) => (
                                            <div key={index} className={`bg-gradient-to-br from-${room.color}-50 to-${room.color}-100 border-2 border-${room.color}-200 rounded-xl p-4 hover:scale-105 transition-all duration-300 group`}>
                                                <div className="text-center">
                                                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{room.icon}</span>
                                                    <div className={`text-sm font-bold text-${room.color}-800`}>{room.name}</div>
                                                    <div className={`text-xs text-${room.color}-600 mt-1`}>{room.size}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Continue with other enhanced tabs... */}
                        {activeTab === 'konum' && (
                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        Konum & Ulaşım
                                    </h4>
                                    <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                                        <div className="text-center z-10">
                                            <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                                                <MapPin className="w-10 h-10 text-blue-600" />
                                            </div>
                                            <p className="text-xl font-bold text-blue-800 mb-2">İnteraktif Harita</p>
                                            <p className="text-blue-600">Detaylı konum bilgisi için tıklayın</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { distance: '5 km', location: 'Şehir Merkezine', icon: '🏙️', color: 'blue' },
                                            { distance: '2 km', location: 'En Yakın Metro', icon: '🚇', color: 'green' },
                                            { distance: '15 km', location: 'Havaalanı', icon: '✈️', color: 'orange' }
                                        ].map((item, index) => (
                                            <div key={index} className={`text-center p-6 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-2xl border-2 border-${item.color}-200 hover:scale-105 transition-all duration-300`}>
                                                <div className="text-3xl mb-3">{item.icon}</div>
                                                <div className={`text-2xl font-bold text-${item.color}-600 mb-1`}>{item.distance}</div>
                                                <div className={`text-sm text-${item.color}-700 font-medium`}>{item.location}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Enhanced Modals */}
            <Modal
                isOpen={showModal === 'appointment'}
                onClose={() => setShowModal(null)}
                title="Emlak Randevusu Oluştur"
                size="md"
            >
                <div className="space-y-6">
                    <div>
                        <h5 className="font-bold mb-4 text-gray-900">Tur Türünü Seçin</h5>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                <Users className="w-4 h-4" />
                                Kişisel Tur
                            </button>
                            <button className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-4 px-6 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                <Video className="w-4 h-4" />
                                Görüntülü Tur
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Ad"
                            className="border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Soyad"
                            className="border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Telefon Numarası"
                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors"
                    />

                    <input
                        type="email"
                        placeholder="E-Posta Adresi"
                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors"
                    />

                    <select className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors">
                        <option value="">Meslek Seçiniz</option>
                        <option value="ogrenci">Öğrenci</option>
                        <option value="ogretmen">Öğretmen</option>
                        <option value="muhendis">Mühendis</option>
                        <option value="doktor">Doktor</option>
                        <option value="avukat">Avukat</option>
                        <option value="diger">Diğer</option>
                    </select>

                    <textarea
                        placeholder="Ek bilgiler ve özel istekleriniz..."
                        rows="4"
                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />

                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="appointment-terms" className="w-4 h-4" />
                        <label htmlFor="appointment-terms" className="text-sm text-gray-600">
                            <span className="text-blue-600 hover:underline cursor-pointer">Kullanım şartlarını</span> kabul ediyorum.
                        </label>
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg">
                        Randevu Talep Et
                    </button>
                </div>
            </Modal>

            {/* Image Viewer Modal */}
            <ImageViewer />

            <Footer />

        </div>
    );
};

// Missing import for FileText
const FileText = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export default ModernEmlakDetay;