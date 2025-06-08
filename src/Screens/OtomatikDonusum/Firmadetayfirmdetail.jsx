import React from 'react';

const Firmadetayfirmdetail = () => {
  return (
    <>
      <button id="scrollToTop" className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-turuncu text-white rounded-lgshadow-lg transition hidden z-[999999]">
            <i className="ri-arrow-up-line ri-lg"></i>
          </button>
          <div className="px-5 lg:px-0 flex justify-end py-2 bg-[#486078]">
            <div className="container mx-auto flex items-center justify-between">
              <ul className="lg:flex items-center gap-5 text-white text-sm font-medium hidden">
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    Mobilya Kiralama
                  </a>
                </li>
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    Nakliye
                  </a>
                </li>
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    Konaklama
                  </a>
                </li>
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    Hukuk
                  </a>
                </li>
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    Kredi
                  </a>
                </li>
                <li>
                  <a href="" className="inline-flex items-center gap-2">
                    <img className="w-[25px] h-[15px]" src="./view/img/icon-white.png" alt="" />
                    2. El
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-5 text-white text-xs">
                <button className="py-1 px-2 border border-white rounded-lg">
                  <i className="ri-add-circle-line ri-lg"></i>
                  Ücretsiz İlan Ver
                </button>
                <button className="py-1 px-2 border border-white rounded-lg">
                  <i className="ri-group-2-line ri-lg"></i>
                  Giriş Yap
                </button>
                <button className="py-1 px-2 border border-white rounded-lg">
                  <i className="ri-group-2-line ri-lg"></i>
                  Kayıt Ol
                </button>
              </div>
            </div>
          </div>
          <header className="bg-[#537DA6] lg:py-4 py-4 px-5 lg:px-0">
            <div className="container mx-auto flex items-center justify-between">
              <a href=""><img className="md:w-[170px] w-[100px] lg:h-[30px] h-[20px]" src="./view/img/logo.png" alt="" /></a>
              <div className="p-2 bg-white lg:w-1/2 rounded-lg lg:flex items-center justify-between hidden">
                <div className="flex items-center gap-2">
                  <i className="ri-search-line ri-lg text-gray-400"></i>
                  <input type="text" className="bg-inherit focus:outline-none md:w-[350px]" name="" id="" placeholder="Emlak, profesyonel veya ürün ara" />
                </div>
                <a href=""><i className="ri-camera-line text-gray-400 ri-lg"></i></a>
              </div>
              <div>
                <button id="menu-toggle" className="relative md:hidden focus:outline-none">
                  <i className="ri-menu-line ri-lg text-white"></i>
                </button>
              </div>
            </div>
            <div
              className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md opacity-0 invisible transition-all duration-300 z-[999999]"
            ></div>
      
            {/* Mobil Menü */}
            <div
              id="mobile-menu"
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform duration-300 z-[999999]"
            >
              <div className="">
                <div className="flex items-center justify-between border-b p-5">
                  <a href=""><img className="md:w-[170px] w-[100px] lg:h-[30px] h-[20px]" src="./view/img/logo2.png" alt="" /></a>
                  <button id="menu-close" className="text-gray-700 text-3xl">&times;</button>
                </div>
                <ul className="space-y-4 p-5">
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Satılık</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Kiralık</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Projeler</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Ortak</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Broker & Danışman</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Mimar/Mühendis</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Profesyoneller</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Sen Sat/Kirala</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Sanal Sahneleme</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Firma Rehberi</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Dekorasyon</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Hizmetlerimiz</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Magazin</a></li>
                  <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Mağaza</a></li>
                </ul>
              </div>
            </div>
          </header>
          <div className="py-3 px-4 bg-[#f4f4f4] hidden md:block">
            <div className="container mx-auto flex items-center justify-between text-sm">
              <a href="" className="py-2 px-3 text-white bg-[#FF5A01] rounded-lg">Satılık</a>
              <a href="" className="py-2 px-3">Kiralık</a>
              <a href="" className="py-2 px-3">Projeler</a>
              <a href="" className="py-2 px-3">Ortak</a>
              <a href="" className="py-2 px-3">Broker & Danışman</a>
              <a href="" className="py-2 px-3">Mimar/Mühendis</a>
              <a href="" className="py-2 px-3">Profesyoneller</a>
              <a href="" className="py-2 px-3">Sen Sat/Kirala</a>
              <a href="" className="py-2 px-3">Sanal Sahneleme</a>
              <a href="" className="py-2 px-3">Firma Rehberi</a>
              <a href="" className="py-2 px-3">Dekorasyon</a>
              <a href="" className="py-2 px-3">Hizmetlerimiz</a>
              <a href="" className="py-2 px-3">Mağaza</a>
            </div>
          </div>
          <section className="bg-[url('../img/banner.jpeg')] bg-cover bg-no-repeat lg:h-[400px] h-[300px] relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0"></div>
          </section>
          <section className="container mx-auto py-12 px-5 lg:px-0">
            <div className="flex flex-col-reverse md:flex-row items-start gap-5">
              <div className="md:w-1/4 md:-mt-80 relative z-50">
                <div className="space-y-3 text-center pb-4">
                    <p className="md:text-white text-2xl font-medium"><span className="text-3xl">4.8/5</span> Kaç Puan</p>
                    <div className="flex items-center justify-center gap-2">
                        <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                        <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                        <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                        <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                        <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                    </div>
                    <button className="py-2 px-3 text-white bg-turuncu rounded-lg">Bir Değerlendirme Yazın</button>
                    <div className="flex items-center justify-center gap-3">
                        <p className="md:text-white text-sm">5 yıldız üzerinden <span>4.9</span> yıldız</p>
                        <i className="ri-circle-fill text-white ri-xs"></i>
                        <p className="md:text-white text-sm">500+ yorum</p>
                    </div>
                </div>
                <div className=" bg-white rounded-lg border p-3 space-y-5 ">
                    <div className="flex flex-col items-center gap-2">
                        <img className="w-[300px] h-[400px] object-cover" src="./view/img/pp-page.jpg" alt="" />
                        <div className="space-y-1.5 text-center w-full">
                            <h3 className="text-2xl font-semibold">Yaşar Tan</h3>
                            <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                            <h3 className="text-green-500 text-sm">Doğrulanmış Profil</h3>
                            <p>Gayrimenkul Danışmanı</p>
                            <h4><i className="ri-map-pin-line ri-lg"></i> Bursa/ Osmangazi</h4>
                        </div>
                    </div>
                    
                    <div>
                        <div className="grid grid-cols-3 gap-2">
                            <button className="py-2 px-5 text-white rounded-lg bg-[#FF5A01] text-sm w-ful">Beğen</button>
                            <button className="py-2 px-5 text-white rounded-lg bg-[#FF5A01] text-sm w-ful">Paylaş</button>
                            <button className="py-2 px-5 text-white rounded-lg bg-[#FF5A01] text-sm w-ful">Takip Et</button>
                        </div>
                    </div>
                    <div className="border rounded-lg">
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Profil Görüntülenme</h5>
                            <span className="text-gray-400">592.287</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Beğeni</h5>
                            <span className="text-gray-400">58.653</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Takipçi</h5>
                            <span className="text-gray-400">1.169</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Son Görülme</h5>
                            <span className="text-gray-400">3 Gün Önce</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3">
                            <h5>Ort. Yanıt Süresi</h5>
                            <span className="text-gray-400">5 saat</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium">Uzmanlık Alanlarım</h4>
                        <div className="load-more-container mt-3">
                            <div className="content-list flex items-center gap-2 flex-wrap">
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Boya
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">
                                    İzalasyon
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Parke
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Zemin
                                    Kaplama
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <button className="load-more-btn text-xs underline decoration-[#FF5A01] text-[#FF5A01]">
                                    Tümünü Gör
                                </button>
                            </div>
      
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium">Uzmanlık Bölgem</h4>
                        <div className="load-more-container mt-3">
                            <div className="content-list flex items-center gap-2 flex-wrap">
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Ankara
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Bursa
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">İstanbul
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">İzmir
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Kayseri
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Sivas
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan
                                </div>
                                <button className="load-more-btn text-xs underline decoration-[#FF5A01] text-[#FF5A01]">
                                    Tümünü Gör
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg">
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Yabancı Dil</h5>
                            <span className="text-gray-400">Türkçe, İngilizce, Arapça</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Eğitim Durumu</h5>
                            <span className="text-gray-400">Yüksek Lisans</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                            <h5>Memleket</h5>
                            <span className="text-gray-400">Kayseri</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-2 px-3">
                            <h5>Mesleki Deneyim</h5>
                            <span className="text-gray-400">+6 Yıl</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium">Sosyal Medya</h4>
                        <div className="inline-flex mt-3 gap-2">
                            <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                            <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                            <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                            <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="border p-2 rounded-lg space-y-2">
                        <h4>Yaşar ile iletişime geçin</h4>
                        <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                            name="" id="" placeholder="Ad Soyad" />
                        <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                            name="" id="" placeholder="Telefon" />
                        <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                            name="" id="" placeholder="E-Posta" />
                        <textarea name="" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                            placeholder="Konu" id="" rows="4"></textarea>
                        <div className="inline-flex items-center gap-2"><input type="checkbox" name="" id="" />
                            <p className="text-xs">Bu formu göndererek Kullanım Şartlarını kabul ediyorum.</p>
                        </div>
                        <button className="py-1.5 w-full bg-turuncu rounded-lg text-white text-sm">Ekip ile İletişime
                            Geçin</button>
                    </div>
                    <div className="border p-2 rounded-lg space-y-3">
                        <h4 className="font-medium">Kaç M2’de birlikte çalışın</h4>
                        <p>Bu acenteyle iletişime geçebilir ve listelerden doğrudan tur talebinde bulunabilirsiniz. <a
                                href="" className="text-turuncu">Daha fazla bilgi edinin</a></p>
                        <button className="py-1.5 w-full bg-turuncu rounded-lg text-white text-sm">Temsilciniz olarak
                            ekleyin</button>
                    </div>
                    <div>
                        <h4 className="font-medium">Linkler</h4>
                        <div className="border rounded-lg">
                            <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                                <h5>Sahibinden.com</h5>
                                <a href=""><i className="ri-arrow-right-up-line ri-lg"></i></a>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2 px-3 border-b">
                                <h5>R10.net</h5>
                                <a href=""><i className="ri-arrow-right-up-line ri-lg"></i></a>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2 px-3">
                                <h5>Emlakjet.com</h5>
                                <a href=""><i className="ri-arrow-right-up-line ri-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <div className="md:w-3/4 w-full">
                <div className="-mt-28 mb-10 relative z-50 hidden md:flex items-center justify-between">
                  <button className=" bg-turuncu py-2 px-4 rounded-lg text-white">Yetki Belge No: #123456789</button>
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="border border-sari rounded-lg p-2 text-sari text-center">
                      <h6 className="text-sm">
                        <i className="ri-medal-line ri-lg"></i>
                        2024
                      </h6>
                      <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                    </div>
                    <div className="border border-sari rounded-lg p-2 text-sari text-center">
                      <h6 className="text-sm">
                        <i className="ri-medal-line ri-lg"></i>
                        2024
                      </h6>
                      <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                    </div>
                  </div>
                </div>
                <div className="tabs border p-2 flex items-center flex-wrap lg:justify-between rounded-lg text-sm">
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="projeler">Projeler</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="hakkimda">Hakkımda</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="uzmanlik">Uzmanlık Alanlarım</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="ekibimiz">Ekibimiz</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="yorumlar">Müşteri Yorumları</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="uzmanlik-bolgem">Uzmanlık Bölgem</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="ulasin">Bize Ulaşın</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="odullerim">Ödüllerim</button>
                </div>
                <div id="projeler" className="tab-content pt-4 ">
                  <div className="inner-tabs border p-2 inline-flex flex-wrap items-center gap-2 rounded-lg text-sm">
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="dis-mekan">Dış Mekan</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="Mutfak">Mutfak</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="oturma-odasi">
                      Oturma Odası
                    </button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="yemek-odasi">Yemek Odası</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="banyo">Banyo</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="yatak-odasi">Yatak</button>
                  </div>
                  <div className="inner-tab-contents">
                    <div id="dis-mekan" className="inner-tab-content pt-4">
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                          <div className="relative">
                            <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                            <div className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg">
                              <div className="flex items-center justify-end gap-1 flex-wrap p-2">
                                <div className="text-white text-sm bg-[#486078] py-1 px-2 rounded-full">30 Fotoğraf</div>
                              </div>
                              <div className="p-2 space-y-1">
                                <p className="text-white text-sm font-semibold">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                <div className="inline-flex items-center gap-2 text-white">
                                  <i className="ri-map-pin-line"></i>
                                  <p>Sivas / Merkez</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="ekibimiz" className="tab-content hidden pt-4">
                  <div className="inner-tabs border p-2 inline-flex flex-wrap items-center gap-2 rounded-lg text-sm">
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="tum-ekip">Tüm Ekip</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="owner">Owner</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="broker">Broker</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="direktor">Direktör</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="danisman">Danışman</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none inner-tab-btn" data-inner-tab="asistan">Asistan</button>
                  </div>
                  <div className="inner-tab-contents">
                    <div id="tum-ekip" className="inner-tab-content pt-4">
                      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 ml-1 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Mehmet Akif Güner</h3>
                              <p className="text-sm">Front End Developer</p>
                            </div>
                            <div className="inline-flex mt-3 gap-2">
                              <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                              <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                              <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                              <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="owner" className="inner-tab-content hidden pt-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-2.5 shadow-lg">
                          <div className="relative">
                            <img className="rounded-lg w-full h-[440px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                            <div
                              className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                            >
                              <div></div>
                              <div className="p-2">
                                <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="hakkimda" className="tab-content hidden pt-4 space-y-3">
                      <h1 className="text-gray-900 text-2xl font-semibold">Sanal Sahneleme Yapay Zeka Hakkında</h1>
                      <div className="flex items-center flex-wrap gap-3">
                          <div className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                            <i className="ri-medal-line"></i>
                            En Çok Satış
                          </div>
                          <div className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                            <i className="ri-medal-line"></i>
                            En Çok Satış
                          </div>
                          <div className="py-1 px-2 rounded-lg bg-gray-200 text-sm">
                            <i className="ri-medal-line"></i>
                            En Çok Satış
                          </div>
                        </div>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iure voluptas numquam exercitationem aliquam illum totam vero quasi quo repellat, suscipit nam commodi! Ratione incidunt amet tenetur magni temporibus asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos facere exercitationem possimus sunt praesentium, dolorum ipsam iste blanditiis repellendus? Ratione, minima tempora hic explicabo in maxime mollitia laborum dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum vero, nostrum beatae, sint praesentium nemo odit ex exercitationem itaque quibusdam culpa tempore aperiam voluptatem, delectus repudiandae labore repellat rerum molestias?</p>
                        <h2 className="text-xl font-semibold text-gray-900">Örnek Başlık</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iure voluptas numquam exercitationem aliquam illum totam vero quasi quo repellat, suscipit nam commodi! Ratione incidunt amet tenetur magni temporibus asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos facere exercitationem possimus sunt praesentium, dolorum ipsam iste blanditiis repellendus? Ratione, minima tempora hic explicabo in maxime mollitia laborum dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum vero, nostrum beatae, sint praesentium nemo odit ex exercitationem itaque quibusdam culpa tempore aperiam voluptatem, delectus repudiandae labore repellat rerum molestias?</p>
                        <h2 className="text-xl font-semibold text-gray-900">Örnek Başlık</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iure voluptas numquam exercitationem aliquam illum totam vero quasi quo repellat, suscipit nam commodi! Ratione incidunt amet tenetur magni temporibus asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos facere exercitationem possimus sunt praesentium, dolorum ipsam iste blanditiis repellendus? Ratione, minima tempora hic explicabo in maxime mollitia laborum dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum vero, nostrum beatae, sint praesentium nemo odit ex exercitationem itaque quibusdam culpa tempore aperiam voluptatem, delectus repudiandae labore repellat rerum molestias?</p>
                </div>
                <div id="odullerim" className="tab-content hidden pt-4 space-y-3">
                  <h1 className="text-gray-900 text-2xl font-semibold">Kazandığımız Ödüller</h1>
                  <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                      <div className="border border-black rounded-lg p-2 text-black text-center">
                        <h6 className="text-sm">
                          <i className="ri-medal-line ri-lg"></i>
                          2024
                        </h6>
                        <p className="text-xs">En iyi Kaç m² Hizmeti</p>
                      </div>
                    </div>
                </div>
                <div id="yorumlar" className="tab-content hidden pt-4 space-y-3">
                  <div className="space-y-4">
                      <div className="space-y-4 pb-5 border-b">
                        <div className="flex items-center justify-between">
                          <h4 className="text-2xl font-semibold">İncelemeler (999)</h4>
                          <button className="py-2 px-5 text-sm bg-turuncu rounded-lg text-white">Değerlendir</button>
                        </div>
                        <div className="inline-flex gap-5">
                          <select name="" id="" className="py-2 px-3 border rounded-lg bg-inherit">
                            <option value="" selected>Tüm Yorumlar (500)</option>
                          </select>
                          <select name="" id="" className="py-2 px-3 border rounded-lg bg-inherit">
                            <option value="" selected>En Yeniler</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-4 pb-5 border-b">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                          <div className="inline-flex items-center md:gap-5 gap-2">
                            <h5 className="md:text-lg text-sm font-medium">Tavsiye etme olasılığı çok yüksek</h5>
                            <i className="ri-circle-fill ri-xs text-gray-400"></i>
                            <span>
                              5.0
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </span>
                          </div>
                          <a href="" className="md:text-sm text-xs text-turuncu">Bir sorun bildir</a>
                        </div>
                        <div className="md:text-base text-sm">
                          <p>
                            <span>20.12.2024</span>
                            -
                            <span>Ayşe Yılmaz</span>
                          </p>
                          <p>2024 yılında Bursa Özlüce’de bir apartman dairesi satın aldı.</p>
                        </div>
                        <div className="space-y-1 md:text-base text-sm">
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Mahalle Bilgisi</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Deneyim</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Profesyonellik</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Müzakere Becerileri</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Emlak Bilgisi</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">İletişim Becerileri</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">İletişim Beklentileri</span>
                          </div>
                        </div>
                        <div className="md:text-base text-sm">
                          <p className="text-gray-700">
                            <span className="short-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel urna in nibh convallis fringilla. Nunc ultricies, dui eget
                              faucibus accumsan, diam massa mollis quam, eu volutpat elit leo sit amet quam. Proin fermentum efficitur sapien at vulputate.
                              Mauris elementum mi eget ante aliquet facilisis.
                            </span>
                            <span className="full-text hidden">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere libero eu justo hendrerit, eget tincidunt orci
                              scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat
                              lectus dui sed odio.
                            </span>
                          </p>
                          <button className="read-more-btn text-turuncu underline">Devamını Göster</button>
                        </div>
                        <div className="flex md:items-center items-start gap-3">
                          <img className="w-[50px] h-[50px] rounded-full" src="./view/img/yorum-pps.png" alt="" />
                          <div className="md:text-base text-sm">
                            <h5 className="font-semibold">Yaşar Tan'dan 01.01.2025 tarihli yanıt</h5>
                            <p>
                              Çok teşekkürler Ayşe! Senin için çok mutluyuz. İlk evini satın almanın ne kadar stresli olabileceğini biliyoruz, ancak bunu
                              senin için kolaylaştırdığımızı duyduğumuz için heyecanlıyız. Seni tanımak gerçek bir zevkti ve iletişimde kalmayı dört gözle
                              bekliyoruz. Tekrar tebrikler!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 pb-5 border-b">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                          <div className="inline-flex items-center md:gap-5 gap-2">
                            <h5 className="md:text-lg text-sm font-medium">Tavsiye etme olasılığı çok yüksek</h5>
                            <i className="ri-circle-fill ri-xs text-gray-400"></i>
                            <span>
                              5.0
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </span>
                          </div>
                          <a href="" className="md:text-sm text-xs text-turuncu">Bir sorun bildir</a>
                        </div>
                        <div className="md:text-base text-sm">
                          <p>
                            <span>20.12.2024</span>
                            -
                            <span>Ayşe Yılmaz</span>
                          </p>
                          <p>2024 yılında Bursa Özlüce’de bir apartman dairesi satın aldı.</p>
                        </div>
                        <div className="space-y-1 md:text-base text-sm">
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Mahalle Bilgisi</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Deneyim</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Profesyonellik</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Müzakere Becerileri</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Emlak Bilgisi</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">İletişim Becerileri</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">İletişim Beklentileri</span>
                          </div>
                        </div>
                        <div className="md:text-base text-sm">
                          <p className="text-gray-700">
                            <span className="short-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel urna in nibh convallis fringilla. Nunc ultricies, dui eget
                              faucibus accumsan, diam massa mollis quam, eu volutpat elit leo sit amet quam. Proin fermentum efficitur sapien at vulputate.
                              Mauris elementum mi eget ante aliquet facilisis.
                            </span>
                            <span className="full-text hidden">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere libero eu justo hendrerit, eget tincidunt orci
                              scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat
                              lectus dui sed odio.
                            </span>
                          </p>
                          <button className="read-more-btn text-turuncu underline">Devamını Göster</button>
                        </div>
                        <div className="flex md:items-center items-start gap-3">
                          <img className="w-[50px] h-[50px] rounded-full" src="./view/img/yorum-pps.png" alt="" />
                          <div className="md:text-base text-sm">
                            <h5 className="font-semibold">Yaşar Tan'dan 01.01.2025 tarihli yanıt</h5>
                            <p>
                              Çok teşekkürler Ayşe! Senin için çok mutluyuz. İlk evini satın almanın ne kadar stresli olabileceğini biliyoruz, ancak bunu
                              senin için kolaylaştırdığımızı duyduğumuz için heyecanlıyız. Seni tanımak gerçek bir zevkti ve iletişimde kalmayı dört gözle
                              bekliyoruz. Tekrar tebrikler!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 pb-5 border-b">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                          <div className="inline-flex items-center md:gap-5 gap-2">
                            <h5 className="md:text-lg text-sm font-medium">Tavsiye etme olasılığı çok yüksek</h5>
                            <i className="ri-circle-fill ri-xs text-gray-400"></i>
                            <span>
                              5.0
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </span>
                          </div>
                          <a href="" className="md:text-sm text-xs text-turuncu">Bir sorun bildir</a>
                        </div>
                        <div className="md:text-base text-sm">
                          <p>
                            <span>20.12.2024</span>
                            -
                            <span>Ayşe Yılmaz</span>
                          </p>
                          <p>2024 yılında Bursa Özlüce’de bir apartman dairesi satın aldı.</p>
                        </div>
                        <div className="space-y-1 md:text-base text-sm">
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Mahalle Bilgisi</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Deneyim</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Profesyonellik</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Müzakere Becerileri</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">Emlak Bilgisi</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">İletişim Becerileri</span>
                          </div>
                          <div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                              <i className="ri-star-fill ri-md text-[#FFD45E]"></i>
                            </div>
                            <span className="ml-2">İletişim Beklentileri</span>
                          </div>
                        </div>
                        <div className="md:text-base text-sm">
                          <p className="text-gray-700">
                            <span className="short-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel urna in nibh convallis fringilla. Nunc ultricies, dui eget
                              faucibus accumsan, diam massa mollis quam, eu volutpat elit leo sit amet quam. Proin fermentum efficitur sapien at vulputate.
                              Mauris elementum mi eget ante aliquet facilisis.
                            </span>
                            <span className="full-text hidden">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere libero eu justo hendrerit, eget tincidunt orci
                              scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat
                              lectus dui sed odio.
                            </span>
                          </p>
                          <button className="read-more-btn text-turuncu underline">Devamını Göster</button>
                        </div>
                        <div className="flex md:items-center items-start gap-3">
                          <img className="w-[50px] h-[50px] rounded-full" src="./view/img/yorum-pps.png" alt="" />
                          <div className="md:text-base text-sm">
                            <h5 className="font-semibold">Yaşar Tan'dan 01.01.2025 tarihli yanıt</h5>
                            <p>
                              Çok teşekkürler Ayşe! Senin için çok mutluyuz. İlk evini satın almanın ne kadar stresli olabileceğini biliyoruz, ancak bunu
                              senin için kolaylaştırdığımızı duyduğumuz için heyecanlıyız. Seni tanımak gerçek bir zevkti ve iletişimde kalmayı dört gözle
                              bekliyoruz. Tekrar tebrikler!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="border-b bg-mavi pt-8 text-white">
            <div className="mb-8 border-b md:mb-12">
              <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                <a href="/" aria-label="go home" className="block size-fit">
                  <img className="md:w-[170px] w-[100px] lg:h-[30px] h-[20px]" src="./view/img/logo.png" />
                </a>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="#" target="_blank" aria-label="X/Twitter" className="text-body block hover:text-title">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" aria-label="LinkedIn" className="text-body block hover:text-title">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" aria-label="Facebook" className="text-body block hover:text-title">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" aria-label="Threads" className="text-body block hover:text-title">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
                        color="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" aria-label="Instagram" className="text-body block hover:text-title">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" aria-label="TikTok" className="text-body block hover:text-title">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
                  <div className="space-y-4 text-base font-medium">
                    <span className="text-title font-bold text-xl">Product</span>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Features</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Solution</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Customers</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Pricing</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Help</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>About</span>
                    </a>
                  </div>
                  <div className="space-y-4 text-base font-medium">
                    <span className="text-title font-bold text-xl">Product</span>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Features</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Solution</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Customers</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Pricing</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Help</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>About</span>
                    </a>
                  </div>
                  <div className="space-y-4 text-base font-medium">
                    <span className="text-title font-bold text-xl">Product</span>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Features</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Solution</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Customers</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Pricing</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Help</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>About</span>
                    </a>
                  </div>
                  <div className="space-y-4 text-base font-medium">
                    <span className="text-title font-bold text-xl">Product</span>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Features</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Solution</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Customers</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Pricing</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>Help</span>
                    </a>
                    <a href="#" className="text-body block hover:text-title">
                      <span>About</span>
                    </a>
                  </div>
                </div>
                <form className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
                  <div className="field !space-y-4">
                    <label htmlFor="mail" className="text-title font-bold text-xl">Newsletter</label>
                    <div className="flex gap-2">
                      <input type="email" id="mail" name="mail" placeholder="E-Posta Adresin" className="py-2 px-3 bg-white rounded-lg focus:outline-none" />
                      <button className="btn variant-primary sz-sm">
                        <span className="btn-label">Gönder</span>
                      </button>
                    </div>
                    <span className="text-caption block">Açıklama</span>
                  </div>
                </form>
              </div>
              <div className="mt-12 gap-6 border-t py-6">
                <span className="block text-center text-sm">&copy 2024 Kacm2, All rights reserved</span>
              </div>
            </div>
          </footer>
    </>
  );
};

export default Firmadetayfirmdetail;
