import React from 'react';

const Firmafiltrelemefirmfiltering = () => {
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
              <a href="" className="py-2 px-3">Yurt Dışı</a>
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
          <section className="bg-[url('../img/banner.jpeg')] bg-cover bg-no-repeat lg:h-[300px] h-[400px] relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0">
              <h1 className="md:text-3xl text-2xl font-semibold text-center">Yerel Profesyonellerle Eşleşin</h1>
              <p className="text-lg text-white">Birkaç soruyu yanıtlayın ve size yardımcı olabilecek profesyonellerle iletişime geçmenizi sağlayalım.</p>
              <div className="flex flex-col md:flex-row items-stretch gap-4 md:text-base text-sm">
                <input type="text" className="rounded-lg py-3 px-3 bg-white focus:outline-none md:w-80 text-black" placeholder="Aradığınız Hizmeti Yazın" />
                <select name="" id="" className="py-3 px-3 bg-white text-black rounded-lg md:w-52 w-full">
                  <option value="">İl Seçiniz</option>
                </select>
                <select name="" id="" className="py-3 px-3 bg-white text-black rounded-lg md:w-52 w-full">
                  <option value="">İlçe Seçiniz</option>
                </select>
                <button className="bg-turuncu py-3 px-3 text-white rounded-lg font-semibold">Şimdi Ara</button>
              </div>
            </div>
          </section>
          <div className="bg-[#2B67A1] py-2 px-5 md:hidden flex items-center justify-center gap-10">
            <button id="open-popup" className="text-white">Filtrele</button>
            <div id="popup" className="popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-[999999]">
              <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto p-6 relative">
                <button id="close-popup" className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl">&times;</button>
      
                <div className="space-y-3">
                  <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                    <h3>Adres</h3>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>İl</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>İlçe</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Semt/Mahalle</option>
                    </select>
                  </div>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>Kategori</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>İşinde Öne Çıkanlar</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>Sertifika ve Ödüller</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>Doğrulama</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>Derecelendirme</option>
                  </select>
                  <div>
                    <button className="bg-turuncu py-2 w-full text-white rounded-lg">Ara</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-6 px-5 lg:px-0 hidden md:block">
            <p className="text-2xl font-semibold text-gray-900">Aşağıdakilerden hangisi projenize en uygun?</p>
            <div className="">
              <div className="swiper mySwiper ">
                <div className="swiper-wrapper py-4 mb-6">
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ">
                    <div className="hover:-translate-y-1 flex items-stretch transition-all duration-500">
                      <img className="h-[82px] w-[110px] rounded-l-lg" src="./view/img/filter-img.jpg" alt="" />
                      <div
                        className="bg-white shadow-lg rounded-r-lg border text-center hover:underline underline-offset-8 decoration-black transition-all delay-200 w-[160px] h-[82px]"
                      >
                        <a href="" className="inline-flex items-center justify-center h-full">Yatak Odası Tasarımı</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <section className="container mx-auto pb-10 px-5 lg:px-0">
            <div className="flex items-start gap-8">
              <div className="md:w-1/4 w-full bg-white rounded-lg border p-2 space-y-3 hidden md:block">
                <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                  <h3>Adres</h3>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>İl</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>İlçe</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>Semt/Mahalle</option>
                  </select>
                </div>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Kategori</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>İşinde Öne Çıkanlar</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Sertifika ve Ödüller</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Doğrulama</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Derecelendirme</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Memleket</option>
                </select>
                <div>
                  <button className="bg-turuncu py-2 w-full text-white rounded-lg">Ara</button>
                </div>
              </div>
              <div className="md:w-3/4 w-full pt-4 md:pt-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-3 md:gap-0">
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="inline-flex gap-2 bg-mavi rounded-full text-white py-1 px-2 text-sm">
                      Genel Müteahhitler
                      <a href=""><i className="ri-close-line ri-lg"></i></a>
                    </div>
                    <div className="inline-flex gap-2 bg-mavi rounded-full text-white py-1 px-2 text-sm">
                      Kategori Adı
                      <a href=""><i className="ri-close-line ri-lg"></i></a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border rounded-lg py-2 px-2">
                    <i className="ri-search-line ri-lg text-gray-400"></i>
                    <input
                      className="bg-inherit focus:outline-none placeholder-gray-400 w-full md:w-auto"
                      placeholder="İsim veya anahtar kelime ile ara"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="space-y-2 py-5">
                  <div className="flex flex-col md:flex-row items-start gap-5 md:py-4 py-2 border-b">
                    <div className="swiper mySwiper2 md:w-1/3 w-full">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-button-next" style={{color: "white"}}></div>
                      <div className="swiper-button-prev" style={{color: "white"}}></div>
                    </div>
                    <div className="md:w-1/2 w-full space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <img className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full" src="./view/img/pp.png" alt="" />
                        <div>
                          <h2 className="text-lg font-medium">Sanal Sahneleme Yapay Zeka</h2>
                          <div className="inline-flex items-center gap-2">
                            <p className="md:text-base text-xs">
                              <i className="ri-star-fill text-yellow-400 md:mr-2 mr-1"></i>
                              4.9 Değerlendirme
                            </p>
                            <div className="text-white text-xs bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış Kullanıcı</div>
                          </div>
                        </div>
                      </div>
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
                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum veritatis! Quae, tenetur itaque optio quod iusto veniam
                          dignissimos cupiditate assumenda incidunt et eaque quo voluptate ea dolorum libero accusantium.
                        </p>
                        <a href="" className="flex items-center justify-end text-black">
                          Devamını Oku
                          <i className="ri-arrow-right-s-line"></i>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/5 w-full">
                      <button className="py-2 px-4 border rounded-lg border-mavi text-mavi font-medium w-full">
                        <i className="ri-mail-line"></i>
                        Mesaj Gönderin
                      </button>
                      <div className="mt-4 inline-flex items-start gap-2 text-gray-600">
                        <i className="ri-map-pin-line ri-lg mt-1"></i>
                        <p>1095 Lorem ipsum dolor sit amet New Jersey 07960, Amerika Birleşik Devletleri</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start gap-5 md:py-4 py-2 border-b">
                    <div className="swiper mySwiper2 md:w-1/3 w-full">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-button-next" style={{color: "white"}}></div>
                      <div className="swiper-button-prev" style={{color: "white"}}></div>
                    </div>
                    <div className="md:w-1/2 w-full space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <img className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full" src="./view/img/pp.png" alt="" />
                        <div>
                          <h2 className="text-lg font-medium">Sanal Sahneleme Yapay Zeka</h2>
                          <div className="inline-flex items-center gap-2">
                            <p className="md:text-base text-xs">
                              <i className="ri-star-fill text-yellow-400 md:mr-2 mr-1"></i>
                              4.9 Değerlendirme
                            </p>
                            <div className="text-white text-xs bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış Kullanıcı</div>
                          </div>
                        </div>
                      </div>
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
                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum veritatis! Quae, tenetur itaque optio quod iusto veniam
                          dignissimos cupiditate assumenda incidunt et eaque quo voluptate ea dolorum libero accusantium.
                        </p>
                        <a href="" className="flex items-center justify-end text-black">
                          Devamını Oku
                          <i className="ri-arrow-right-s-line"></i>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/5 w-full">
                      <button className="py-2 px-4 border rounded-lg border-mavi text-mavi font-medium w-full">
                        <i className="ri-mail-line"></i>
                        Mesaj Gönderin
                      </button>
                      <div className="mt-4 inline-flex items-start gap-2 text-gray-600">
                        <i className="ri-map-pin-line ri-lg mt-1"></i>
                        <p>1095 Lorem ipsum dolor sit amet New Jersey 07960, Amerika Birleşik Devletleri</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start gap-5 md:py-4 py-2 border-b">
                    <div className="swiper mySwiper2 md:w-1/3 w-full">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-button-next" style={{color: "white"}}></div>
                      <div className="swiper-button-prev" style={{color: "white"}}></div>
                    </div>
                    <div className="md:w-1/2 w-full space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <img className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full" src="./view/img/pp.png" alt="" />
                        <div>
                          <h2 className="text-lg font-medium">Sanal Sahneleme Yapay Zeka</h2>
                          <div className="inline-flex items-center gap-2">
                            <p className="md:text-base text-xs">
                              <i className="ri-star-fill text-yellow-400 md:mr-2 mr-1"></i>
                              4.9 Değerlendirme
                            </p>
                            <div className="text-white text-xs bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış Kullanıcı</div>
                          </div>
                        </div>
                      </div>
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
                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum veritatis! Quae, tenetur itaque optio quod iusto veniam
                          dignissimos cupiditate assumenda incidunt et eaque quo voluptate ea dolorum libero accusantium.
                        </p>
                        <a href="" className="flex items-center justify-end text-black">
                          Devamını Oku
                          <i className="ri-arrow-right-s-line"></i>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/5 w-full">
                      <button className="py-2 px-4 border rounded-lg border-mavi text-mavi font-medium w-full">
                        <i className="ri-mail-line"></i>
                        Mesaj Gönderin
                      </button>
                      <div className="mt-4 inline-flex items-start gap-2 text-gray-600">
                        <i className="ri-map-pin-line ri-lg mt-1"></i>
                        <p>1095 Lorem ipsum dolor sit amet New Jersey 07960, Amerika Birleşik Devletleri</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start gap-5 md:py-4 py-2 border-b">
                    <div className="swiper mySwiper2 md:w-1/3 w-full">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                        <div className="swiper-slide"><img className="h-[210px] md:w-full w-auto rounded-lg" src="./view/img/services-slider.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-button-next" style={{color: "white"}}></div>
                      <div className="swiper-button-prev" style={{color: "white"}}></div>
                    </div>
                    <div className="md:w-1/2 w-full space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <img className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full" src="./view/img/pp.png" alt="" />
                        <div>
                          <h2 className="text-lg font-medium">Sanal Sahneleme Yapay Zeka</h2>
                          <div className="inline-flex items-center gap-2">
                            <p className="md:text-base text-xs">
                              <i className="ri-star-fill text-yellow-400 md:mr-2 mr-1"></i>
                              4.9 Değerlendirme
                            </p>
                            <div className="text-white text-xs bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış Kullanıcı</div>
                          </div>
                        </div>
                      </div>
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
                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum veritatis! Quae, tenetur itaque optio quod iusto veniam
                          dignissimos cupiditate assumenda incidunt et eaque quo voluptate ea dolorum libero accusantium.
                        </p>
                        <a href="" className="flex items-center justify-end text-black">
                          Devamını Oku
                          <i className="ri-arrow-right-s-line"></i>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/5 w-full">
                      <button className="py-2 px-4 border rounded-lg border-mavi text-mavi font-medium w-full">
                        <i className="ri-mail-line"></i>
                        Mesaj Gönderin
                      </button>
                      <div className="mt-4 inline-flex items-start gap-2 text-gray-600">
                        <i className="ri-map-pin-line ri-lg mt-1"></i>
                        <p>1095 Lorem ipsum dolor sit amet New Jersey 07960, Amerika Birleşik Devletleri</p>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="flex items-center justify-center mt-3 space-x-2">
                  <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                    <span className="mr-1">&lt;</span>
                    Önceki
                  </button>
      
                  <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">1</a>
                  <a href="#" className="px-3 py-1 bg-gray-300 text-gray-900 rounded">2</a>
                  <a href="#" className="px-3 py-1 text-gray-700 rounded hover:bg-gray-200">3</a>
      
                  <span className="px-3 py-1 text-gray-600">...</span>
      
                  <button className="px-3 py-1 text-gray-600 rounded hover:bg-gray-200 flex items-center">
                    Sonraki
                    <span className="ml-1">&gt;</span>
                  </button>
                </nav>
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

export default Firmafiltrelemefirmfiltering;
