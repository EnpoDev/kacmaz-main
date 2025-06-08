import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Nakliyetransport = () => {
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
          <section className="bg-[url('../img/banner.jpeg')] bg-cover bg-no-repeat lg:h-[400px] h-[300px] relative">
              <div className="absolute inset-0 bg-black/40"></div>
              <div
                  className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-white text-center px-32">
                  <h1 className="lg:text-6xl text-3xl font-extrabold">Nakliye Teklifi Al</h1>
                  <p className="lg:w-[630px] text-center font-semibold lg:text-4xl text-2xl">
                      Bir sonraki projenz için mükemmel serbest çalışanı bulun
                  </p>
              </div>
          </section>
          <div className="py-10">
              <div className="bg-white p-6 rounded-lg shadow-md w-[500px] border mx-auto">
                  <h2 className="text-xl font-bold text-center text-gray-700">TEKLİF <span className="text-turuncu">AL</span></h2>
      
                  <div className="relative w-full bg-gray-200 h-4 rounded-full mt-4">
                      <div id="progress" className="absolute h-4 bg-turuncu rounded-full" style={{width:"10%"}}></div>
                  </div>
                  <p className="text-center text-gray-600 text-sm mt-1">%<span id="progress-text">10</span></p>
      
                  <div id="step-container">
                      <div className="step step-1">
                          <p className="mt-4 text-center font-medium">Eski Ev/İşyeri Kaç Odalı?</p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-1 w-full p-2 border rounded-md">1+1</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">2+1</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">3+1</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">4+1</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">5+1</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Daha Büyük</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Sadece birkaç eşya
                                  taşınacak</button>
                          </div>
                      </div>
                      <div className="step step-2 hidden">
                          <p className="mt-4 text-center font-medium">Eski Ev/İşyeri Kaç Metrekare ?</p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-1 w-full p-2 border rounded-md">30 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">50 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">80 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">100 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">120 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">150 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">180 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">200 m2</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">300 m2</button>
                          </div>
                      </div>
                      <div className="step step-3 hidden">
                          <p className="mt-4 text-center font-medium">Paketleme İçin Yardım Gerekiyormu </p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Evet,Tüm Paketlemeyi Nakliyeci
                                  Yapsın</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Yalnız Mobilya & Beyaz Eşya
                                  Paketlensin</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Hayır,Paketlemyi Biz
                                  Yapalım</button>
                          </div>
                      </div>
      
                      <div className="step step-4 hidden">
                          <p className="mt-4 text-center font-medium">Eski Evden\İşyerinden Eşya Nasıl Taşınıcak </p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Bina Asansörü</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Merdiven - 0 ila 3 kat</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Merdiven - 5 kat veya daha
                                  fazla</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Modüler Asansör</button>
                          </div>
                          <p className="mt-4 text-center font-medium">Buraya Kamyon Kaç Metre Yaklaşabilir </p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-2 w-full p-2 border rounded-md">1 metre</button>
                              <button className="option-btn group-2 w-full p-2 border rounded-md">10 metre</button>
                              <button className="option-btn group-2 w-full p-2 border rounded-md">20 metre</button>
                              <button className="option-btn group-2 w-full p-2 border rounded-md">50+ metre</button>
                          </div>
                      </div>
                      <div className="step step-5 hidden">
                          <p className="mt-4 text-center font-medium">Nakliyecinin Bilmesi Gereken Başka Birşey Varmı ? </p>
                          <div className="mt-4 space-y-2">
                              <textarea name="" id="" className="border rounded-md w-full"></textarea>
                          </div>
                      </div>
                      <div className="step step-6 hidden">
                          <p className="mt-4 text-center font-medium">Nerden Taşınıyorsunuz(Eski Ev\İşyeri Nerde) ? </p>
                          <div className="mt-4 space-y-2">
                              <select name="" id="" className="p-2 border rounded-md bg-inherit w-full block">
                                  <option value="" selected>İl Seçiniz</option>
                              </select>
                              <select name="" id="" className="p-2 border rounded-md bg-inherit w-full block">
                                  <option value="" selected>İlçe Seçiniz</option>
                              </select>
                              <select name="" id="" className="p-2 border rounded-md bg-inherit w-full block">
                                  <option value="" selected>Mahalle Seçiniz</option>
                              </select>
                          </div>
                      </div>
                      <div className="step step-7 hidden">
                          <p className="mt-4 text-center font-medium">Nereye Taşınıyorsunuz(Yeni Ev\İşyeri Nerde) ? </p>
                          <div className="mt-4 space-y-2">
                              <select name="" id="" className="p-2 border rounded-md bg-inherit w-full block">
                                  <option value="" selected>İl Seçiniz</option>
                              </select>
                              <select name="" id="" className="p-2 border rounded-md bg-inherit w-full block">
                                  <option value="" selected>İlçe Seçiniz</option>
                              </select>
                              <select name="" id="" className="p-2 border rounded-md bg-inherit w-full block">
                                  <option value="" selected>Mahalle Seçiniz</option>
                              </select>
                          </div>
                      </div>
                      <div className="step step-8 hidden">
                          <p className="mt-4 text-center font-medium">Yeni Eve\İşyerine Eşya Nasıl Taşınıcak </p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-3 w-full p-2 border rounded-md">Bina Asansörü</button>
                              <button className="option-btn group-3 w-full p-2 border rounded-md">Merdiven - 0 ila 3 kat</button>
                              <button className="option-btn group-3 w-full p-2 border rounded-md">Merdiven - 5 kat veya daha
                                  fazla</button>
                              <button className="option-btn group-3 w-full p-2 border rounded-md">Modüler Asansör</button>
                          </div>
                          <p className="mt-4 text-center font-medium">Yeni Eve\İşyerine Kamyon Kaç Metre Yaklaşabilir </p>
                          <div className="mt-4 space-y-2">
                              <button className="option-btn group-4 w-full p-2 border rounded-md">1 metre</button>
                              <button className="option-btn group-4 w-full p-2 border rounded-md">10 metre</button>
                              <button className="option-btn group-4 w-full p-2 border rounded-md">20 metre</button>
                              <button className="option-btn group-4 w-full p-2 border rounded-md">50+ metre</button>
                          </div>
                      </div>
                      <div className="step step-9 hidden">
                          <p className="mt-4 text-center font-medium">Taşıma Tarihi</p>
                          <div className="mt-4 space-y-2">
                              <button className="date-btn w-full p-2 border rounded-md">Belli Bir Zaman(1 Ay içinde)</button>
                              <div id="date-time-container" className="hidden mt-2">
                                  <input type="datetime-local" className="w-full p-2 border rounded-md" id="date-time-input" />
                              </div>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">İki Ay İçinde</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Altı Ay İçinde</button>
                              <button className="option-btn group-1 w-full p-2 border rounded-md">Sadece Fiyat Bakıyorum</button>
                          </div>
                      </div>
      
                      <div className="step step-10 hidden">
                          <p className="mt-4 text-center font-medium">Bilgilerinizi Giriniz</p>
                          <input type="text" className="w-full p-2 border rounded-md mt-2" placeholder="Ad Soyad" />
                          <input type="email" className="w-full p-2 border rounded-md mt-2" placeholder="E-Posta" />
                          <input type="tel" className="w-full p-2 border rounded-md mt-2" placeholder="Telefon" />
                      </div>
                  </div>
      
                  <div className="flex justify-between mt-4">
                      <button id="prev-btn" className="p-2 bg-gray-400 text-white rounded-md font-medium hidden">GERİ</button>
                      <button id="next-btn" className="p-2 bg-turuncu text-white rounded-md font-medium" disabled>İLERİ</button>
                  </div>
              </div>
          </div>
      
      
      <Footer></Footer>
    </>
  );
};

export default Nakliyetransport;
