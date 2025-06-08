import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Projelerprojects = () => {
  return (
    <>
      <button id="scrollToTop" className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-turuncu text-white rounded-lgshadow-lg transition hidden z-[999999]">
          <i className="ri-arrow-up-line ri-lg"></i>
        </button>
        <Header></Header>
        <div className="py-3 px-32 bg-[#f4f4f4] hidden md:block">
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
          <div
            className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0">
            <h1 className="lg:text-6xl text-3xl font-extrabold">Emlak Kiralayın</h1>
            <p className="lg:w-[630px] text-center font-semibold lg:text-4xl text-2xl">
              Bir sonraki projenz için mükemmel serbest çalışanı bulun
            </p>
          </div>
        </section>
        <section className="container mx-auto py-12 px-32">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Yapım Aşamasında
                          </div>
                        </div>
                        <div className=" p-2">
                          <div className="flex items-center justify-between text-white text-xs">
                            <div className="space-y-2">
                              <h3>Stüdyolar</h3>
                              <h3>1+1</h3>
                              <h3>2+1</h3>
                              <h3>3+1</h3>
                            </div>
                            <div className="space-y-2">
                              <p>19.8 m² den itibaren</p>
                              <p>19.8 m² den itibaren</p>
                              <p>19.8 m² den itibaren</p>
                              <p>19.8 m² den itibaren</p>
                            </div>
                            <div className="space-y-2">
                              <span className="block">4.1 milyondan</span>
                              <span className="block">4.1 milyondan</span>
                              <span className="block">4.1 milyondan</span>
                              <span className="block">4.1 milyondan</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <span><i className="ri-star-fill text-[#FFD45E]"></i> 4.9</span>
                              <span>-</span>
                              <span>150 Değerlendirme</span>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>Yıldız Evler Sitesi</span>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor! Estetik ve Fonksiyonellikte Harika
                              Mobilyalarla....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Yapım Aşamasında
                          </div>
                        </div>
                        <div className=" p-2">
                          <div className="flex items-center justify-between text-white text-xs">
                            <div className="space-y-2">
                              <h3>Stüdyolar</h3>
                              <h3>1+1</h3>
                              <h3>2+1</h3>
                              <h3>3+1</h3>
                            </div>
                            <div className="space-y-2">
                              <p>19.8 m² den itibaren</p>
                              <p>19.8 m² den itibaren</p>
                              <p>19.8 m² den itibaren</p>
                              <p>19.8 m² den itibaren</p>
                            </div>
                            <div className="space-y-2">
                              <span className="block">4.1 milyondan</span>
                              <span className="block">4.1 milyondan</span>
                              <span className="block">4.1 milyondan</span>
                              <span className="block">4.1 milyondan</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <span><i className="ri-star-fill text-[#FFD45E]"></i> 4.9</span>
                              <span>-</span>
                              <span>150 Değerlendirme</span>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>Yıldız Evler Sitesi</span>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor! Estetik ve Fonksiyonellikte Harika
                              Mobilyalarla....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg md:col-span-2">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-2.5 shadow-lg">
                <div className="w-full bg-[#537DA7] h-[205px] rounded-lg"></div>
                <div className="pt-3 ml-1 flex items-scenter justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                    <span className="text-sm">Kırmızı Mimarlık</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                    <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2.5 shadow-lg">
                <div className="w-full bg-[#537DA7] h-[205px] rounded-lg"></div>
                <div className="pt-3 ml-1 flex items-scenter justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                    <span className="text-sm">Kırmızı Mimarlık</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                    <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg md:col-span-2">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg md:col-span-2">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-2.5 shadow-lg">
                <div className="w-full bg-[#537DA7] h-[205px] rounded-lg"></div>
                <div className="pt-3 ml-1 flex items-scenter justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                    <span className="text-sm">Kırmızı Mimarlık</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                    <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2.5 shadow-lg">
                <div className="w-full bg-[#537DA7] h-[205px] rounded-lg"></div>
                <div className="pt-3 ml-1 flex items-scenter justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                    <span className="text-sm">Kırmızı Mimarlık</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                    <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-lg md:col-span-2">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper mb-8">
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="relative">
                      <img className="rounded-lg w-full h-[440px]" src="./view/img/ilan-gorsel2.png" alt="" />
                      <div
                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                        <div className="flex items-center gap-1 flex-wrap p-2">
                          <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">
                            Fiyat Düştü
                          </div>
                          <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">
                            Apartman
                          </div>
                          <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">
                            Yeni
                          </div>
                          <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">
                            3D Modelleme
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mt-4 text-white text-xs">
                              <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                              <span>85 Fidan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                                <span>1.330.000₺</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-heart-line ri-lg"></i></a>
                                <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center"><i
                                    className="ri-corner-up-right-line ri-lg"></i></a>
                              </div>
                            </div>
                            <p className="text-white text-xs">
                              Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                              Katalog Sizi Bekliyor!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next p-3 rounded-full bg-white"></div>
                <div className="swiper-button-prev p-3 rounded-full bg-white"></div>
                <div className="swiper-pagination"></div>
              </div>
              
              <div className="pt-0.5 ml-1 flex items-scenter justify-between">
                <div className="flex items-center gap-2 relative menu-container cursor-pointer">
                  <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                  <span className="text-sm">Demiral Proje Mimarlık</span>
                  <div className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                    <div className="grid grid-cols-3 gap-1">
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                      <img src="./view/img/profil.png" alt="" />
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="rounded-full -mt-10 w-[100px] h-[100px]" src="./view/img/ilan-pp.png" alt="" />
                      <div className="text-sm mt-2">
                        <div>
                          <h4>Yaşar Tan</h4>
                          <span className="block text-[#FF5A01]">kacm2/yaşartan</span>
                        </div>
                        <div className="">
                          <h4>Bursa/ Osmangazi</h4>
                          <h4>Gayrimenkul Danışmanı</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35</h6>
                        <span className="font-medium text-xs">Satılık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">60</h6>
                        <span className="font-medium text-xs">Kiralık</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">95</h6>
                        <span className="font-medium text-xs">Aktif <br /> Portföy</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <div className="text-center">
                        <h6 className="text-sm font-medium">35 M</h6>
                        <span className="font-medium text-xs">En Yüksek <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">145 M</h6>
                        <span className="font-medium text-xs">Toplam <br /> Satış</span>
                      </div>
                      <div className="h-5 w-[1px] bg-gray-300"></div>
                      <div className="text-center">
                        <h6 className="text-sm font-medium">150</h6>
                        <span className="font-medium text-xs">Toplam <br /> Portföy</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-center mt-4"><i className="ri-star-fill text-yellow-400 mr-2"></i>4.9 Değerlendirme</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                      <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                      <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın
                      beyanları esas alınmıştır.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p><i className="ri-thumb-up-line ri-lg"></i> <span>100</span></p>
                  <p><i className="ri-eye-line ri-lg"></i> <span>100</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
    </>
  );
};

export default Projelerprojects;
