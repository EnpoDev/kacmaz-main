import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Danismanfiltrelemeadvisorfiltering = () => {
  return (
    <>
      <button id="scrollToTop" className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-turuncu text-white rounded-lgshadow-lg transition hidden z-[999999]">
            <i className="ri-arrow-up-line ri-lg"></i>
          </button>
          <Header />
          <div className="py-3 px-32 bg-[#f4f4f4] hidden md:block">
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
          <section className="bg-[url('../img/banner.jpeg')] bg-cover bg-no-repeat lg:h-[400px] h-[350px] relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0">
              <p className=" text-center font-semibold lg:text-4xl text-2xl">İyi bir ofis her şeyi değiştirir</p>
              <div className="rounded-lg bg-white/70 p-8 text-black">
                <h2 className="text-2xl font-semibold text-left">Bir Emlakçı Bulun</h2>
                <div className="flex flex-wrap items-center md:gap-4 gap-2 mt-3">
                  <button className="py-2 px-5 rounded-lg text-white bg-turuncu w-full md:w-auto">Konum</button>
                  <button className="py-2 px-5 rounded-lg bg-white focus:bg-turuncu focus:text-white w-full md:w-auto">İsim</button>
                  <div className="flex items-center justify-between py-2 px-3 bg-white rounded-lg md:w-[500px]">
                    <div className="flex items-center gap-2">
                      <i className="ri-search-line ri-lg text-gray-400"></i>
                      <input type="text" className="focus:outline-none bg-inherit" placeholder="Şehir, Mahalle veya Posta Kodu" />
                    </div>
                    <i className="ri-map-pin-line ri-lg text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto py-16 px-32">
            <div className="text-center md:px-20 md:space-y-8 space-y-4">
              <h2 className="md:text-4xl text-xl font-semibold text-turuncu">Bursa, Nilüfer’deki Emlak Ofisleri</h2>
              <p className="md:text-4xl text-lg font-medium">
                Önde gelen aracı kurumların bir milyondan fazla ofisiyle, yerel ofis pazarınızı tanır ve sizi sürecin başından sonuna kadar yönlendirebilir.
              </p>
            </div>
            <div className="bg-[#2B67A1] py-2 px-5 md:hidden flex items-center justify-center gap-10 mt-4 rounded-lg">
              <button id="open-popup" className="text-white">Filtrele</button>
              <div id="popup" className="popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-[999999]">
                <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto p-6 relative">
                  {/* Kapatma Butonu */}
                  <button id="close-popup" className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl">&times;</button>
      
                  <div className="space-y-3">
                    <h4 className="text-2xl font-semibold">Emlakçı Ara</h4>
                    <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                      <h3>Uzmanlık Bölgesi</h3>
                      <div className="dropdown relative">
                        <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                          Ülke
                          <i className="ri-arrow-down-s-line text-lg m-0"></i>
                        </button>
                        <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          <div className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                placeholder="İl ismi girin..."
                              />
                              <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                            </div>
                            <div id="checkbox-container">
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Adalar" />
                                <span className="ml-2 cursor-pointer">Adalar</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Ataşehir" />
                                <span className="ml-2 cursor-pointer">Ataşehir</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Beykoz" />
                                <span className="ml-2 cursor-pointer">Beykoz</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Kadıköy" />
                                <span className="ml-2 cursor-pointer">Kadıköy</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Kartal" />
                                <span className="ml-2 cursor-pointer">Kartal</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Maltepe" />
                                <span className="ml-2 cursor-pointer">Maltepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Pendik" />
                                <span className="ml-2 cursor-pointer">Pendik</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Sancaktepe" />
                                <span className="ml-2 cursor-pointer">Sancaktepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Sultanbeyli" />
                                <span className="ml-2 cursor-pointer">Sultanbeyli</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Şile" />
                                <span className="ml-2 cursor-pointer">Şile</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Tuzla" />
                                <span className="ml-2 cursor-pointer">Tuzla</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown relative">
                        <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                          İl
                          <i className="ri-arrow-down-s-line text-lg m-0"></i>
                        </button>
                        <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          <div className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                placeholder="İl ismi girin..."
                              />
                              <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                            </div>
                            <div id="checkbox-container">
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Adalar" />
                                <span className="ml-2 cursor-pointer">Adalar</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Ataşehir" />
                                <span className="ml-2 cursor-pointer">Ataşehir</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Beykoz" />
                                <span className="ml-2 cursor-pointer">Beykoz</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Kadıköy" />
                                <span className="ml-2 cursor-pointer">Kadıköy</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Kartal" />
                                <span className="ml-2 cursor-pointer">Kartal</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Maltepe" />
                                <span className="ml-2 cursor-pointer">Maltepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Pendik" />
                                <span className="ml-2 cursor-pointer">Pendik</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Sancaktepe" />
                                <span className="ml-2 cursor-pointer">Sancaktepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Sultanbeyli" />
                                <span className="ml-2 cursor-pointer">Sultanbeyli</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Şile" />
                                <span className="ml-2 cursor-pointer">Şile</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox hidden" value="Tuzla" />
                                <span className="ml-2 cursor-pointer">Tuzla</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown relative">
                        <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                          İlçe
                          <i className="ri-arrow-down-s-line text-lg m-0"></i>
                        </button>
                        <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          <div className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                placeholder="İl ismi girin..."
                              />
                              <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                            </div>
                            <div id="checkbox-container">
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Adalar" />
                                <span className="ml-2">Adalar</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Ataşehir" />
                                <span className="ml-2">Ataşehir</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Beykoz" />
                                <span className="ml-2">Beykoz</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Kadıköy" />
                                <span className="ml-2">Kadıköy</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Kartal" />
                                <span className="ml-2">Kartal</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Maltepe" />
                                <span className="ml-2">Maltepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Pendik" />
                                <span className="ml-2">Pendik</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Sancaktepe" />
                                <span className="ml-2">Sancaktepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Sultanbeyli" />
                                <span className="ml-2">Sultanbeyli</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Şile" />
                                <span className="ml-2">Şile</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Tuzla" />
                                <span className="ml-2">Tuzla</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown relative">
                        <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                          Semt/Mahalle
                          <i className="ri-arrow-down-s-line text-lg m-0"></i>
                        </button>
                        <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          <div className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                placeholder="Semt/Mahalle ismi girin..."
                              />
                              <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                            </div>
                            <div id="checkbox-container">
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Adalar" />
                                <span className="ml-2">Adalar</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Ataşehir" />
                                <span className="ml-2">Ataşehir</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Beykoz" />
                                <span className="ml-2">Beykoz</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Kadıköy" />
                                <span className="ml-2">Kadıköy</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Kartal" />
                                <span className="ml-2">Kartal</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Maltepe" />
                                <span className="ml-2">Maltepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Pendik" />
                                <span className="ml-2">Pendik</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Sancaktepe" />
                                <span className="ml-2">Sancaktepe</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Sultanbeyli" />
                                <span className="ml-2">Sultanbeyli</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Şile" />
                                <span className="ml-2">Şile</span>
                              </label>
                              <label className="block">
                                <input type="checkbox" className="ilce-checkbox" value="Tuzla" />
                                <span className="ml-2">Tuzla</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                      <h3>Memleket</h3>
                      <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                        <option value="" selected>İl</option>
                      </select>
                      <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                        <option value="" selected>İlçe</option>
                      </select>
                    </div>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Franchise</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Emlakçı İsmi</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Uzmanlık</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Dil</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Uzmanlık Alanı</option>
                    </select>
                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                      <option value="" selected>Değerlendirme</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-5 mt-8">
              <div className="md:w-1/4 bg-white rounded-lg border p-2 space-y-3 hidden md:block">
                <h4 className="text-2xl font-semibold">Emlakçı Ara</h4>
                <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                  <h3>Uzmanlık Bölgesi</h3>
                  <div className="dropdown relative">
                    <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                      Ülke
                      <i className="ri-arrow-down-s-line text-lg m-0"></i>
                    </button>
                    <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                            placeholder="İl ismi girin..."
                          />
                          <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                        </div>
                        <div id="checkbox-container">
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Adalar" />
                            <span className="ml-2 cursor-pointer">Adalar</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Ataşehir" />
                            <span className="ml-2 cursor-pointer">Ataşehir</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Beykoz" />
                            <span className="ml-2 cursor-pointer">Beykoz</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Kadıköy" />
                            <span className="ml-2 cursor-pointer">Kadıköy</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Kartal" />
                            <span className="ml-2 cursor-pointer">Kartal</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Maltepe" />
                            <span className="ml-2 cursor-pointer">Maltepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Pendik" />
                            <span className="ml-2 cursor-pointer">Pendik</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Sancaktepe" />
                            <span className="ml-2 cursor-pointer">Sancaktepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Sultanbeyli" />
                            <span className="ml-2 cursor-pointer">Sultanbeyli</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Şile" />
                            <span className="ml-2 cursor-pointer">Şile</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Tuzla" />
                            <span className="ml-2 cursor-pointer">Tuzla</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown relative">
                    <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                      İl
                      <i className="ri-arrow-down-s-line text-lg m-0"></i>
                    </button>
                    <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                            placeholder="İl ismi girin..."
                          />
                          <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                        </div>
                        <div id="checkbox-container">
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Adalar" />
                            <span className="ml-2 cursor-pointer">Adalar</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Ataşehir" />
                            <span className="ml-2 cursor-pointer">Ataşehir</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Beykoz" />
                            <span className="ml-2 cursor-pointer">Beykoz</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Kadıköy" />
                            <span className="ml-2 cursor-pointer">Kadıköy</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Kartal" />
                            <span className="ml-2 cursor-pointer">Kartal</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Maltepe" />
                            <span className="ml-2 cursor-pointer">Maltepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Pendik" />
                            <span className="ml-2 cursor-pointer">Pendik</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Sancaktepe" />
                            <span className="ml-2 cursor-pointer">Sancaktepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Sultanbeyli" />
                            <span className="ml-2 cursor-pointer">Sultanbeyli</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Şile" />
                            <span className="ml-2 cursor-pointer">Şile</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox hidden" value="Tuzla" />
                            <span className="ml-2 cursor-pointer">Tuzla</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown relative">
                    <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                      İlçe
                      <i className="ri-arrow-down-s-line text-lg m-0"></i>
                    </button>
                    <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                            placeholder="İl ismi girin..."
                          />
                          <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                        </div>
                        <div id="checkbox-container">
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Adalar" />
                            <span className="ml-2">Adalar</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Ataşehir" />
                            <span className="ml-2">Ataşehir</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Beykoz" />
                            <span className="ml-2">Beykoz</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Kadıköy" />
                            <span className="ml-2">Kadıköy</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Kartal" />
                            <span className="ml-2">Kartal</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Maltepe" />
                            <span className="ml-2">Maltepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Pendik" />
                            <span className="ml-2">Pendik</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Sancaktepe" />
                            <span className="ml-2">Sancaktepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Sultanbeyli" />
                            <span className="ml-2">Sultanbeyli</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Şile" />
                            <span className="ml-2">Şile</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Tuzla" />
                            <span className="ml-2">Tuzla</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown relative">
                    <button className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                      Semt/Mahalle
                      <i className="ri-arrow-down-s-line text-lg m-0"></i>
                    </button>
                    <div className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                            placeholder="Semt/Mahalle ismi girin..."
                          />
                          <button className="dropdown-close"><i className="ri-close-line text-lg"></i></button>
                        </div>
                        <div id="checkbox-container">
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Adalar" />
                            <span className="ml-2">Adalar</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Ataşehir" />
                            <span className="ml-2">Ataşehir</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Beykoz" />
                            <span className="ml-2">Beykoz</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Kadıköy" />
                            <span className="ml-2">Kadıköy</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Kartal" />
                            <span className="ml-2">Kartal</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Maltepe" />
                            <span className="ml-2">Maltepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Pendik" />
                            <span className="ml-2">Pendik</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Sancaktepe" />
                            <span className="ml-2">Sancaktepe</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Sultanbeyli" />
                            <span className="ml-2">Sultanbeyli</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Şile" />
                            <span className="ml-2">Şile</span>
                          </label>
                          <label className="block">
                            <input type="checkbox" className="ilce-checkbox" value="Tuzla" />
                            <span className="ml-2">Tuzla</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                  <h3>Memleket</h3>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>İl</option>
                  </select>
                  <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                    <option value="" selected>İlçe</option>
                  </select>
                </div>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Franchise</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Emlakçı İsmi</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Uzmanlık</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Dil</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Uzmanlık Alanı</option>
                </select>
                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                  <option value="" selected>Değerlendirme</option>
                </select>
              </div>
              <div className="md:w-3/4 w-full">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
                  <div className="bg-mavi rounded-lg"></div>
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
            </div>
          </section>
          <section className="bg-[url('../img/banner.jpeg')] bg-cover bg-no-repeat lg:h-[400px] h-[300px] relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-5 lg:px-0">
              <h1 className="lg:text-4xl text-3xl font-extrabold">Bir ofis bulma konusunda yardım alın</h1>
              <p className="lg:w-[630px] text-center font-semibold lg:text-2xl text-2xl">Sizi, pazarınızla ilgili içeriden bilgi sahibi olan bir temsilcimizle eşleştireceğiz.</p>
              <button className="py-2 px-5 rounded-lg text-white bg-turuncu w-full md:w-auto">Yerel bir temsilciyle bağlantı kurun</button>
            </div>
          </section>
          <section className="bg-mavi py-10">
            <div className="mx-auto max-w-5xl text-white p-6">
              <h2 className="text-center text-2xl font-semibold mb-6">Sıkça Sorulan Sorular</h2>
      
              <div className="space-y-4">
                {/* Soru 1 (Başlangıçta Açık) */}
                <div className="border-b border-white">
                  <button className="w-full text-left py-3 flex justify-between items-center faq-question">
                    Yakınımda iyi bir emlakçıyı nasıl bulurum?
                    <span className="text-xl transition-transform transform rotate-180">&#9662;</span>
                  </button>
                  <div className="faq-answer text-white p-3">
                    {/* Başlangıçta açık */}
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </div>
                </div>
      
                {/* Soru 2 */}
                <div className="border-b border-white">
                  <button className="w-full text-left py-3 flex justify-between items-center faq-question">
                    En iyi emlakçıyı nasıl seçerim?
                    <span className="text-xl transition-transform transform">&#9662;</span>
                  </button>
                  <div className="faq-answer hidden text-white p-3">Çevrimiçi platformlarda müşteri yorumlarına bakarak iyi bir emlakçı seçebilirsiniz.</div>
                </div>
      
                {/* Soru 3 */}
                <div className="border-b border-white">
                  <button className="w-full text-left py-3 flex justify-between items-center faq-question">
                    Komisyon ücretleri nasıl hesaplanır?
                    <span className="text-xl transition-transform transform">&#9662;</span>
                  </button>
                  <div className="faq-answer hidden text-white p-3">Komisyon ücretleri genellikle satış fiyatının belirli bir yüzdesi olarak hesaplanır.</div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center py-16 space-y-2 px-5">
            <h1 className="text-4xl font-semibold text-turuncu">Emlakçı mısınız?</h1>
            <p className="md:w-[800px] mx-auto text-lg font-medşum">
              Kaç m²m²Kaynak Merkezimizde, iş planı şablonlarından emlak pazarlamasına yönelik kapsamlı kılavuzlara kadar her türlü kaynağa göz atabilirsiniz. Henüz Pro
              Temsilci değil misiniz? KacM2’deki emlak reklamlarının daha fazla potansiyel müşteri kazanmanıza nasıl yardımcı olabileceğini keşfedin." .
            </p>
          </div>
          <Footer />
    </>
  );
};

export default Danismanfiltrelemeadvisorfiltering;
