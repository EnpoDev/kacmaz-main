import React, { useState, useRef } from 'react';

const InteriorDesignAI = () => {
    const [activeTab, setActiveTab] = useState('ofisler');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [referenceImage, setReferenceImage] = useState(null);
    const [showReferenceUpload, setShowReferenceUpload] = useState(false);
    const [showNegativePrompt, setShowNegativePrompt] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [negativePrompt, setNegativePrompt] = useState('');
    const [outputCount, setOutputCount] = useState('1');
    const [aiIntervention, setAiIntervention] = useState(2);
    const [photoOperation, setPhotoOperation] = useState('');

    const fileInputRef = useRef(null);
    const referenceFileInputRef = useRef(null);

    const categories = [
        { id: 'ofisler', label: 'Ofisler' },
        { id: 'magazalar', label: 'Mağazalar' },
        { id: 'oda_kapisi', label: 'Oda Kapısı' },
        { id: 'ev_kapisi', label: 'Ev Kapısı' },
        { id: 'surgulu_kapi', label: 'Sürgülü Kapı' },
        { id: 'bahce_kapisi', label: 'Bahçe Kapısı' },
        { id: 'garaj_kapisi', label: 'Garaj Kapısı' },
        { id: 'somine', label: 'Şömine' },
        { id: 'tv_unitesi', label: 'TV Ünitesi' },
        { id: 'bar_taburesi', label: 'Bar Taburesi' },
        { id: 'kahve_kosesi', label: 'Kahve Köşesi' },
        { id: 'kitaplik', label: 'Kitaplık' },
        { id: 'komidin', label: 'Komidin' },
        { id: 'konsol', label: 'Konsol' },
        { id: 'minder', label: 'Minder' },
        { id: 'sandalye', label: 'Sandalye' },
        { id: 'sehpa', label: 'Sehpa' },
        { id: 'sperator', label: 'Speratör' },
        { id: 'on_bahce', label: 'Ön Bahçe' },
        { id: 'arka_bahce', label: 'Arka Bahçe' },
        { id: 'kis_bahcesi', label: 'Kış Bahçesi' },
        { id: 'havuz', label: 'Havuz' },
        { id: 'acik_hava_dus', label: 'Açık Hava Duş' },
        { id: 'acik_hava_mutfak', label: 'Açık Hava Mutfak' },
        { id: 'ates_cukuru', label: 'Ateş Çukuru' },
        { id: 'pergole', label: 'Pergole' },
        { id: 'peyzaj_stilleri', label: 'Peyzaj Stilleri' },
        { id: 'yatak_odasi', label: 'Yatak Odası' },
        { id: 'yemek_odasi', label: 'Yemek Odası' },
        { id: 'oturma_odasi', label: 'Oturma Odası' },
        { id: 'salon', label: 'Salon' },
        { id: 'banyo', label: 'Banyo' },
        { id: 'duvar_dekorasyonu', label: 'Duvar Dekorasyon' },
        { id: 'hol_antre_giris', label: 'Hol Antre Girişi' },
        { id: 'mutfak', label: 'Mutfak' },
        { id: 'elbise_dolabi', label: 'Elbise Dolabı' },
        { id: 'merdiven', label: 'Merdiven' },
        { id: 'perde', label: 'Perde' },
        { id: 'dogal_tas_mermer', label: 'Doğal Taş Mermer' },
        { id: 'giyinme_odasi', label: 'Giyinme Odası' },
        { id: 'camasir_odasi', label: 'Çamaşır Odası' },
        { id: 'cati_kati', label: 'Çatı Katı' },
        { id: 'penthouse', label: 'Penthouse' },
        { id: 'oda_stilleri', label: 'Oda Stilleri' },
        { id: 'dis_cephe', label: 'Dış Cephe' },
        { id: 'veranda', label: 'Veranda' },
        { id: 'posta_kutusu', label: 'Posta Kutusu' },
        { id: 'bina_stili', label: 'Bina Stili' }
    ];

    const handleImageUpload = (event, type = 'main') => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (type === 'main') {
                    setUploadedImage(e.target.result);
                } else {
                    setReferenceImage(e.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, type = 'main') => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (type === 'main') {
                        setUploadedImage(e.target.result);
                    } else {
                        setReferenceImage(e.target.result);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const removeImage = (type = 'main') => {
        if (type === 'main') {
            setUploadedImage(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
        } else {
            setReferenceImage(null);
            if (referenceFileInputRef.current) referenceFileInputRef.current.value = '';
        }
    };

    const handleGenerate = () => {
        console.log('Generating with:', {
            activeTab,
            uploadedImage: !!uploadedImage,
            referenceImage: !!referenceImage,
            prompt,
            negativePrompt,
            outputCount,
            aiIntervention,
            photoOperation
        });
        alert('Tasarım oluşturuluyor...');
    };

    const getSliderLabel = (value) => {
        const labels = ['Çok Düşük', 'Düşük', 'Orta', 'Fazla'];
        return labels[value] || 'Orta';
    };

    return (
        <div className="py-16 px-5 lg:px-0 bg-gray-50 min-h-screen">
            <div className="container mx-auto rounded-2xl">
                <h1 className="text-center text-zinc-700 md:text-4xl text-xl font-extrabold mb-6">
                    Alan Seç ve Yapay Zeka İle Düzenle
                </h1>

                <div className="flex items-stretch gap-5 h-full">
                    {/* Sol Panel - Tasarım Kategorileri */}
                    <div className="w-2/3 p-6 rounded-3xl bg-slate-600 overflow-auto hidden md:block max-h-[826px] border-2 border-white">
                        <h2 className="text-white text-center text-3xl font-extrabold mb-4">Son Tasarımlar</h2>

                        {/* Kategori Butonları */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`border border-white rounded-lg p-1 text-white text-xs transition-colors ${
                                        activeTab === category.id ? 'bg-orange-500' : 'hover:bg-white hover:text-slate-600'
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Önce/Sonra Görselleri */}
                        <div className="mt-4 text-white">
                            <div className="flex md:gap-5 mt-5">
                                <div className="w-full relative">
                                    <div className="absolute top-3 left-3 bg-orange-500 py-1 px-2 rounded-lg text-white z-10">
                                        Öncesi
                                    </div>
                                    <div className="w-full md:h-[200px] h-[150px] bg-gray-300 rounded-lg border-2 border-white flex items-center justify-center">
                                        <span className="text-gray-600">Örnek Resim</span>
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <div className="absolute top-3 right-3 bg-orange-500 py-1 px-2 rounded-lg text-white z-10">
                                        Sonrası
                                    </div>
                                    <div className="w-full md:h-[200px] h-[150px] bg-gray-300 rounded-lg border-2 border-white flex items-center justify-center">
                                        <span className="text-gray-600">AI Tasarım</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex md:gap-5 mt-5">
                                <div className="w-full relative">
                                    <div className="absolute top-3 left-3 bg-orange-500 py-1 px-2 rounded-lg text-white z-10">
                                        Öncesi
                                    </div>
                                    <div className="w-full md:h-[200px] h-[150px] bg-gray-300 rounded-lg border-2 border-white flex items-center justify-center">
                                        <span className="text-gray-600">Örnek Resim</span>
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <div className="absolute top-3 right-3 bg-orange-500 py-1 px-2 rounded-lg text-white z-10">
                                        Sonrası
                                    </div>
                                    <div className="w-full md:h-[200px] h-[150px] bg-gray-300 rounded-lg border-2 border-white flex items-center justify-center">
                                        <span className="text-gray-600">AI Tasarım</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Panel - Kontroller */}
                    <div className="md:w-1/3 p-6 rounded-3xl bg-slate-600 space-y-4 h-full border-2 border-white">

                        {/* Ana Görsel Yükleme */}
                        <div className="space-y-3">
                            <h3 className="text-white font-semibold">Görsel</h3>
                            <div
                                className="border-2 border-white w-full h-48 flex flex-col items-center justify-center text-white p-4 relative cursor-pointer rounded-lg hover:bg-slate-500 transition-colors"
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, 'main')}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'main')}
                                />

                                {uploadedImage ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img src={uploadedImage} alt="Yüklenen" className="max-h-full max-w-full rounded-lg" />
                                        <button
                                            onClick={(e) => { e.stopPropagation(); removeImage('main'); }}
                                            className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center pointer-events-none">
                                        <div className="text-3xl mb-2">📷</div>
                                        <p className="text-sm">Bir resim taşıyın, seçin, fotoğraf çekin veya CTRL + V</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Referans Görsel */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white font-semibold flex items-center gap-2">
                                    <span>📄</span>
                                    Referans Görsel
                                </h3>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={showReferenceUpload}
                                        onChange={(e) => setShowReferenceUpload(e.target.checked)}
                                    />
                                    <div className="relative w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>

                            {showReferenceUpload && (
                                <div
                                    className="border-2 border-white w-full h-48 flex flex-col items-center justify-center text-white p-4 relative cursor-pointer rounded-lg hover:bg-slate-500 transition-colors"
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, 'reference')}
                                    onClick={() => referenceFileInputRef.current?.click()}
                                >
                                    <input
                                        ref={referenceFileInputRef}
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'reference')}
                                    />

                                    {referenceImage ? (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={referenceImage} alt="Referans" className="max-h-full max-w-full rounded-lg" />
                                            <button
                                                onClick={(e) => { e.stopPropagation(); removeImage('reference'); }}
                                                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-center pointer-events-none">
                                            <div className="text-3xl mb-2">📷</div>
                                            <p className="text-sm">Bir resim taşıyın, seçin, fotoğraf çekin veya CTRL + V</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Fotoğraf İşlemleri */}
                        <div className="space-y-3 text-white">
                            <div>
                                <h4 className="mb-1 font-semibold">Fotoğraf İşlemleri</h4>
                                <select
                                    className="border border-white bg-slate-700 text-white w-full rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    value={photoOperation}
                                    onChange={(e) => setPhotoOperation(e.target.value)}
                                >
                                    <option value="">Seçiniz</option>
                                    <option value="labeling">Fotoğraf Etiketleme</option>
                                    <option value="quality">Fotoğraf Kalite Skoru</option>
                                    <option value="bg-remove">Arka Plan Kaldır</option>
                                    <option value="empty-room">Odayı Boşalt</option>
                                    <option value="remove-objects">Nesneleri Kaldır</option>
                                    <option value="floor-plan">Kat Planı</option>
                                </select>
                            </div>

                            {/* İstem */}
                            <div>
                                <h4 className="mb-1 font-semibold">İstem (Opsiyonel)</h4>
                                <div className="border border-white bg-slate-700 w-full rounded-lg py-2 px-3">
                  <textarea
                      className="py-2 px-3 focus:outline-none bg-inherit w-full text-white resize-none"
                      rows="4"
                      placeholder="Tasarım açıklamanızı yazın..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                  />
                                    <div className="flex items-center justify-end gap-2 text-white mt-2">
                                        <button
                                            onClick={() => navigator.clipboard.writeText(prompt)}
                                            className="hover:text-orange-500 transition-colors"
                                            title="Kopyala"
                                        >
                                            📋
                                        </button>
                                        <button
                                            onClick={() => setPrompt('')}
                                            className="hover:text-red-500 transition-colors"
                                            title="Temizle"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Olumsuz İstem */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <h4 className="mb-1 font-semibold">Olumsuz İstem</h4>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={showNegativePrompt}
                                            onChange={(e) => setShowNegativePrompt(e.target.checked)}
                                        />
                                        <div className="relative w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                    </label>
                                </div>

                                {showNegativePrompt && (
                                    <div className="border border-white bg-slate-700 w-full rounded-lg py-2 px-3">
                    <textarea
                        className="py-2 px-3 focus:outline-none bg-inherit w-full text-white resize-none"
                        rows="3"
                        placeholder="İstemediğiniz öğeleri yazın..."
                        value={negativePrompt}
                        onChange={(e) => setNegativePrompt(e.target.value)}
                    />
                                        <div className="flex items-center justify-end gap-2 text-white mt-2">
                                            <button
                                                onClick={() => navigator.clipboard.writeText(negativePrompt)}
                                                className="hover:text-orange-500 transition-colors"
                                                title="Kopyala"
                                            >
                                                📋
                                            </button>
                                            <button
                                                onClick={() => setNegativePrompt('')}
                                                className="hover:text-red-500 transition-colors"
                                                title="Temizle"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Çıktı Sayısı ve AI Müdahalesi */}
                            <div className="flex items-center gap-4">
                                <div className="w-1/2">
                                    <h4 className="mb-1 font-semibold">Çıktı Sayısı</h4>
                                    <select
                                        className="border border-white bg-slate-700 text-white w-full rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        value={outputCount}
                                        onChange={(e) => setOutputCount(e.target.value)}
                                    >
                                        <option value="1">1 Çıktı</option>
                                        <option value="2">2 Çıktı</option>
                                        <option value="3">3 Çıktı</option>
                                        <option value="4">4 Çıktı</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <h4 className="text-white mb-1 font-semibold">Yapay Zeka Müdahalesi</h4>
                                    <input
                                        className="w-full bg-zinc-700 accent-orange-500"
                                        type="range"
                                        min="0"
                                        max="3"
                                        value={aiIntervention}
                                        onChange={(e) => setAiIntervention(Number(e.target.value))}
                                    />
                                    <div className="text-center text-xs mt-2 text-orange-400 font-medium">
                                        {getSliderLabel(aiIntervention)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Oluştur Butonu */}
                        <div className="pt-4">
                            <button
                                onClick={handleGenerate}
                                className="w-full py-3 rounded-lg border border-white text-white bg-orange-500 hover:bg-orange-600 transition-colors font-semibold"
                            >
                                Şimdi Oluştur
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteriorDesignAI;