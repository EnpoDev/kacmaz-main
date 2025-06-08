import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Danismandetayadvisordetail = () => {
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
            <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0"></div>
          </section>
          <section className="container mx-auto py-12 px-32">
            <div className="flex flex-col-reverse md:flex-row items-start gap-5">
              <div className="md:w-1/4 md:-mt-80 relative z-50">
                <div className="space-y-3 text-center pb-4">
                  <p className="md:text-white text-2xl font-medium">
                    <span className="text-3xl">4.8/5</span>
                    Kaç Puan
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                    <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                    <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                    <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                    <i className="ri-star-fill ri-xl text-[#FFD45E]"></i>
                  </div>
                  <button className="py-2 px-3 text-white bg-turuncu rounded-lg">Bir Değerlendirme Yazın</button>
                  <div className="flex items-center justify-center gap-3">
                    <p className="md:text-white text-sm">
                      5 yıldız üzerinden
                      <span>4.9</span>
                      yıldız
                    </p>
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
                      <h4>
                        <i className="ri-map-pin-line ri-lg"></i>
                        Bursa/ Osmangazi
                      </h4>
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
                      <h5>Ortalama Yanıt Süresi</h5>
                      <span className="text-gray-400">5 saat</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Uzmanlık Alanlarım</h4>
                    <div className="load-more-container mt-3">
                      <div className="content-list flex items-center gap-2 flex-wrap">
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Boya</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">İzalasyon</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Parke</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Zemin Kaplama</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <button className="load-more-btn text-xs underline decoration-[#FF5A01] text-[#FF5A01]">Tümünü Gör</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Uzmanlık Bölgem</h4>
                    <div className="load-more-container mt-3">
                      <div className="content-list flex items-center gap-2 flex-wrap">
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Ankara</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Bursa</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">İstanbul</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">İzmir</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Kayseri</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Sivas</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <div className="item bg-[#537DA6] rounded-full text-white text-sm py-1 px-2 hidden">Alçıpan</div>
                        <button className="load-more-btn text-xs underline decoration-[#FF5A01] text-[#FF5A01]">Tümünü Gör</button>
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
                    <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" name="" id="" placeholder="Ad Soyad" />
                    <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" name="" id="" placeholder="Telefon" />
                    <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" name="" id="" placeholder="E-Posta" />
                    <textarea
                      name=""
                      className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                      placeholder="Konu"
                      id=""
                      rows="4"
                    ></textarea>
                    <div className="inline-flex items-center gap-2">
                      <input type="checkbox" name="" id="" />
                      <p className="text-xs">Bu formu göndererek Kullanım Şartlarını kabul ediyorum.</p>
                    </div>
                    <button className="py-1.5 w-full bg-turuncu rounded-lg text-white text-sm">Ekip ile İletişime Geçin</button>
                  </div>
                  <div className="border p-2 rounded-lg space-y-3">
                    <h4 className="font-medium">Kaç M2’de birlikte çalışın</h4>
                    <p>
                      Bu acenteyle iletişime geçebilir ve listelerden doğrudan tur talebinde bulunabilirsiniz. 
                      <a href="" className="text-turuncu">Daha fazla bilgi edinin</a>
                    </p>
                    <button className="py-1.5 w-full bg-turuncu rounded-lg text-white text-sm">Temsilciniz olarak ekleyin</button>
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
                <div className="-mt-36 mb-10 relative z-50 hidden md:flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="">
                      <div className="inline-flex">
                        <img className="mr-2" src="./view/img/fidan.png" alt="" />
                        <span className="text-white text-sm">Kaç Fidan ile 500 ağaç dikildi.</span>
                      </div>
                    </div>
                    <button className=" bg-turuncu py-2 px-4 rounded-lg text-white">Yetki Belge No: #123456789</button>
                  </div>
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
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="ilan-bilgi">Ana Sayfa</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="hakkimda">Hakkımda</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="satilik">Satılık Portföyler (50)</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="kiralik">Kiralık Portföyler (50)</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="portfoy">Portföylerim (100)</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="uzmanlik">Uzmanlıklarım</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="ekibimiz">Ekibimiz</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="yorumlar">Müşteri Yorumları</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="tapu-teslim">Tapu Teslim</button>
                  <button className="tab-btn px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none" data-tab="ulasin">Bize Ulaşın</button>
                </div>
                <div id="ilan-bilgi" className="tab-content pt-4 lg:space-y-8 space-y-4">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2">
                        <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                        <h4 className="text-2xl font-semibold">Son Satışlar</h4>
                      </div>
                      <p>Satış rakamları tüm ekip üyelerini temsil eder</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 border rounded-lg bg-white shadow-lg p-3 text-center">
                      <div>
                        <span className="block text-2xl font-medium">500</span>
                        <h6 className="text-sm">Son 12 Aydaki Satış</h6>
                      </div>
                      <div>
                        <span className="block text-2xl font-medium">500</span>
                        <h6 className="text-sm">Toplam Satış</h6>
                      </div>
                      <div>
                        <span className="block text-2xl font-medium">500</span>
                        <h6 className="text-sm">Fiyat Aralığı</h6>
                      </div>
                      <div>
                        <span className="block text-2xl font-medium">500</span>
                        <h6 className="text-sm">Ortalama Fiyat</h6>
                      </div>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                    <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                      <div className="swiper mySwiper">
                        <div className="swiper-wrapper mb-8">
                          <div className="swiper-slide">
                            <div className="relative">
                              <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                              <div
                                className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                              >
                                <div className="flex items-center gap-1 flex-wrap p-2">
                                  <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                                  <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                                  <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                                  <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                        <a href="" className="text-white"><i className="ri-heart-line ri-lg"></i></a>
                                        <a href="" className="text-white"><i className="ri-corner-up-right-line ri-lg"></i></a>
                                      </div>
                                    </div>
                                    <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="relative">
                              <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                              <div
                                className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                              >
                                <div className="flex items-center gap-1 flex-wrap p-2">
                                  <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                                  <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                                  <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                                  <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                        <a href="" className="text-white"><i className="ri-heart-line ri-lg"></i></a>
                                        <a href="" className="text-white"><i className="ri-corner-up-right-line ri-lg"></i></a>
                                      </div>
                                    </div>
                                    <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-button-next" style={{color: "white"}}></div>
                        <div className="swiper-button-prev" style={{color: "white"}}></div>
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
                                <span className="font-medium text-xs">
                                  Aktif
                                  <br />
                                  Portföy
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-5 mt-5">
                              <div className="text-center">
                                <h6 className="text-sm font-medium">35 M</h6>
                                <span className="font-medium text-xs">
                                  En Yüksek
                                  <br />
                                  Satış
                                </span>
                              </div>
                              <div className="h-5 w-[1px] bg-gray-300"></div>
                              <div className="text-center">
                                <h6 className="text-sm font-medium">145 M</h6>
                                <span className="font-medium text-xs">
                                  Toplam
                                  <br />
                                  Satış
                                </span>
                              </div>
                              <div className="h-5 w-[1px] bg-gray-300"></div>
                              <div className="text-center">
                                <h6 className="text-sm font-medium">150</h6>
                                <span className="font-medium text-xs">
                                  Toplam
                                  <br />
                                  Portföy
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-center mt-4">
                                <i className="ri-star-fill text-yellow-400 mr-2"></i>
                                4.9 Değerlendirme
                              </p>
                            </div>
                            <div className="flex items-center justify-center gap-5 mt-5">
                              <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                              <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                            </div>
                            <p className="text-gray-400 text-sm mt-6 text-center">
                              Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                      <div className="swiper mySwiper">
                        <div className="swiper-wrapper mb-8">
                          <div className="swiper-slide">
                            <div className="relative">
                              <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                              <div
                                className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                              >
                                <div className="flex items-center gap-1 flex-wrap p-2">
                                  <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                                  <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                                  <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                                  <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                        <a href="" className="text-white"><i className="ri-heart-line ri-lg"></i></a>
                                        <a href="" className="text-white"><i className="ri-corner-up-right-line ri-lg"></i></a>
                                      </div>
                                    </div>
                                    <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="relative">
                              <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                              <div
                                className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                              >
                                <div className="flex items-center gap-1 flex-wrap p-2">
                                  <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                                  <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                                  <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                                  <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                        <a href="" className="text-white"><i className="ri-heart-line ri-lg"></i></a>
                                        <a href="" className="text-white"><i className="ri-corner-up-right-line ri-lg"></i></a>
                                      </div>
                                    </div>
                                    <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-button-next" style={{color: "white"}}></div>
                        <div className="swiper-button-prev" style={{color: "white"}}></div>
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
                                <span className="font-medium text-xs">
                                  Aktif
                                  <br />
                                  Portföy
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-5 mt-5">
                              <div className="text-center">
                                <h6 className="text-sm font-medium">35 M</h6>
                                <span className="font-medium text-xs">
                                  En Yüksek
                                  <br />
                                  Satış
                                </span>
                              </div>
                              <div className="h-5 w-[1px] bg-gray-300"></div>
                              <div className="text-center">
                                <h6 className="text-sm font-medium">145 M</h6>
                                <span className="font-medium text-xs">
                                  Toplam
                                  <br />
                                  Satış
                                </span>
                              </div>
                              <div className="h-5 w-[1px] bg-gray-300"></div>
                              <div className="text-center">
                                <h6 className="text-sm font-medium">150</h6>
                                <span className="font-medium text-xs">
                                  Toplam
                                  <br />
                                  Portföy
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-center mt-4">
                                <i className="ri-star-fill text-yellow-400 mr-2"></i>
                                4.9 Değerlendirme
                              </p>
                            </div>
                            <div className="flex items-center justify-center gap-5 mt-5">
                              <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                              <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                            </div>
                            <p className="text-gray-400 text-sm mt-6 text-center">
                              Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg md:row-span-2">
                      <div className="swiper mySwiper">
                        <div className="swiper-wrapper mb-8">
                          <div className="swiper-slide">
                            <div className="relative">
                              <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                              <div
                                className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                              >
                                <div className="flex items-center gap-1 flex-wrap p-2">
                                  <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                                  <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                                  <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                                  <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                        <a href="" className="text-white"><i className="ri-heart-line ri-lg"></i></a>
                                        <a href="" className="text-white"><i className="ri-corner-up-right-line ri-lg"></i></a>
                                      </div>
                                    </div>
                                    <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="relative">
                              <img className="rounded-lg w-full md:h-[300px] h-[270px]" src="./view/img/ilan-gorsel.png" alt="" />
                              <div
                                className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                              >
                                <div className="flex items-center gap-1 flex-wrap p-2">
                                  <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                                  <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                                  <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                                  <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                        <a href="" className="text-white"><i className="ri-heart-line ri-lg"></i></a>
                                        <a href="" className="text-white"><i className="ri-corner-up-right-line ri-lg"></i></a>
                                      </div>
                                    </div>
                                    <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-button-next" style={{color: "white"}}></div>
                        <div className="swiper-button-prev" style={{color: "white"}}></div>
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
                                <span className="font-medium text-xs">
                                  Aktif
                                  <br />
                                  Portföy
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-5 mt-5">
                              <div className="text-center">
                                <h6 className="text-sm font-medium">35 M</h6>
                                <span className="font-medium text-xs">
                                  En Yüksek
                                  <br />
                                  Satış
                                </span>
                              </div>
                              <div className="h-5 w-[1px] bg-gray-300"></div>
                              <div className="text-center">
                                <h6 className="text-sm font-medium">145 M</h6>
                                <span className="font-medium text-xs">
                                  Toplam
                                  <br />
                                  Satış
                                </span>
                              </div>
                              <div className="h-5 w-[1px] bg-gray-300"></div>
                              <div className="text-center">
                                <h6 className="text-sm font-medium">150</h6>
                                <span className="font-medium text-xs">
                                  Toplam
                                  <br />
                                  Portföy
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-center mt-4">
                                <i className="ri-star-fill text-yellow-400 mr-2"></i>
                                4.9 Değerlendirme
                              </p>
                            </div>
                            <div className="flex items-center justify-center gap-5 mt-5">
                              <button className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip Et</button>
                              <button className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555 555 55 55</button>
                            </div>
                            <p className="text-gray-400 text-sm mt-6 text-center">
                              Yukarıda yer alan bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200 w-full h-[450px] rounded-lg">
                    <video src=""></video>
                  </div>
                  <div>
                    <div className="font-medium">
                      <h6>Ekibimiz</h6>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                      <div className="flex flex-col md:flex-row items-start gap-3 bg-white border rounded-lg p-3 shadow-lg">
                        <img className="md:w-[150px] w-full h-[170px] rounded-lg" src="./view/img/danisman.png" alt="" />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill text-base text-yellow-400"></i>
                              <span>4.9</span>
                              -
                              <span>(100)</span>
                            </div>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <h4 className="text-lg font-medium">Yaşar Tan</h4>
                            <h5>Gayrimenkul Danışmanı</h5>
                            <p>6 Yıl</p>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <p>
                              <span>13.000</span>
                              -
                              <span>21.000</span>
                              ₺ takım fiyat aralığı
                            </p>
                            <p>
                              Son 12 ayda
                              <span className="font-semibold">57</span>
                              proje satışı
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-3 bg-white border rounded-lg p-3 shadow-lg">
                        <img className="md:w-[150px] w-full h-[170px] rounded-lg" src="./view/img/danisman.png" alt="" />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill text-base text-yellow-400"></i>
                              <span>4.9</span>
                              -
                              <span>(100)</span>
                            </div>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <h4 className="text-lg font-medium">Yaşar Tan</h4>
                            <h5>Gayrimenkul Danışmanı</h5>
                            <p>6 Yıl</p>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <p>
                              <span>13.000</span>
                              -
                              <span>21.000</span>
                              ₺ takım fiyat aralığı
                            </p>
                            <p>
                              Son 12 ayda
                              <span className="font-semibold">57</span>
                              proje satışı
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-3 bg-white border rounded-lg p-3 shadow-lg">
                        <img className="md:w-[150px] w-full h-[170px] rounded-lg" src="./view/img/danisman.png" alt="" />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill text-base text-yellow-400"></i>
                              <span>4.9</span>
                              -
                              <span>(100)</span>
                            </div>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <h4 className="text-lg font-medium">Yaşar Tan</h4>
                            <h5>Gayrimenkul Danışmanı</h5>
                            <p>6 Yıl</p>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <p>
                              <span>13.000</span>
                              -
                              <span>21.000</span>
                              ₺ takım fiyat aralığı
                            </p>
                            <p>
                              Son 12 ayda
                              <span className="font-semibold">57</span>
                              proje satışı
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-3 bg-white border rounded-lg p-3 shadow-lg">
                        <img className="md:w-[150px] w-full h-[170px] rounded-lg" src="./view/img/danisman.png" alt="" />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill text-base text-yellow-400"></i>
                              <span>4.9</span>
                              -
                              <span>(100)</span>
                            </div>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <h4 className="text-lg font-medium">Yaşar Tan</h4>
                            <h5>Gayrimenkul Danışmanı</h5>
                            <p>6 Yıl</p>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <p>
                              <span>13.000</span>
                              -
                              <span>21.000</span>
                              ₺ takım fiyat aralığı
                            </p>
                            <p>
                              Son 12 ayda
                              <span className="font-semibold">57</span>
                              proje satışı
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-3 bg-white border rounded-lg p-3 shadow-lg">
                        <img className="md:w-[150px] w-full h-[170px] rounded-lg" src="./view/img/danisman.png" alt="" />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill text-base text-yellow-400"></i>
                              <span>4.9</span>
                              -
                              <span>(100)</span>
                            </div>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <h4 className="text-lg font-medium">Yaşar Tan</h4>
                            <h5>Gayrimenkul Danışmanı</h5>
                            <p>6 Yıl</p>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <p>
                              <span>13.000</span>
                              -
                              <span>21.000</span>
                              ₺ takım fiyat aralığı
                            </p>
                            <p>
                              Son 12 ayda
                              <span className="font-semibold">57</span>
                              proje satışı
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-3 bg-white border rounded-lg p-3 shadow-lg">
                        <img className="md:w-[150px] w-full h-[170px] rounded-lg" src="./view/img/danisman.png" alt="" />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div className="text-white text-xs bg-[#486078] py-1 px-2 rounded-full">Takım</div>
                            <div className="inline-flex gap-1">
                              <i className="ri-star-fill text-base text-yellow-400"></i>
                              <span>4.9</span>
                              -
                              <span>(100)</span>
                            </div>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <h4 className="text-lg font-medium">Yaşar Tan</h4>
                            <h5>Gayrimenkul Danışmanı</h5>
                            <p>6 Yıl</p>
                          </div>
                          <div className="space-y-0.5 mt-2">
                            <p>
                              <span>13.000</span>
                              -
                              <span>21.000</span>
                              ₺ takım fiyat aralığı
                            </p>
                            <p>
                              Son 12 ayda
                              <span className="font-semibold">57</span>
                              proje satışı
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="flex items-center justify-center mt-3 space-x-2">
                      {/* Önceki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        <span className="mr-1">&lt;</span>
                        Önceki
                      </button>
      
                      {/* Sayfa Numaraları */}
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">1</a>
                      <a href="#" className="px-3 py-1 bg-gray-300 text-gray-900 rounded">2</a>
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">3</a>
      
                      {/* Daha Fazla */}
                      <span className="px-3 py-1 text-gray-600">...</span>
      
                      {/* Sonraki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        Sonraki
                        <span className="ml-1">&gt;</span>
                      </button>
                    </nav>
                  </div>
                  <div className="py-2 px-4 border bg-white shadow-lg rounded-lg space-y-4 md:space-y-0">
                    <div className="font-medium mb-4">
                      <h6>Yaşar'ı tanıyın</h6>
                      <p>Yönetici Broker/Ortak, e-PRO</p>
                    </div>
                    <div className="accordion-content">
                      <p className="text-gray-700">
                        <span className="short-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel urna in nibh convallis fringilla. Nunc ultricies, dui eget
                          faucibus accumsan, diam massa mollis quam, eu volutpat elit leo sit amet quam. Proin fermentum efficitur sapien at vulputate.
                          Mauris elementum mi eget ante aliquet facilisis.
                        </span>
                        <span className="full-text hidden">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere libero eu justo hendrerit, eget tincidunt orci scelerisque.
                          Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus dui sed odio.
                        </span>
                      </p>
                      <button className="read-more-btn text-turuncu underline">Devamını Göster</button>
                    </div>
                    <div className="flex items-center gap-6 pt-4">
                      <a href="" className="text-turuncu">
                        <i className="ri-link ri-lg mr-2"></i>
                        Takım websitesini ziyaret edin
                      </a>
                      <div className="inline-flex gap-2">
                        <a href=""><img src="./view/img/facebook.png" alt="" /></a>
                        <a href=""><img src="./view/img/instagram.png" alt="" /></a>
                        <a href=""><img src="./view/img/youtube.png" alt="" /></a>
                        <a href=""><img src="./view/img/twitter.png" alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">Takım listeleri ve satışlar (6070)</h4>
                    <iframe
                      className="w-full h-[325px]"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.60596766684!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1741630213638!5m2!1str!2str"
                      style={{border:0}}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">Satılık (40)</h4>
                    <div className="relative overflow-x-auto rounded-lg border">
                      <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3">İlan Başlığı</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">Oda Sayısı</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">m2 (Brüt)</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">İlan Tarihi</th>
                            <th scope="col" className="px-6 py-3 text-center">Fiyat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav className="flex items-center justify-center mt-3 space-x-2">
                      {/* Önceki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        <span className="mr-1">&lt;</span>
                        Önceki
                      </button>
      
                      {/* Sayfa Numaraları */}
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">1</a>
                      <a href="#" className="px-3 py-1 bg-gray-300 text-gray-900 rounded">2</a>
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">3</a>
      
                      {/* Daha Fazla */}
                      <span className="px-3 py-1 text-gray-600">...</span>
      
                      {/* Sonraki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        Sonraki
                        <span className="ml-1">&gt;</span>
                      </button>
                    </nav>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">Kiralık (40)</h4>
                    <div className="relative overflow-x-auto rounded-lg border">
                      <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3">İlan Başlığı</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">Oda Sayısı</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">m2 (Brüt)</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">İlan Tarihi</th>
                            <th scope="col" className="px-6 py-3 text-center">Fiyat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav className="flex items-center justify-center mt-3 space-x-2">
                      {/* Önceki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        <span className="mr-1">&lt;</span>
                        Önceki
                      </button>
      
                      {/* Sayfa Numaraları */}
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">1</a>
                      <a href="#" className="px-3 py-1 bg-gray-300 text-gray-900 rounded">2</a>
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">3</a>
      
                      {/* Daha Fazla */}
                      <span className="px-3 py-1 text-gray-600">...</span>
      
                      {/* Sonraki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        Sonraki
                        <span className="ml-1">&gt;</span>
                      </button>
                    </nav>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">Satılanlar (40)</h4>
                    <div className="relative overflow-x-auto rounded-lg border">
                      <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3">İlan Başlığı</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">Oda Sayısı</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">m2 (Brüt)</th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">İlan Tarihi</th>
                            <th scope="col" className="px-6 py-3 text-center">Fiyat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                          <tr className="bg-white">
                            <th scope="row" className="md:px-6 px-3 py-2 font-medium">
                              <div className="flex items-center gap-2">
                                <img className="w-[70px] h-[70px] rounded-lg" src="./view/img/ilan-gorsel.png" alt="" />
                                <div className="md:whitespace-nowrap md:space-y-2">
                                  <h6>Yenişehir Mahallesi Nergis Konutları</h6>
                                  <span className="block">Özlüce/Bursa</span>
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">3+1</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">150</td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">10 Mart 2025</td>
                            <td className="md:px-6 px-3 py-2 md:text-center">1.500.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav className="flex items-center justify-center mt-3 space-x-2">
                      {/* Önceki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        <span className="mr-1">&lt;</span>
                        Önceki
                      </button>
      
                      {/* Sayfa Numaraları */}
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">1</a>
                      <a href="#" className="px-3 py-1 bg-gray-300 text-gray-900 rounded">2</a>
                      <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">3</a>
      
                      {/* Daha Fazla */}
                      <span className="px-3 py-1 text-gray-600">...</span>
      
                      {/* Sonraki Butonu */}
                      <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                        Sonraki
                        <span className="ml-1">&gt;</span>
                      </button>
                    </nav>
                  </div>
                </div>
                <div id="hakkimda" className="tab-content hidden pt-4 space-y-4">
                  <div className="">
                    <div className="bg-white rounded-lg border p-4 shadow">
                      <div className="flex flex-col md:flex-row items-start gap-5">
                        <img className="md:w-[400px] w-full h-[360px] object-cover rounded-lg" src="./view/img/ekip-gorsel.png" alt="" />
                        <div className="">
                          <div className="space-y-2 pb-2 border-b">
                            <h4 className="text-2xl font-semibold">Yaşar Tan</h4>
                            <div className="inline-flex items-center gap-3">
                              <div>
                                <span>4.9</span>
                                <div className="inline-flex items-center gap-2">
                                  <i className="ri-star-fill text-yellow-400 md:text-lg text-base"></i>
                                  <i className="ri-star-fill text-yellow-400 md:text-lg text-base"></i>
                                  <i className="ri-star-fill text-yellow-400 md:text-lg text-base"></i>
                                  <i className="ri-star-fill text-yellow-400 md:text-lg text-base"></i>
                                  <i className="ri-star-fill text-yellow-400 md:text-lg text-base"></i>
                                </div>
                              </div>
                              <a href="" className="md:text-sm text-xs text-turuncu">Tüm Değerlendirmeler</a>
                            </div>
                            <div className="flex items-center gap-2">
                              <p>Şirket Acentası AT'te</p>
                              <a href="" className="md:text-sm text-xs text-turuncu">Modern Ev Gayrimenkul</a>
                            </div>
                          </div>
                          <div className="space-y-1.5 mt-4 md:text-base text-sm">
                            <p>
                              <span className="font-bold mr-2">Acente Lisansı:</span>
                              092-212-0987
                            </p>
                            <p>
                              <span className="font-bold mr-2">Vergi Numarası:</span>
                              WIU-029340-3049
                            </p>
                            <p>
                              <span className="font-bold mr-2">Uzmanlık Alanlarım:</span>
                              WIU-029340-3049
                            </p>
                            <p>
                              <span className="font-bold mr-2">Uzmanlık Bölgem:</span>
                              WIU-029340-3049
                            </p>
                            <p>
                              <span className="font-bold mr-2">Hizmet Alanları:</span>
                              Chicago, Los Angeles, Miami Beach, New York, Birleşik Krallık
                            </p>
                            <p>
                              <span className="font-bold mr-2">Uzmanlık maddeleri:</span>
                              Mülkiyet yönetimi, Gayrimenkul geliştirme, Gayrimenkul ekspertasyonu, Perakende kiralama, Apartman aracılık
                            </p>
                          </div>
                          <div className="flex items-center gap-3 mt-5">
                            <button className="py-2 px-5 rounded-lg bg-turuncu text-white">E-Posta Gönder</button>
                            <button className="py-2 px-5 rounded-lg border border-turuncu text-turuncu">Ara</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="flex flex-col md:flex-row items-center justify-center md:gap-32 gap-10">
                        <div className="">
                          <h2 className="text-lg font-semibold mb-4">
                            Emlak
                            <span className="text-gray-600">Türleri</span>
                          </h2>
                          <div className="flex items-center space-x-6">
                            <svg width="100" height="100" viewBox="0 0 36 36" className="w-24 h-24">
                              <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#e5e7eb" stroke-width="3"></circle>
      
                              {/* Dilimler */}
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#f87171"
                                stroke-width="3"
                                stroke-dasharray="33 67"
                                stroke-dashoffset="0"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#60a5fa"
                                stroke-width="3"
                                stroke-dasharray="33 67"
                                stroke-dashoffset="-33"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#facc15"
                                stroke-width="3"
                                stroke-dasharray="22 78"
                                stroke-dashoffset="-66"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#34d399"
                                stroke-width="3"
                                stroke-dasharray="11 89"
                                stroke-dashoffset="-88"
                              ></circle>
                            </svg>
      
                            {/* Açıklamalar */}
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                <span>
                                  <strong>%33</strong>
                                  Bekar Aile Evi
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                                <span>
                                  <strong>%33</strong>
                                  Dükkan
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span>
                                  <strong>%22</strong>
                                  Villa
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                <span>
                                  <strong>%11</strong>
                                  Diğer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <h2 className="text-lg font-semibold mb-4">
                            Emlak
                            <span className="text-gray-600">Durumu</span>
                          </h2>
                          <div className="flex items-center space-x-6">
                            <svg width="100" height="100" viewBox="0 0 36 36" className="w-24 h-24">
                              <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#e5e7eb" stroke-width="3"></circle>
      
                              {/* Dilimler */}
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#f87171"
                                stroke-width="3"
                                stroke-dasharray="33 67"
                                stroke-dashoffset="0"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#60a5fa"
                                stroke-width="3"
                                stroke-dasharray="33 67"
                                stroke-dashoffset="-33"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#facc15"
                                stroke-width="3"
                                stroke-dasharray="22 78"
                                stroke-dashoffset="-66"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#34d399"
                                stroke-width="3"
                                stroke-dasharray="11 89"
                                stroke-dashoffset="-88"
                              ></circle>
                            </svg>
      
                            {/* Açıklamalar */}
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                <span>
                                  <strong>%33</strong>
                                  Bekar Aile Evi
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                                <span>
                                  <strong>%33</strong>
                                  Dükkan
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span>
                                  <strong>%22</strong>
                                  Villa
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                <span>
                                  <strong>%11</strong>
                                  Diğer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <h2 className="text-lg font-semibold mb-4">
                            Uzmanlık
                            <span className="text-gray-600">Bölgem</span>
                          </h2>
                          <div className="flex items-center space-x-6">
                            <svg width="100" height="100" viewBox="0 0 36 36" className="w-24 h-24">
                              <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#e5e7eb" stroke-width="3"></circle>
      
                              {/* Dilimler */}
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#f87171"
                                stroke-width="3"
                                stroke-dasharray="33 67"
                                stroke-dashoffset="0"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#60a5fa"
                                stroke-width="3"
                                stroke-dasharray="33 67"
                                stroke-dashoffset="-33"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#facc15"
                                stroke-width="3"
                                stroke-dasharray="22 78"
                                stroke-dashoffset="-66"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="15.9155"
                                fill="transparent"
                                stroke="#34d399"
                                stroke-width="3"
                                stroke-dasharray="11 89"
                                stroke-dashoffset="-88"
                              ></circle>
                            </svg>
      
                            {/* Açıklamalar */}
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                <span>
                                  <strong>%33</strong>
                                  Bekar Aile Evi
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                                <span>
                                  <strong>%33</strong>
                                  Dükkan
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span>
                                  <strong>%22</strong>
                                  Villa
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                <span>
                                  <strong>%11</strong>
                                  Diğer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex grid grid-cols-1 gap-2 items-center justify-between bg-white rounded-lg border py-4 px-10 shadow mt-10">
                      <div className="text-center">
                        <span className="block text-3xl font-bold">35</span>
                        <h6 className="text-lg">Satılık</h6>
                      </div>
                      <div className="h-10 w-[1px] bg-gray-400 hidden md:block"></div>
                      <div className="text-center">
                        <span className="block text-3xl font-bold">60</span>
                        <h6 className="text-lg">Kiralık</h6>
                      </div>
                      <div className="h-10 w-[1px] bg-gray-400 hidden md:block"></div>
                      <div className="text-center">
                        <span className="block text-3xl font-bold">95</span>
                        <h6 className="text-lg">Aktif Portföy</h6>
                      </div>
                      <div className="h-10 w-[1px] bg-gray-400 hidden md:block"></div>
                      <div className="text-center">
                        <span className="block text-3xl font-bold">150</span>
                        <h6 className="text-lg">Toplam Portföy</h6>
                      </div>
                      <div className="h-10 w-[1px] bg-gray-400 hidden md:block"></div>
                      <div className="text-center">
                        <span className="block text-3xl font-bold">35.000.000</span>
                        <h6 className="text-lg">En Yüksek Satış</h6>
                      </div>
                      <div className="h-10 w-[1px] bg-gray-400 hidden md:block"></div>
                      <div className="text-center">
                        <span className="block text-3xl font-bold">145.000.000</span>
                        <h6 className="text-lg">Toplam Satış</h6>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border p-4 shadow mt-10 space-y-4">
                      <h4 className="text-2xl font-semibold">Yaşar Tan Hakkında</h4>
                      <h3 className="text-gray-900 text-xl font-semibold">
                        GAYRİMENKULDE SİZİN AMACINIZ, BİZİM İŞİMİZDİR.. MAKSİMUM HİZMET İÇİN YANINIZDAYIM.com
                      </h3>
                      <p className="text-gray-500">
                        19.06 1977'de İzmir'de dünyaya geldi, Karşıyaka'da mutlu bir çocukluk geçirdi. Keşfetmeye meraklı, hareketli bir çocukluktan sonra
                        İzmir Özel Tevfik Fikret Lisesi'ni, ardından hep örnek aldığı inşaat mühendisi babasının izinden giderek 2000 yılında Manisa Celal
                        Bayar Üniversitesi Mühendislik Fakültesi'ni bitirdi. İş hayatına başlayana kadar lisanslı olarak Karşıyaka ve Tuborg basketbol
                        kulüplerinde forma giydi. 3 kardeşten en büyüğü olarak, bir Profesyonel Basketbol Oyuncusu erkek kardeş ile Gemi Makinaları İşletme
                        Mühendisi (nam-ı diğer Çarkçıbaşı) bir kız kardeşe ağabeylik yapmaktadır.
                      </p>
                      <p className="text-gray-500">
                        Sistem Mühendislik A.Ş.'de 1 yıl şantiye şefliği yaptıktan sonra 2002 yılında Samsun'da askerlik görevini İnşaat Emlak Komisyonu
                        Üyeliği'nde bulunarak başarı ile tamamladı. Askerlik sonrasında 1 yıl kadar daha inşaat sektöründe görev aldıktan sonra asıl yapmak
                        istediği iş dalının pazarlama ve satış sektörü olduğuna karar verip, 2003 yılında Öztüre Holding'e bağlı Pietra Kaikos markası ile
                        doğal taş sektöründe Bölge Satış Yöneticisi olarak göreve başladı. Yüksek satış ciroları sebebi ile 8 ay gibi kısa bir süre sonra
                        bölge distribütörlüğü teklifi üzerine kendi şirketini kurdu. Bir yıl sonra da 2005 yılında kendi markası olan 4444taş'ı hayata
                        geçirdi. (4444tas.com)
                      </p>
                      <p className="text-gray-500">
                        Sürekli iş fikirleri üretmeyi ve proje geliştirmeyi seven yapısından dolayı, benzer yapıdaki kişileri bulmak için 2005 Haziran
                        ayında Fikir Takımı (kısa adı ile FİTA) fikrini ortaya attı ve kurucu oyuncusu oldu. Haftada bir gün yapılan idmanlarda, fikir
                        paslaşmaları ile sürekli öğrenmeye devam etti ve geride kalmamayı hayat biçimi haline getirdi.
                      </p>
                      <p className="text-gray-500">
                        2011 yılında, marka oluşturma ve yönetimi alanındaki becerisini Dönercibaşı markasında Marka Yöneticiliği görevinde kullandı. 2012
                        yılında Milastone markasının yapılandırılması görevini tamamlayıp, 2014 yılında Sabuncu Group'taki Proje ve İş Geliştirme
                        Koordinatörlüğü görevi için Ankara'ya taşındı. 2 yılın ardından tekrar bağımsız çalışma isteğinden dolayı, tüm ticari tecrübesini,
                        hayat bilgisini ve yeteneklerini paylaşabileceğine inandığı, "RE/MAX Yatırım Ailesi" çatısı altına 2016 yılında katılıp, Stil
                        Filozofu eşi ile ortak olarak Değer Katanlar şirketini kurdu ve Yenice yöntemlerle işini geliştirmeye başladı.
                      </p>
                      <p className="text-gray-500">
                        İnşaat mühendisi olan Kerem Yenice'nin, YENİCE Team'i kurmak üzere 2018 yılında Maximum Danışman olarak "RE/MAX Proje Ailesi" ile
                        yolları birleşti. 2019 yılı haziran ayında RE/MAX Liva Ailesi'ne takımıyla beraber transfer oldu. Temmuz 2019'da İzmir'de takım
                        kurarak etki sınırlarını Ankara'nın dışına taşımış oldu. Eylül 2019'da takım sisteminin çok daha iyi çalışacağına inandığı, sektörün
                        ilk global kurumsal markası ve buz kırıcısı olan inovatif yaklaşımlı Coldwell Banker markası ile yoluna devam eden Yenice, takım
                        arkadaşları ile artık mavi ekipte..
                      </p>
                      <p className="font-light">
                        <span className="font-semibold">Dil:</span>
                        İngilizce, İspanyolca, Fransızca
                      </p>
                    </div>
                  </div>
                </div>
                <div id="ekibimiz" className="tab-content hidden pt-4">
                  <div className="inner-tabs border p-2 inline-flex items-center gap-2 rounded-lg text-sm">
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
                <div id="uzmanlik" className="tab-content hidden pt-4 space-y-4">
                  <button className="bg-mavi py-2 px-5 rounded-full text-white">Uzmanlıklarım</button>
                  <div className="border p-2 inline-flex flex-wrap items-center gap-2 rounded-lg text-sm">
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Satış</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Pazarlama</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">İpotek</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Kat İrtifakı</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">
                      Kat mülkiyeti kurma, ifraz ve tevhit
                    </button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Trampa</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Cins değişikliği</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Hibe (bağışlama).</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Taksim (paylaşım).</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Tashih (düzeltme).</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Aplikasyon.</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">
                      Harita ve belediyelerden bölge imar planı çıkarma.
                    </button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">
                      Kadastro müdürlüklerinden röperli kroki ve çap belgesi alma.
                    </button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Vergi muafiyeti belgesini alma</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">
                      Veraset vergi dairelerinden ilişik kesme veya temiz kağıdı alma
                    </button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Emlak beyannamesi düzenleme.</button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">
                      Noterden satış vaadi sözleşmesi yapma
                    </button>
                    <button className="px-1.5 py-1 text-gray-600 rounded-lg focus:outline-none border border-black">Kira akid sözleşmesi yapma</button>
                  </div>
                  <button className="bg-mavi py-2 px-5 rounded-full text-white">Eğitimlerim</button>
                  <div className="border p-2 rounded-lg space-y-2">
                    <p className="text-gray-500">Başkent Üniversitesi 100 Saatlik Uzmanlık Eğitimi</p>
                    <p className="text-gray-500">Commercial Business Club Toplantısı 16 Ekim 2021 İZMİR</p>
                    <p className="text-gray-500">Ticari Gayrimenkul Eğitimi Ankara 17-21 Ocak 2022</p>
                    <p className="text-gray-500">Commercial Business Club Üyeliği</p>
                    <p className="text-gray-500">Topluluk Önünde Konuşma Sanatı ve Sunum Becerileri 02-03 Ağustos 2023</p>
                    <p className="text-gray-500">Milyonerden Milyonere 23-24 Kasım 2023 Ankara</p>
                    <p className="text-gray-500">Commercial Business Club Üyeliği</p>
                    <p className="text-gray-500">Kars Turu Coldwell Banker Türkiye - Kıbrıs 2023 Başarı Turu</p>
                  </div>
                  <button className="bg-mavi py-2 px-5 rounded-full text-white">Sertifika ve Belgelerim</button>
                  <div className="grid grid-cols-3 gap-5">
                    <img className="border rounded-lg border-black md:h-[350px] h-[250px]" src="./view/img/sertifika1.jpeg" alt="" />
                    <img className="border rounded-lg border-black md:h-[350px] h-[250px]" src="./view/img/sertifika2.jpeg" alt="" />
                    <img className="border rounded-lg border-black md:h-[350px] h-[250px]" src="./view/img/sertifika3.jpeg" alt="" />
                  </div>
                </div>
                <div id="satilik" className="tab-content hidden pt-4">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="kiralik" className="tab-content hidden pt-4">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tapu-teslim" className="tab-content hidden pt-4">
                  <div className=" pt-4">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[470px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                          <div
                            className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                          >
                            <div></div>
                            <div className="p-2">
                              <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[470px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                          <div
                            className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                          >
                            <div></div>
                            <div className="p-2">
                              <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[470px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                          <div
                            className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                          >
                            <div></div>
                            <div className="p-2">
                              <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[470px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                          <div
                            className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                          >
                            <div></div>
                            <div className="p-2">
                              <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[470px] object-cover" src="./view/img/ekip-gorsel.png" alt="" />
                          <div
                            className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150"
                          >
                            <div></div>
                            <div className="p-2">
                              <p className="text-white text-xs">Estetik ve Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni Katalog Sizi Bekliyor!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="portfoy" className="tab-content hidden pt-4">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <div className="relative">
                        <img className="rounded-lg w-full h-[400px]" src="./view/img/ilan-gorsel2.png" alt="" />
                        <div className="absolute inset-0 bg-black/40 rounded-lg hover:opacity-0 transition-all h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-1 flex-wrap">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
                            </div>
                            <div className="inline-block py-1 px-2 text-white rounded-full bg-[#FF5A01] text-xs">
                              <span>1.330.000₺</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 mt-4 text-white text-xs">
                                  <img className="w-[15px] h-[15px]" src="./view/img/fidan.png" alt="" />
                                  <span>85 Fidan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-heart-line ri-lg"></i>
                                  </a>
                                  <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                    <i className="ri-corner-up-right-line ri-lg"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="text-white text-lg">Yıldırım Plaza</h5>
                                <p className="text-white">
                                  <span>3 Oda</span>
                                  -
                                  <span>1 Salon</span>
                                  -
                                  <span>Net 100 m² </span>
                                </p>
                              </div>
                              <p className="text-white text-sm">1+1 Lüks Daire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 ml-1 flex items-scenter justify-between">
                        <div className="flex items-center gap-2">
                          <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                          <span className="text-sm">Demiral Proje Mimarlık</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <p>
                            <i className="ri-thumb-up-line ri-lg"></i>
                            <span>100</span>
                          </p>
                          <p>
                            <i className="ri-eye-line ri-lg"></i>
                            <span>100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="yorumlar" className="tab-content hidden pt-4">
                  <div className="space-y-4">
                    <div className="space-y-4 pb-5 border-b">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-semibold">İncelemeler (999)</h4>
                        <button className="py-2 px-5 text-sm bg-turuncu rounded-lg text-white">Değerlendir</button>
                      </div>
                      <div className="inline-flex gap-5">
                        <select name="" id="" className="py-2 px-3 border rounded-lg bg-inherit">
                          <option value="" selected>En Yeniler</option>
                          <option value="" selected>Derecelendirme (Yüksekten Düşüğe)</option>
                          <option value="" selected>Derecelendirme (Düşükten Yükseğe)</option>
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
                            scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus
                            dui sed odio.
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
                            scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus
                            dui sed odio.
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
                            scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus
                            dui sed odio.
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
                <div id="ulasin" className="tab-content pt-4 hidden space-y-8">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="md:w-2/3 space-y-4 border rounded-lg p-4">
                      <h4 className="md:text-3xl text-lg font-semibold">Bizimle Temasa Geçin</h4>
                      <div className="space-y-1 md:text-base text-sm">
                        <p>Size sadece zamandan değil, birçok durumda binlerce sorundan da tasarruf sağlıyoruz.</p>
                        <p>İletişime geçmek ister misiniz? Sizden haber almayı çok isteriz.</p>
                        <p>Bize şu şekilde ulaşabilirsiniz.</p>
                      </div>
                      <div className="grid grid-cols-2 md:gap-3 gap-y-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <i className="ri-phone-fill ri-xl font-light"></i>
                            <h5 className="md:text-lg text-sm font-semibold">Telefon</h5>
                          </div>
                          <a href="" className="block md:text-base text-sm">0 (850) 850 85 85</a>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <i className="ri-smartphone-line ri-xl font-light"></i>
                            <h5 className="md:text-lg text-sm font-semibold">GSM No</h5>
                          </div>
                          <a href="" className="block md:text-base text-sm">0 (850) 850 85 85</a>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <i className="ri-mail-line ri-xl font-light"></i>
                            <h5 className="md:text-lg text-sm font-semibold">E-Posta</h5>
                          </div>
                          <a href="" className="block md:text-base text-sm">0 (850) 850 85 85</a>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <i className="ri-global-line ri-xl font-light"></i>
                            <h5 className="md:text-lg text-sm font-semibold">İnternet Sitesi</h5>
                          </div>
                          <a href="" className="block md:text-base text-sm">0 (850) 850 85 85</a>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <i className="ri-map-pin-line ri-xl font-light"></i>
                            <h5 className="md:text-lg text-sm font-semibold">Adres</h5>
                          </div>
                          <a href="" className="block md:text-base text-sm">0 (850) 850 85 85</a>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <i className="ri-time-line ri-xl font-light"></i>
                            <h5 className="md:text-lg text-sm font-semibold whitespace-nowrap">Çalışma Saatlerimiz</h5>
                          </div>
                          <a href="" className="block md:text-base text-sm">0 (850) 850 85 85</a>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 border p-2 rounded-lg space-y-2">
                      <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" name="" id="" placeholder="Ad Soyad" />
                      <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" name="" id="" placeholder="Telefon" />
                      <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full" name="" id="" placeholder="E-Posta" />
                      <textarea
                        name=""
                        className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                        placeholder="Konu"
                        id=""
                        rows="5"
                      ></textarea>
                      <div className="inline-flex items-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <p className="text-xs">Bu formu göndererek Kullanım Şartlarını kabul ediyorum.</p>
                      </div>
                      <button className="py-1.5 w-full bg-turuncu rounded-lg text-white text-sm">Şimdi Gönder</button>
                    </div>
                  </div>
                  <div>
                    <iframe
                      className="w-full h-[400px]"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.60596766684!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1741372306775!5m2!1str!2str"
                      style={{border:0}}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="lg:text-2xl font-semibold">Temsilcinin Diğer İlanları</h4>
                      <a href="" className="text-sm">Tümünü Gör</a>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[220px]" src="./view/img/urun-gorsel4.png" alt="" />
                          <div className="absolute inset-0 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-1 flex-wrap p-2">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                    <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                      <i className="ri-heart-line ri-lg"></i>
                                    </a>
                                    <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                      <i className="ri-corner-up-right-line ri-lg"></i>
                                    </a>
                                  </div>
                                </div>
                                <p className="text-white text-xs">1+1 Lüks Daire</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-3 ml-1 flex items-scenter justify-between">
                          <div className="flex items-center gap-2">
                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                            <span className="text-sm">Demiral Proje Mimarlık</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <p>
                              <i className="ri-thumb-up-line ri-lg"></i>
                              <span>100</span>
                            </p>
                            <p>
                              <i className="ri-eye-line ri-lg"></i>
                              <span>100</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[220px]" src="./view/img/urun-gorsel4.png" alt="" />
                          <div className="absolute inset-0 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-1 flex-wrap p-2">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                    <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                      <i className="ri-heart-line ri-lg"></i>
                                    </a>
                                    <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                      <i className="ri-corner-up-right-line ri-lg"></i>
                                    </a>
                                  </div>
                                </div>
                                <p className="text-white text-xs">1+1 Lüks Daire</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-3 ml-1 flex items-scenter justify-between">
                          <div className="flex items-center gap-2">
                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                            <span className="text-sm">Demiral Proje Mimarlık</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <p>
                              <i className="ri-thumb-up-line ri-lg"></i>
                              <span>100</span>
                            </p>
                            <p>
                              <i className="ri-eye-line ri-lg"></i>
                              <span>100</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 shadow-lg">
                        <div className="relative">
                          <img className="rounded-lg w-full h-[220px]" src="./view/img/urun-gorsel4.png" alt="" />
                          <div className="absolute inset-0 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-1 flex-wrap p-2">
                              <div className="text-white text-[9px] bg-[#486078] py-1 px-2 rounded-full">Fiyat Düştü</div>
                              <div className="text-white text-[9px] bg-[#364B5E] py-1 px-2 rounded-full">Apartman</div>
                              <div className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Yeni</div>
                              <div className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">3D Modelleme</div>
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
                                    <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                      <i className="ri-heart-line ri-lg"></i>
                                    </a>
                                    <a href="" className="w-[30px] h-[30px] leading-[30px] bg-white rounded-full text-center">
                                      <i className="ri-corner-up-right-line ri-lg"></i>
                                    </a>
                                  </div>
                                </div>
                                <p className="text-white text-xs">1+1 Lüks Daire</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-3 ml-1 flex items-scenter justify-between">
                          <div className="flex items-center gap-2">
                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png" alt="" />
                            <span className="text-sm">Demiral Proje Mimarlık</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <p>
                              <i className="ri-thumb-up-line ri-lg"></i>
                              <span>100</span>
                            </p>
                            <p>
                              <i className="ri-eye-line ri-lg"></i>
                              <span>100</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus
                            dui sed odio.
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
                            scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus
                            dui sed odio.
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
                            scelerisque. Proin nec purus lorem. Sed elementum, libero id sagittis condimentum, orci sapien ornare sapien, vel feugiat lectus
                            dui sed odio.
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
         <Footer></Footer>
    </>
  );
};

export default Danismandetayadvisordetail;
