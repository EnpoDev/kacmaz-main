import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Degerlendirmeyazwritereview = () => {
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
      
              </div>
          </section>
          <section className="container mx-auto py-12 px-32">
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
                      <div>
                          <a href=""><i className="ri-arrow-left-s-line mr-3"></i>Geri Dön</a>
                      </div>
                      <div className="space-y-4 mt-4">
                          <h4 className="md:text-2xl text-lg font-semibold text-turuncu">Deneyiminizi Başkalarıyla Paylaşın</h4>
                          <div className="inline-flex items-center gap-2 border rounded-lg bg-white shadow-lg py-2 px-3">
                              <input type="checkbox" name="" id="" />
                              <span>5 yıldızlı hızlı oran</span>
                          </div>
                          <div className="border rounded-lg bg-white shadow-lg py-2 px-3 space-y-6">
                              <h5 className="text-xl font-medium">Geri Bildirim</h5>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">Mahalle Bilgisi</h6>
                                      <p>Emlakçınız, satış, kiralama veya satın alma yaptığınız mahalle hakkında bilgi
                                          edinmenize yardımcı oldu mu?</p>
                                  </div>
                              </div>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">Deneyim</h6>
                                      <p>Emlakçınız, sizi gayrimenkul sürecinde ne kadar iyi yönlendirdi?</p>
                                  </div>
                              </div>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">Profesyonellik</h6>
                                      <p>Emlakçınız, kendisini ve mülkleri profesyonel bir şekilde tanıttı mı?</p>
                                  </div>
                              </div>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">Müzakere Becerileri</h6>
                                      <p>Emlakçınız, müzakere konusunda tavsiyede bulundu mu? Sizin adınıza başarılı bir
                                          şekilde müzakere edebildiler mi?</p>
                                  </div>
                              </div>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">Emlak Bilgisi</h6>
                                      <p>Emlakçınız, satın almayı, satmayı veya kiralamayı düşündüğünüz mülk hakkında özel
                                          bilgiye sahip miydi?</p>
                                  </div>
                              </div>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">İletişim Becerileri</h6>
                                      <p>Emlakçınız, sizi işlem hakkında güncel tuttu mu?</p>
                                  </div>
                              </div>
                              <div className="flex flex-col-reverse md:flex-row items-start gap-5">
                                  <div className="rating flex space-x-2 text-xl text-gray-300 cursor-pointer">
                                      <span className="star" data-value="1"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="2"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="3"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="4"><i className="ri-star-fill"></i></span>
                                      <span className="star" data-value="5"><i className="ri-star-fill"></i></span>
                                  </div>
                                  <div className="space-y-3">
                                      <h6 className="text-lg font-medium">İletişim Beklentileri</h6>
                                      <p>Emlakçınız, sizinle zamanında iletişime geçti mi? Randevulara zamanında geldiler mi?
                                      </p>
                                  </div>
                              </div>
                              <div>
                                  <p className="text-lg font-medium">Toplam Puan: <span>0</span></p>
                                  <p>Deneyiminiz paylaşın ve yorumunuzu yazın</p>
                              </div>
                              <textarea name="" id="" placeholder="Değerlendirmeniz"
                                  className="py-2 px-3 rounded-lg border shadow-md w-full" rows="5"></textarea>
                          </div>
                          <div className="border rounded-lg bg-white shadow-lg py-2 px-3 space-y-6">
                              <div>
                                  <h5 className="text-xl font-medium">Görsel Ekleyin</h5>
                                  <p className="text-lg font-medium">Deneyiminize ait görseller ekleyin</p>
                              </div>
                              <div className="bg-gray-50 p-6 rounded-lg w-full text-center">
                                  <div id="dropzone"
                                      className="border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                                      <div className="flex flex-col items-center gap-2 text-gray-600">
                                          <i className="ri-folder-upload-line ri-2x"></i>
                                          <p className="text-sm font-medium">Görsel yükle veya sürükle bırak</p>
                                          <p className="text-xs text-gray-400 mt-1">Maksimum dosya boyutu: 25 MB</p>
                                      </div>
                                  </div>
      
                                  {/* Gizli Dosya Input */}
                                  <input type="file" id="imageInput" accept="image/*" multiple className="hidden" />
      
                                  {/* Önizleme Alanı */}
                                  <div id="previewContainer" className="mt-4 flex flex-wrap gap-3 justify-center"></div>
                              </div>
      
                          </div>
                          <div className="border rounded-lg bg-white shadow-lg py-2 px-3 space-y-4">
                              <h5 className="text-xl font-medium">Hizmet Detayları</h5>
                              <div>
                                  <p>Bu işlemden istediğiniz değeri elde ettiniz mi?</p>
                                  <div className="flex items-center gap-2">
                                      <input type="radio" />
                                      <span>Evet</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <input type="radio" />
                                      <span>Hayır</span>
                                  </div>
                              </div>
                              <div>
                                  <p>Bu emlakçıyı tekrar kullanır mısınız?</p>
                                  <div className="flex items-center gap-2">
                                      <input type="radio" />
                                      <span>Evet</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <input type="radio" />
                                      <span>Hayır</span>
                                  </div>
                              </div>
                              <div className="space-y-2">
                                  <p>Bu emlakçıyı tekrar kullanır mısınız?</p>
                                  <input type="date"
                                      className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none md:w-[300px] w-full" />
                              </div>
                              <div className="space-y-2">
                                  <p>Bu acenta size hangi konuda yardımcı oldu?</p>
                                  <select name="" id="" className="py-2 px-3 border rounded-lg bg-inherit md:w-[300px] w-full">
                                      <option value="" selected>Seçiniz</option>
                                      <option value="">Satın Alma</option>
                                      <option value="">Satma</option>
                                      <option value="">Satın Alma ve Satma</option>
                                      <option value="">Kiralama</option>
                                  </select>
                              </div>
                              <div className="space-y-2">
                                  <p>Lütfen değerlendirmeye konu adresi ve posta kodunu giriniz.</p>
                                  <p className="text-sm">Adresi asla sitede yayınlamayız. Sadece doğrulama amaçlı kullanılır.</p>
                                  <div className="inline-flex flex-col md:flex-row gap-2 w-full">
                                      <input type="text"
                                          className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none md:w-[300px] w-full"
                                          placeholder="Adres" />
                                      <input type="text"
                                          className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none md:w-[300px] w-full"
                                          placeholder="Posta kodu" />
                                  </div>
                              </div>
                          </div>
                          <div className="inline-flex flex-col gap-4">
                              <h5 className="text-xl font-medium">İncelemenizi Doğrulayın</h5>
                              <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                                  name="" id="" placeholder="Ad Soyad" />
                              <input type="text" className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                                  name="" id="" placeholder="E-Posta" />
                              <p className="text-xs md:w-[350px]">E-posta adresiniz hiçbir üçüncü tarafla paylaşılmayacaktır. Sadece incelemenizin doğrulanması için kullanılır.</p>
                              <p className="text-xs md:w-[350px]">İnceleme yönergelerimizi okuduğunuzu ve kullanım koşullarımızı kabul ettiğinizi onaylayın.</p>
                              <button className="py-1.5 w-full bg-turuncu rounded-lg text-white text-sm">İncelemeyi Onayla</button>
                          </div>
                      </div>
                  </div>
      
              </div>
          </section>
          <Footer />
    </>
  );
};

export default Degerlendirmeyazwritereview;
