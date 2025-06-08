import {useState} from 'react';

export default function Hero({activeTab, setActiveTab}) {

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div
            className="min-h-[30rem] flex flex-col items-center justify-center relative"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Header Text */}
            <div className="text-center text-white mb-8 px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Emlakta gerçek güven,
                    <br/>
                    sadece doğrudan iletişimle olur.
                </h1>
            </div>

            {/* Search Form Container */}
            <div className="w-full max-w-7xl mx-auto px-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-1 mb-0">
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab1'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Satılık
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab2'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Kiralık
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab3'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab3')}
                    >
                        Ev Arkadaşı
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab4'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab4')}
                    >
                        Projeler
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab5'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab5')}
                    >
                        Ortak
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab6'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab6')}
                    >
                        Takasko
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab7'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab7')}
                    > Sanal Sahneleme
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab8'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab8')}
                    > Evimin Değeri
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab9'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab9')}
                    > Nakliye
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab10'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab10')}
                    > Dekorasyon Fikirleri
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                            activeTab === 'tab11'
                                ? 'bg-white text-gray-800 border-b-2 border-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => handleTabClick('tab11')}
                    > Emlak Harita
                    </button>
                </div>

                {/* Search Form */}
                <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg p-4">
                    <div className="flex flex-wrap items-end gap-3">
                        {/* Gayrimenkul Tipi */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">
                                Gayrimenkul Tipi
                            </label>
                            <select
                                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]">
                                <option value="konut">Konut</option>
                                <option value="arsa">Arsa</option>
                                <option value="isyeri">İşyeri</option>
                            </select>
                        </div>

                        {/* İl */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">İl</label>
                            <select
                                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-[100px]">
                                <option value="istanbul">İstanbul</option>
                                <option value="ankara">Ankara</option>
                                <option value="izmir">İzmir</option>
                                <option value="sivas">Sivas</option>
                            </select>
                        </div>

                        {/* İlçe */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">İlçe</label>
                            <select
                                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-[140px]">
                                <option value="">(0 seçim yapıldı.)</option>
                                <option value="kadikoy">Kadıköy</option>
                                <option value="besiktas">Beşiktaş</option>
                                <option value="sisli">Şişli</option>
                            </select>
                        </div>

                        {/* Mahalle */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Mahalle</label>
                            <select
                                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-[140px]">
                                <option value="">(0 seçim yapıldı.)</option>
                                <option value="moda">Moda</option>
                                <option value="caddebostan">Caddebostan</option>
                            </select>
                        </div>

                        {/* Oda Sayısı */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Oda Sayısı</label>
                            <select
                                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-[140px]">
                                <option value="">(0 seçim yapıldı.)</option>
                                <option value="1+0">Stüdyo (1+0)</option>
                                <option value="1+1">1+1</option>
                                <option value="2+1">2+1</option>
                                <option value="3+1">3+1</option>
                                <option value="4+1">4+1</option>
                            </select>
                        </div>

                        {/* Fiyat */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Fiyat</label>
                            <div className="flex gap-1">
                                <input
                                    type="text"
                                    placeholder="min TL"
                                    className="w-20 px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="max TL"
                                    className="w-20 px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Para Birimi */}
                        <div className="flex-shrink-0 space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Para</label>
                            <select
                                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-[70px]">
                                <option value="TL">TL</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="flex-shrink-0 gap-x-2 flex">
                            <button
                                style={{backgroundColor: "#ff5a01"}}
                                className="text-white px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
                                Ara
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
                                Haritada Ara
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}