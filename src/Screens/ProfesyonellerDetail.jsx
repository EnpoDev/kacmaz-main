import { useState } from 'react';
import { Star, MapPin, Medal, ExternalLink, ArrowUp, Circle } from 'lucide-react';
import userPP from "../../public/images/profUser.jpg"
import Header from "../components/public/header.jsx";
import Footer from "../components/public/footer.jsx";
export default function CompanyDetailPage() {
    const [activeTab, setActiveTab] = useState('projeler');
    const [activeInnerTab, setActiveInnerTab] = useState('dis-mekan');
    const [expandedItems, setExpandedItems] = useState({});
    const [expandedReviews, setExpandedReviews] = useState({});

    const toggleExpanded = (type, index) => {
        if (type === 'expertise' || type === 'region') {
            setExpandedItems(prev => ({
                ...prev,
                [type]: !prev[type]
            }));
        } else if (type === 'review') {
            setExpandedReviews(prev => ({
                ...prev,
                [index]: !prev[index]
            }));
        }
    };

    const renderStars = (count = 5, filled = true) => {
        return Array.from({ length: count }, (_, i) => (
            <Star key={i} className={`w-5 h-5 ${filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
        ));
    };

    const expertiseAreas = ['Alçıpan', 'Boya', 'İzalasyon', 'Parke', 'Zemin Kaplama', 'Alçıpan', 'Alçıpan', 'Alçıpan', 'Alçıpan', 'Alçıpan'];
    const regions = ['Ankara', 'Bursa', 'İstanbul', 'İzmir', 'Kayseri', 'Sivas', 'Alçıpan', 'Alçıpan', 'Alçıpan', 'Alçıpan'];

    const projects = Array(7).fill().map((_, i) => ({
        id: i,
        title: 'Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!',
        location: 'Sivas / Merkez',
        photoCount: 30,
        image: '/public/ilan-gorsel.png'
    }));

    const teamMembers = Array(7).fill().map((_, i) => ({
        id: i,
        name: 'Mehmet Akif Güner',
        position: 'Front End Developer',
        image: '/public/ilan-gorsel.png',
        description: 'Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!'
    }));

    const reviews = Array(3).fill().map((_, i) => ({
        id: i,
        author: 'Ayşe Yılmaz',
        date: '20.12.2024',
        rating: 5.0,
        property: '2024 yılında Bursa Özlüce\'de bir apartman dairesi satın aldı.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel urna in nibh convallis fringilla. Nunc ultricies, dui eget faucibus accumsan, diam massa mollis quam, eu volutpat elit leo sit amet quam. Proin fermentum efficitur sapien at vulputate. Mauris elementum mi eget ante aliquet facilisis.',
        expandedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere libero eu justo hendrerit, eget tincidunt orci scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus dui sed odio.',
        response: {
            author: 'Yaşar Tan',
            date: '01.01.2025',
            content: 'Çok teşekkürler Ayşe! Senin için çok mutluyuz. İlk evini satın almanın ne kadar stresli olabileceğini biliyoruz, ancak bunu senin için kolaylaştırdığımızı duyduğumuz için heyecanlıyız. Seni tanımak gerçek bir zevkti ve iletişimde kalmayı dört gözle bekliyoruz. Tekrar tebrikler!'
        },
        categories: [
            'Mahalle Bilgisi',
            'Deneyim',
            'Profesyonellik',
            'Müzakere Becerileri',
            'Emlak Bilgisi',
            'İletişim Becerileri',
            'İletişim Beklentileri'
        ]
    }));

    const awards = Array(8).fill().map((_, i) => ({
        id: i,
        year: 2024,
        title: 'En iyi Kaç m² Hizmeti'
    }));

    const tabs = [
        { id: 'projeler', label: 'Projeler' },
        { id: 'hakkimda', label: 'Hakkımda' },
        { id: 'uzmanlik', label: 'Uzmanlık Alanlarım' },
        { id: 'ekibimiz', label: 'Ekibimiz' },
        { id: 'yorumlar', label: 'Müşteri Yorumları' },
        { id: 'uzmanlik-bolgem', label: 'Uzmanlık Bölgem' },
        { id: 'ulasin', label: 'Bize Ulaşın' },
        { id: 'odullerim', label: 'Ödüllerim' }
    ];

    const innerTabs = {
        projeler: [
            { id: 'dis-mekan', label: 'Dış Mekan' },
            { id: 'Mutfak', label: 'Mutfak' },
            { id: 'oturma-odasi', label: 'Oturma Odası' },
            { id: 'yemek-odasi', label: 'Yemek Odası' },
            { id: 'banyo', label: 'Banyo' },
            { id: 'yatak-odasi', label: 'Yatak' }
        ],
        ekibimiz: [
            { id: 'tum-ekip', label: 'Tüm Ekip' },
            { id: 'owner', label: 'Owner' },
            { id: 'broker', label: 'Broker' },
            { id: 'direktor', label: 'Direktör' },
            { id: 'danisman', label: 'Danışman' },
            { id: 'asistan', label: 'Asistan' }
        ]
    };

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            {/* Scroll to top button */}
            <button className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-orange-500 text-white shadow-lg transition z-50">
                <ArrowUp className="w-6 h-6" />
            </button>

            <Header></Header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-800 to-gray-600 bg-cover bg-no-repeat lg:h-96 h-72 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0"></div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto py-12 px-5 lg:px-0">
                <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                    {/* Sidebar */}
                    <div className="md:w-1/4 md:-mt-80 relative z-50">
                        {/* Rating Section */}
                        <div className="space-y-3 text-center pb-4">
                            <p className="md:text-white text-2xl font-medium">
                                <span className="text-3xl">4.8/5</span> Kaç Puan
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                {renderStars(5)}
                            </div>
                            <button className="py-2 px-3 text-white bg-orange-500 rounded-lg">
                                Bir Değerlendirme Yazın
                            </button>
                            <div className="flex items-center justify-center gap-3">
                                <p className="md:text-white text-sm">5 yıldız üzerinden <span>4.9</span> yıldız</p>
                                <Circle className="text-white w-1 h-1 fill-current" />
                                <p className="md:text-white text-sm">500+ yorum</p>
                            </div>
                        </div>

                        {/* Profile Card */}
                        <div className="bg-white rounded-lg border p-3 space-y-5">
                            {/* Profile Info */}
                            <div className="flex flex-col items-center gap-2">
                                <img className="w-full h-96 object-cover rounded" src={userPP} alt="Yaşar Tan" />
                                <div className="space-y-1.5 text-center w-full">
                                    <h3 className="text-2xl font-semibold">Yaşar Tan</h3>
                                    <span className="block text-orange-500">kacm2/yaşartan</span>
                                    <h3 className="text-green-500 text-sm">Doğrulanmış Profil</h3>
                                    <p>Gayrimenkul Danışmanı</p>
                                    <h4><MapPin className="inline w-5 h-5 mr-1" /> Bursa/ Osmangazi</h4>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-3 gap-2">
                                <button className="py-2 px-5 text-white rounded-lg bg-orange-500 text-sm">Beğen</button>
                                <button className="py-2 px-5 text-white rounded-lg bg-orange-500 text-sm">Paylaş</button>
                                <button className="py-2 px-5 text-white rounded-lg bg-orange-500 text-sm">Takip Et</button>
                            </div>

                            {/* Stats */}
                            <div className="border rounded-lg">
                                {[
                                    { label: 'Profil Görüntülenme', value: '592.287' },
                                    { label: 'Beğeni', value: '58.653' },
                                    { label: 'Takipçi', value: '1.169' },
                                    { label: 'Son Görülme', value: '3 Gün Önce' },
                                    { label: 'Ort. Yanıt Süresi', value: '5 saat' }
                                ].map((stat, index, array) => (
                                    <div key={stat.label} className={`flex items-center justify-between text-sm py-2 px-3 ${index < array.length - 1 ? 'border-b' : ''}`}>
                                        <h5>{stat.label}</h5>
                                        <span className="text-gray-400">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Expertise Areas */}
                            <div>
                                <h4 className="font-medium">Uzmanlık Alanlarım</h4>
                                <div className="mt-3">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {expertiseAreas.slice(0, expandedItems.expertise ? expertiseAreas.length : 3).map((area, index) => (
                                            <div key={index} className="bg-blue-600 rounded-full text-white text-sm py-1 px-2">
                                                {area}
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => toggleExpanded('expertise')}
                                            className="text-xs underline decoration-orange-500 text-orange-500"
                                        >
                                            {expandedItems.expertise ? 'Daha Az Göster' : 'Tümünü Gör'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Expertise Region */}
                            <div>
                                <h4 className="font-medium">Uzmanlık Bölgem</h4>
                                <div className="mt-3">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {regions.slice(0, expandedItems.region ? regions.length : 3).map((region, index) => (
                                            <div key={index} className="bg-blue-600 rounded-full text-white text-sm py-1 px-2">
                                                {region}
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => toggleExpanded('region')}
                                            className="text-xs underline decoration-orange-500 text-orange-500"
                                        >
                                            {expandedItems.region ? 'Daha Az Göster' : 'Tümünü Gör'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="border rounded-lg">
                                {[
                                    { label: 'Yabancı Dil', value: 'Türkçe, İngilizce, Arapça' },
                                    { label: 'Eğitim Durumu', value: 'Yüksek Lisans' },
                                    { label: 'Memleket', value: 'Kayseri' },
                                    { label: 'Mesleki Deneyim', value: '+6 Yıl' }
                                ].map((info, index, array) => (
                                    <div key={info.label} className={`flex items-center justify-between text-sm py-2 px-3 ${index < array.length - 1 ? 'border-b' : ''}`}>
                                        <h5>{info.label}</h5>
                                        <span className="text-gray-400">{info.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div>
                                <h4 className="font-medium">Sosyal Medya</h4>
                                <div className="inline-flex mt-3 gap-2">
                                    {['facebook', 'instagram', 'youtube', 'twitter'].map(platform => (
                                        <a key={platform} href="#" className="w-8 h-8 bg-gray-300 rounded"></a>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="border p-2 rounded-lg space-y-2">
                                <h4>Yaşar ile iletişime geçin</h4>
                                <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" placeholder="Ad Soyad" />
                                <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" placeholder="Telefon" />
                                <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" placeholder="E-Posta" />
                                <textarea className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" placeholder="Konu" rows="4"></textarea>
                                <div className="inline-flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p className="text-xs">Bu formu göndererek Kullanım Şartlarını kabul ediyorum.</p>
                                </div>
                                <button className="py-1.5 w-full bg-orange-500 rounded-lg text-white text-sm">
                                    Ekip ile İletişime Geçin
                                </button>
                            </div>

                            {/* Partnership */}
                            <div className="border p-2 rounded-lg space-y-3">
                                <h4 className="font-medium">Kaç M2'de birlikte çalışın</h4>
                                <p>Bu acenteyle iletişime geçebilir ve listelerden doğrudan tur talebinde bulunabilirsiniz. <a href="#" className="text-orange-500">Daha fazla bilgi edinin</a></p>
                                <button className="py-1.5 w-full bg-orange-500 rounded-lg text-white text-sm">
                                    Temsilciniz olarak ekleyin
                                </button>
                            </div>

                            {/* Links */}
                            <div>
                                <h4 className="font-medium">Linkler</h4>
                                <div className="border rounded-lg">
                                    {['Sahibinden.com', 'R10.net', 'Emlakjet.com'].map((link, index, array) => (
                                        <div key={link} className={`flex items-center justify-between text-sm py-2 px-3 ${index < array.length - 1 ? 'border-b' : ''}`}>
                                            <h5>{link}</h5>
                                            <a href="#"><ExternalLink className="w-5 h-5" /></a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-3/4 w-full">
                        {/* Top badges (desktop only) */}
                        <div className="-mt-28 mb-10 relative z-50 hidden md:flex items-center justify-between">
                            <button className="bg-orange-500 py-2 px-4 rounded-lg text-white">
                                Yetki Belge No: #123456789
                            </button>
                            <div className="flex items-center flex-wrap gap-2">
                                {Array(2).fill().map((_, i) => (
                                    <div key={i} className="border border-yellow-500 rounded-lg p-2 text-yellow-500 text-center">
                                        <h6 className="text-sm">
                                            <Medal className="inline w-5 h-5 mr-1" />
                                            2024
                                        </h6>
                                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border p-2 flex items-center flex-wrap lg:justify-between rounded-lg text-sm gap-1">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`px-1.5 py-1 rounded-lg focus:outline-none ${
                                        activeTab === tab.id
                                            ? 'bg-blue-500 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="pt-4">
                            {/* Projects Tab */}
                            {activeTab === 'projeler' && (
                                <div>
                                    {/* Inner tabs for projects */}
                                    <div className="border p-2 inline-flex flex-wrap items-center gap-2 rounded-lg text-sm">
                                        {innerTabs.projeler.map(tab => (
                                            <button
                                                key={tab.id}
                                                className={`px-1.5 py-1 rounded-lg focus:outline-none ${
                                                    activeInnerTab === tab.id
                                                        ? 'bg-blue-500 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                                onClick={() => setActiveInnerTab(tab.id)}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Projects Grid */}
                                    <div className="pt-4">
                                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                                            {projects.map(project => (
                                                <div key={project.id} className="bg-white rounded-lg p-2.5 shadow-lg">
                                                    <div className="relative">
                                                        <img className="rounded-lg w-full md:h-72 h-64 object-cover" src={project.image} alt="" />
                                                        <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                                                            <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                                                <div className="text-white text-sm bg-gray-700 py-1 px-2 rounded-full">
                                                                    {project.photoCount} Fotoğraf
                                                                </div>
                                                            </div>
                                                            <div className="p-2 space-y-1">
                                                                <p className="text-white text-sm font-semibold">{project.title}</p>
                                                                <div className="inline-flex items-center gap-2 text-white">
                                                                    <MapPin className="w-4 h-4" />
                                                                    <p>{project.location}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Team Tab */}
                            {activeTab === 'ekibimiz' && (
                                <div>
                                    {/* Inner tabs for team */}
                                    <div className="border p-2 inline-flex flex-wrap items-center gap-2 rounded-lg text-sm">
                                        {innerTabs.ekibimiz.map(tab => (
                                            <button
                                                key={tab.id}
                                                className={`px-1.5 py-1 rounded-lg focus:outline-none ${
                                                    activeInnerTab === tab.id
                                                        ? 'bg-blue-500 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                                onClick={() => setActiveInnerTab(tab.id)}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Team Grid */}
                                    <div className="pt-4">
                                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                            {teamMembers.map(member => (
                                                <div key={member.id} className="bg-white rounded-lg p-2.5 shadow-lg">
                                                    <div className="relative group">
                                                        <img className="rounded-lg w-full h-96 object-cover" src={member.image} alt={member.name} />
                                                        <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg group-hover:opacity-0 transition-all duration-300">
                                                            <div></div>
                                                            <div className="p-2">
                                                                <p className="text-white text-xs">{member.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-3 ml-1 flex items-center justify-between">
                                                        <div>
                                                            <h3 className="font-medium">{member.name}</h3>
                                                            <p className="text-sm">{member.position}</p>
                                                        </div>
                                                        <div className="inline-flex mt-3 gap-2">
                                                            {['facebook', 'instagram', 'youtube', 'twitter'].map(platform => (
                                                                <a key={platform} href="#" className="w-6 h-6 bg-gray-300 rounded"></a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* About Tab */}
                            {activeTab === 'hakkimda' && (
                                <div className="space-y-3">
                                    <h1 className="text-gray-900 text-2xl font-semibold">Sanal Sahneleme Yapay Zeka Hakkında</h1>
                                    <div className="flex items-center flex-wrap gap-3">
                                        {Array(3).fill().map((_, i) => (
                                            <div key={i} className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                                                <Medal className="inline w-4 h-4 mr-1" />
                                                En Çok Satış
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iure voluptas numquam exercitationem aliquam illum totam vero quasi quo repellat, suscipit nam commodi! Ratione incidunt amet tenetur magni temporibus asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos facere exercitationem possimus sunt praesentium, dolorum ipsam iste blanditiis repellendus?</p>
                                    <h2 className="text-xl font-semibold text-gray-900">Örnek Başlık</h2>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iure voluptas numquam exercitationem aliquam illum totam vero quasi quo repellat, suscipit nam commodi! Ratione incidunt amet tenetur magni temporibus asperiores?</p>
                                    <h2 className="text-xl font-semibold text-gray-900">Örnek Başlık</h2>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iure voluptas numquam exercitationem aliquam illum totam vero quasi quo repellat, suscipit nam commodi! Ratione incidunt amet tenetur magni temporibus asperiores?</p>
                                </div>
                            )}

                            {/* Awards Tab */}
                            {activeTab === 'odullerim' && (
                                <div className="space-y-3">
                                    <h1 className="text-gray-900 text-2xl font-semibold">Kazandığımız Ödüller</h1>
                                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
                                        {awards.map(award => (
                                            <div key={award.id} className="border border-black rounded-lg p-2 text-black text-center">
                                                <h6 className="text-sm">
                                                    <Medal className="inline w-5 h-5 mr-1" />
                                                    {award.year}
                                                </h6>
                                                <p className="text-xs">{award.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Reviews Tab */}
                            {activeTab === 'yorumlar' && (
                                <div className="space-y-3">
                                    <div className="space-y-4">
                                        <div className="space-y-4 pb-5 border-b">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-2xl font-semibold">İncelemeler (999)</h4>
                                                <button className="py-2 px-5 text-sm bg-orange-500 rounded-lg text-white">Değerlendir</button>
                                            </div>
                                            <div className="inline-flex gap-5">
                                                <select className="py-2 px-3 border rounded-lg bg-inherit">
                                                    <option value="">Tüm Yorumlar (500)</option>
                                                </select>
                                                <select className="py-2 px-3 border rounded-lg bg-inherit">
                                                    <option value="">En Yeniler</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Reviews List */}
                                        {reviews.map((review, reviewIndex) => (
                                            <div key={review.id} className="space-y-4 pb-5 border-b">
                                                <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                                                    <div className="inline-flex items-center md:gap-5 gap-2">
                                                        <h5 className="md:text-lg text-sm font-medium">Tavsiye etme olasılığı çok yüksek</h5>
                                                        <Circle className="w-1 h-1 fill-gray-400 text-gray-400" />
                                                        <span className="flex items-center gap-1">
                              {review.rating}
                                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </span>
                                                    </div>
                                                    <a href="#" className="md:text-sm text-xs text-orange-500">Bir sorun bildir</a>
                                                </div>

                                                <div className="md:text-base text-sm">
                                                    <p>
                                                        <span>{review.date}</span> - <span>{review.author}</span>
                                                    </p>
                                                    <p>{review.property}</p>
                                                </div>

                                                <div className="space-y-1 md:text-base text-sm">
                                                    {review.categories.map(category => (
                                                        <div key={category}>
                                                            <div className="inline-flex gap-1">
                                                                {renderStars(5)}
                                                            </div>
                                                            <span className="ml-2">{category}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="md:text-base text-sm">
                                                    <p className="text-gray-700">
                                                        <span>{review.content}</span>
                                                        {expandedReviews[reviewIndex] && (
                                                            <span> {review.expandedContent}</span>
                                                        )}
                                                    </p>
                                                    <button
                                                        onClick={() => toggleExpanded('review', reviewIndex)}
                                                        className="text-orange-500 underline"
                                                    >
                                                        {expandedReviews[reviewIndex] ? 'Daha Az Göster' : 'Devamını Göster'}
                                                    </button>
                                                </div>

                                                <div className="flex md:items-center items-start gap-3">
                                                    <img className="w-12 h-12 rounded-full object-cover" src="public/ilan-gorsel.png" alt="Profile" />
                                                    <div className="md:text-base text-sm">
                                                        <h5 className="font-semibold">{review.response.author}'dan {review.response.date} tarihli yanıt</h5>
                                                        <p>{review.response.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Expertise Areas Tab */}
                            {activeTab === 'uzmanlik' && (
                                <div className="space-y-3">
                                    <h1 className="text-gray-900 text-2xl font-semibold">Uzmanlık Alanlarım</h1>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {expertiseAreas.map((area, index) => (
                                            <div key={index} className="bg-blue-600 rounded-full text-white text-sm py-2 px-4">
                                                {area}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Expertise Region Tab */}
                            {activeTab === 'uzmanlik-bolgem' && (
                                <div className="space-y-3">
                                    <h1 className="text-gray-900 text-2xl font-semibold">Uzmanlık Bölgem</h1>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {regions.map((region, index) => (
                                            <div key={index} className="bg-blue-600 rounded-full text-white text-sm py-2 px-4">
                                                {region}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact Tab */}
                            {activeTab === 'ulasin' && (
                                <div className="space-y-3">
                                    <h1 className="text-gray-900 text-2xl font-semibold">Bize Ulaşın</h1>
                                    <div className="bg-white p-6 rounded-lg border space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                                                <input type="text" className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Telefon</label>
                                                <input type="text" className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">E-Posta</label>
                                            <input type="email" className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Mesajınız</label>
                                            <textarea className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" rows="5" placeholder="Mesajınızı buraya yazın..."></textarea>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" id="terms" />
                                            <label htmlFor="terms" className="text-sm">Bu formu göndererek Kullanım Şartlarını kabul ediyorum.</label>
                                        </div>
                                        <button className="py-3 px-6 bg-orange-500 rounded-lg text-white font-medium hover:bg-orange-600 transition-colors">
                                            Mesaj Gönder
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}