import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Ilanfiltrelemeadfiltering = () => {
    return (
        <>
            <button id="scrollToTop"
                    className="fixed bottom-10 right-10 py-2 px-3 rounded-lg bg-turuncu text-white rounded-lgshadow-lg transition hidden z-[999999]">
                <i className="ri-arrow-up-line ri-lg"></i>
            </button>


            <Header/>

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
            <div className="bg-[#2B67A1] py-2 px-32 md:hidden flex items-center justify-center gap-10">
                <button id="open-popup" className="text-white">Filtrele</button>
                <div id="popup"
                     className="popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-[999999]">
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto p-6 relative">
                        {/* Kapatma Butonu */}
                        <button id="close-popup"
                                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl">&times;</button>

                        <div className="space-y-3">
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <a href="">Emlak</a>
                                <a href="" className="ml-3">Konut</a>
                                <a href="" className="ml-6">Kiralık (500)</a>
                                <a href="" className="ml-9">Turistik Günlük Kiralık (300)</a>
                            </div>
                            <div className="bg-[url('../img/map.png')] bg-cover bg-no-repeat py-3 text-center">
                                <a href="" className="text-center text-white">
                                    <i className="ri-map-pin-line ri-lg mr-2"></i>
                                    Harita Görünümü
                                </a>
                            </div>
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3>Adres</h3>
                                <div className="dropdown relative">
                                    <button
                                        className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                                        İl
                                        <i className="ri-arrow-down-s-line text-lg m-0"></i>
                                    </button>
                                    <div
                                        className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                        <div className="px-4 py-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                                    placeholder="İl ismi girin..."
                                                />
                                                <button className="dropdown-close"><i
                                                    className="ri-close-line text-lg"></i></button>
                                            </div>
                                            <div id="checkbox-container">
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Adalar"/>
                                                    <span className="ml-2 cursor-pointer">Adalar</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Ataşehir"/>
                                                    <span className="ml-2 cursor-pointer">Ataşehir</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Beykoz"/>
                                                    <span className="ml-2 cursor-pointer">Beykoz</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Kadıköy"/>
                                                    <span className="ml-2 cursor-pointer">Kadıköy</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Kartal"/>
                                                    <span className="ml-2 cursor-pointer">Kartal</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Maltepe"/>
                                                    <span className="ml-2 cursor-pointer">Maltepe</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Pendik"/>
                                                    <span className="ml-2 cursor-pointer">Pendik</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Sancaktepe"/>
                                                    <span className="ml-2 cursor-pointer">Sancaktepe</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Sultanbeyli"/>
                                                    <span className="ml-2 cursor-pointer">Sultanbeyli</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Şile"/>
                                                    <span className="ml-2 cursor-pointer">Şile</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox hidden"
                                                           value="Tuzla"/>
                                                    <span className="ml-2 cursor-pointer">Tuzla</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown relative">
                                    <button
                                        className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                                        İlçe
                                        <i className="ri-arrow-down-s-line text-lg m-0"></i>
                                    </button>
                                    <div
                                        className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                        <div className="px-4 py-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                                    placeholder="İl ismi girin..."
                                                />
                                                <button className="dropdown-close"><i
                                                    className="ri-close-line text-lg"></i></button>
                                            </div>
                                            <div id="checkbox-container">
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Adalar"/>
                                                    <span className="ml-2">Adalar</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Ataşehir"/>
                                                    <span className="ml-2">Ataşehir</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Beykoz"/>
                                                    <span className="ml-2">Beykoz</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Kadıköy"/>
                                                    <span className="ml-2">Kadıköy</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Kartal"/>
                                                    <span className="ml-2">Kartal</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Maltepe"/>
                                                    <span className="ml-2">Maltepe</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Pendik"/>
                                                    <span className="ml-2">Pendik</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox"
                                                           value="Sancaktepe"/>
                                                    <span className="ml-2">Sancaktepe</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox"
                                                           value="Sultanbeyli"/>
                                                    <span className="ml-2">Sultanbeyli</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Şile"/>
                                                    <span className="ml-2">Şile</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Tuzla"/>
                                                    <span className="ml-2">Tuzla</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown relative">
                                    <button
                                        className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                                        Semt/Mahalle
                                        <i className="ri-arrow-down-s-line text-lg m-0"></i>
                                    </button>
                                    <div
                                        className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                        <div className="px-4 py-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                                    placeholder="Semt/Mahalle ismi girin..."
                                                />
                                                <button className="dropdown-close"><i
                                                    className="ri-close-line text-lg"></i></button>
                                            </div>
                                            <div id="checkbox-container">
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Adalar"/>
                                                    <span className="ml-2">Adalar</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Ataşehir"/>
                                                    <span className="ml-2">Ataşehir</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Beykoz"/>
                                                    <span className="ml-2">Beykoz</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Kadıköy"/>
                                                    <span className="ml-2">Kadıköy</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Kartal"/>
                                                    <span className="ml-2">Kartal</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Maltepe"/>
                                                    <span className="ml-2">Maltepe</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Pendik"/>
                                                    <span className="ml-2">Pendik</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox"
                                                           value="Sancaktepe"/>
                                                    <span className="ml-2">Sancaktepe</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox"
                                                           value="Sultanbeyli"/>
                                                    <span className="ml-2">Sultanbeyli</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Şile"/>
                                                    <span className="ml-2">Şile</span>
                                                </label>
                                                <label className="block">
                                                    <input type="checkbox" className="ilce-checkbox" value="Tuzla"/>
                                                    <span className="ml-2">Tuzla</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3>Fiyat</h3>
                                <div className="flex items-center justify-between p-1 rounded-lg border">
                                    <button className="py-1 px-3 rounded-lg bg-[#f4f4f5] font-medium">TL</button>
                                    <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">USD</button>
                                    <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">EUR</button>
                                    <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">GBP</button>
                                </div>
                                <div className="flex gap-2">
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min TL"/>
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max TL"/>
                                </div>
                            </div>
                            <div className="input-container rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3 className="ml-1">m² (Brüt)</h3>
                                <div className="flex gap-2">
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min"/>
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max"/>
                                    <button className="bg-turuncu py-2 px-4 text-white rounded-lg hide-button">Ara
                                    </button>
                                </div>
                            </div>
                            <div className="input-container rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3 className="ml-1">m² (Net)</h3>
                                <div className="flex gap-2">
                                    <input type="text" name="min" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min"/>
                                    <input type="text" name="max" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max"/>
                                    <button className="bg-turuncu py-2 px-4 text-white rounded-lg hide-button">Ara
                                    </button>
                                </div>
                            </div>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Oda Sayısı</option>
                                <option value="1+0">Stüdyo (1+0)</option>
                                <option value="1+1">1+1</option>
                                <option value="1+1">1.5+1</option>
                                <option value="2+1">2+0</option>
                                <option value="2+1">2+1</option>
                                <option value="2+1">2.5+1</option>
                                <option value="3+1">2+2</option>
                                <option value="3+1">3+0</option>
                                <option value="3+1">3+1</option>
                                <option value="3+1">3.5+1</option>
                                <option value="3+1">3+2</option>
                                <option value="3+1">3+3</option>
                                <option value="4+1">4+0</option>
                                <option value="4+1">4+1</option>
                                <option value="4+1">4.5+1</option>
                                <option value="4+1">4.5+2</option>
                                <option value="4+1">4+2</option>
                                <option value="4+1">4+3</option>
                                <option value="4+1">4+4</option>
                                <option value="5+1">5+1</option>
                                <option value="5+1">5.5+1</option>
                                <option value="5+1">5+2</option>
                                <option value="5+1">5+3</option>
                                <option value="5+1">5+4</option>
                                <option value="6+1">6+1</option>
                                <option value="6+1">6.5+1</option>
                                <option value="6+1">6+2</option>
                                <option value="6+1">6+3</option>
                                <option value="6+1">6+4</option>
                                <option value="7+1">7+1</option>
                                <option value="7+1">7+2</option>
                                <option value="7+1">7+3</option>
                                <option value="7+1">7+4</option>
                                <option value="7+1">8+1</option>
                                <option value="7+1">8+2</option>
                                <option value="7+1">8+3</option>
                                <option value="7+1">8+4</option>
                                <option value="7+1">9+1</option>
                                <option value="7+1">9+2</option>
                                <option value="7+1">9+3</option>
                                <option value="7+1">9+4</option>
                                <option value="7+1">10+1</option>
                                <option value="7+1">10+2</option>
                                <option value="7+1">10 Üzeri</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Bina Yaşı</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5-10 Arası</option>
                                <option>11-15 Arası</option>
                                <option>16-20 Arası</option>
                                <option>21-25 Arası</option>
                                <option>26-30 Arası</option>
                                <option>31 ve üzeri</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Bulunduğu Kat</option>
                                <option value="zemin">Giriş Altı Kot 4</option>
                                <option>Giriş Altı Kot 3</option>
                                <option>Giriş Altı Kot 2</option>
                                <option>Giriş Altı Kot 1</option>
                                <option>Bodrum Kat</option>
                                <option>Zemin Kat</option>
                                <option>Bahçe Katı</option>
                                <option>Giriş Katı</option>
                                <option>Yüksek Giriş</option>
                                <option>Müstakil</option>
                                <option>Villa Tipi</option>
                                <option>Çatı Katı</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15+</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Kat Sayısı</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>30 ve üzeri</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Isıtma</option>
                                <option>Yok</option>
                                <option>Soba</option>
                                <option>Doğalgaz Sobası</option>
                                <option>Kat Kaloriferi</option>
                                <option>Merkezi</option>
                                <option>Merkezi(Payölçer)</option>
                                <option>Kombi (Doğalgaz)</option>
                                <option>Kombi (Elektrik)</option>
                                <option>Yerden Isıtma</option>
                                <option>Klime</option>
                                <option>Fancoil Ünitesi</option>
                                <option>Güneş Enerjisi</option>
                                <option>Elektrikli Radyatör</option>
                                <option>Jeotermak</option>
                                <option>Şömine</option>
                                <option>VRV</option>
                                <option>Isı Pompası</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Banyo Sayısı</option>
                                <option>Yok</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>6 ve üzeri</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Mutfak</option>
                                <option>Açık (Amerikan)</option>
                                <option>kapalı</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Tapu Durumu</option>
                                <option>Kat Mülkiyetli</option>
                                <option>Kat İrtifakılı</option>
                                <option>Hisseli Tapu</option>
                                <option>Müstakil Tapulu</option>
                                <option>Arsa Tapulu</option>
                                <option>Kooperatif Hisseli Tapu</option>
                                <option>Yurt Dışı Tapulu</option>
                                <option>Arsa Tapulu</option>
                                <option>Tapu Kaydı Yok</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Kimden</option>
                                <option>Tümü</option>
                                <option>Sahibinden</option>
                                <option>Emlak Ofisi</option>
                                <option>İnşaat Firması</option>
                                <option>Banka</option>
                                <option>Turizm İşletmesi</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Yapının Durumu</option>
                                <option>Sıfır</option>
                                <option>İkinci El</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Zemin Etüdü</option>
                                <option>Var</option>
                                <option>Yok</option>
                            </select>
                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Balkon</span>
                                </label>
                            </div>
                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Asansör</span>
                                </label>
                            </div>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Otopark</option>
                                <option>Açık Otopark</option>
                                <option>Kapalı Otopark</option>
                                <option>Açık & Kapalı Otopark</option>
                                <option>Yok</option>
                            </select>
                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Eşyalı</span>
                                </label>
                            </div>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Kullanım Durumu</option>
                                <option>Boş</option>
                                <option>Kiracılı</option>
                                <option>Mülk Sahibi</option>
                            </select>
                            <div className="px-2 pt-2 border rounded-lg checkbox-container">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer checkbox-toggle"
                                           data-target="#selectWrapper1"/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Site İçerisinde</span>
                                </label>
                                <div id="selectWrapper1" className="mt-4 mb-2 hidden space-y-2">
                                    <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                        <option value="" selected>Site Adı Seçiniz</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Krediye Uygun</span>
                                </label>
                            </div>

                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Takaslı</span>
                                </label>
                            </div>
                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Depozito</span>
                                </label>
                            </div>
                            <div className="px-2 pt-2 border rounded-lg">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div
                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                    ></div>
                                    <span className="ms-3">Kiracılı</span>
                                </label>
                            </div>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>İmar Durumu</option>
                                <option>Ada</option>
                                <option>A-Lejantlı</option>
                                <option>Arazi</option>
                                <option>Bağ&Bahçe</option>
                                <option>Depo & Antrepo</option>
                                <option>Eğitim</option>
                                <option>Enerji Depolama</option>
                                <option>Konut</option>
                                <option>Muhtelif</option>
                                <option>Özel Kullanım</option>
                                <option>Sağlık</option>
                                <option>Sanayi</option>
                                <option>Sera</option>
                                <option>Sit Alanı</option>
                                <option>Spor Alanı</option>
                                <option>Tarla</option>
                                <option>Tarla+Bağ</option>
                                <option>Ticari</option>
                                <option>Ticari+Konut</option>
                                <option>Toplu Konut</option>
                                <option>Turizm</option>
                                <option>Turizm+Konut</option>
                                <option>Turizm+Ticari</option>
                                <option>Villa</option>
                                <option>Zeytinlik</option>
                            </select>
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3 className="ml-2">m² Fiyatı</h3>

                                <div className="flex gap-2">
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min TL"/>
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max TL"/>
                                </div>
                                <div className="flex items-center justify-between p-1 rounded-lg border">
                                    <button className="py-1 px-3 rounded-lg bg-[#f4f4f5] font-medium">TL</button>
                                    <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">USD</button>
                                    <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">EUR</button>
                                    <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">GBP</button>
                                </div>
                            </div>
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3 className="ml-1">Ada No</h3>
                                <div className="flex gap-2">
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min"/>
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max"/>
                                </div>
                            </div>
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3 className="ml-1">Parsel No</h3>
                                <div className="flex gap-2">
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min"/>
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max"/>
                                </div>
                            </div>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Kaks Emsal</option>
                                <option>0,05</option>
                                <option>0,10</option>
                                <option>0,15</option>
                                <option>0,20</option>
                                <option>0,24</option>
                                <option>0,25</option>
                                <option>0,30</option>
                                <option>0,35</option>
                                <option>0,40</option>
                                <option>0,45</option>
                                <option>0,50</option>
                                <option>0,60</option>
                                <option>0,70</option>
                                <option>0,75</option>
                                <option>0,80</option>
                                <option>0,90</option>
                                <option>0,95</option>
                                <option>1,0</option>
                                <option>1,05</option>
                                <option>1,10</option>
                                <option>1,15</option>
                                <option>1,20</option>
                                <option>1,25</option>
                                <option>1,30</option>
                                <option>1,35</option>
                                <option>1,40</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Gabari</option>
                                <option>3,50</option>
                                <option>6,50</option>
                                <option>7,50</option>
                                <option>8,50</option>
                                <option>9,50</option>
                                <option>11,50</option>
                                <option>12,50</option>
                                <option>14,50</option>
                                <option>15,50</option>
                                <option>18,50</option>
                                <option>21,50</option>
                                <option>24,50</option>
                                <option>27,50</option>
                                <option>30,50</option>
                                <option>36</option>
                                <option>Serbest</option>
                                <option>Belirtilmemiş</option>
                            </select>
                            <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                                <h3 className="ml-1">Bölüm & Oda Sayısı</h3>
                                <div className="flex gap-2">
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="min"/>
                                    <input type="text" name="" id=""
                                           className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                           placeholder="max"/>
                                </div>
                            </div>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>İlan Tarihi</option>
                                <option value="">Son 24 saat</option>
                                <option value="">Son 3 Gün İçinde</option>
                                <option value="">Son 7 Gün İçinde</option>
                                <option value="">Son 15 Gün İçinde</option>
                                <option value="">Son 30 Gün İçinde</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Fotoğraf, Video</option>
                                <option value="">Videolu ilanlar</option>
                                <option value="">Klipli ilanlar</option>
                                <option value="">Sanal Tur'a sahip ilanlar</option>
                                <option value="">360 Derece Fotoğraflı ilanlar</option>
                            </select>
                            <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                <option value="" selected>Harita</option>
                                <option value="">Haritalı ilanlar</option>
                            </select>
                            <div>
                                <label htmlFor="" className="mb-1">Kelime ile filtrele</label>
                                <input type="text" className="py-2 px-3 border rounded-lg w-full bg-inherit"/>
                            </div>
                            <div className="inline-flex gap-2">
                                <input type="checkbox"/>
                                <span>İlan açıklamalarını dahil et.</span>
                            </div>
                            <div className="sticky bottom-5">
                                <button className="bg-turuncu py-2 w-full text-white rounded-lg ">Ara</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container mx-auto py-10 px-32">
                <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="md:w-1/4 bg-white rounded-lg border p-2 space-y-3 hidden md:block relative">
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <a href="">Emlak</a>
                            <a href="" className="ml-3">Konut</a>
                            <a href="" className="ml-6">Kiralık (500)</a>
                            <a href="" className="ml-9">Turistik Günlük Kiralık (300)</a>
                        </div>
                        <div className="bg-[url('../img/map.png')] bg-cover bg-no-repeat py-3 text-center">
                            <a href="" className="text-center text-white">
                                <i className="ri-map-pin-line ri-lg mr-2"></i>
                                Harita Görünümü
                            </a>
                        </div>
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3>Adres</h3>
                            <div className="dropdown relative">
                                <button
                                    className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                                    İl
                                    <i className="ri-arrow-down-s-line text-lg m-0"></i>
                                </button>
                                <div
                                    className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="px-4 py-2">
                                        <div className="flex items-center gap-2">
                                            <input type="text"
                                                   className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                                   placeholder="İl ismi girin..."/>
                                            <button className="dropdown-close"><i className="ri-close-line text-lg"></i>
                                            </button>
                                        </div>
                                        <div id="checkbox-container">
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden" value="Adalar"/>
                                                <span className="ml-2 cursor-pointer">Adalar</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden"
                                                       value="Ataşehir"/>
                                                <span className="ml-2 cursor-pointer">Ataşehir</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden" value="Beykoz"/>
                                                <span className="ml-2 cursor-pointer">Beykoz</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden"
                                                       value="Kadıköy"/>
                                                <span className="ml-2 cursor-pointer">Kadıköy</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden" value="Kartal"/>
                                                <span className="ml-2 cursor-pointer">Kartal</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden"
                                                       value="Maltepe"/>
                                                <span className="ml-2 cursor-pointer">Maltepe</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden" value="Pendik"/>
                                                <span className="ml-2 cursor-pointer">Pendik</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden"
                                                       value="Sancaktepe"/>
                                                <span className="ml-2 cursor-pointer">Sancaktepe</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden"
                                                       value="Sultanbeyli"/>
                                                <span className="ml-2 cursor-pointer">Sultanbeyli</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden" value="Şile"/>
                                                <span className="ml-2 cursor-pointer">Şile</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox hidden" value="Tuzla"/>
                                                <span className="ml-2 cursor-pointer">Tuzla</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown relative">
                                <button
                                    className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                                    İlçe
                                    <i className="ri-arrow-down-s-line text-lg m-0"></i>
                                </button>
                                <div
                                    className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="px-4 py-2">
                                        <div className="flex items-center gap-2">
                                            <input type="text"
                                                   className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                                   placeholder="İl ismi girin..."/>
                                            <button className="dropdown-close"><i className="ri-close-line text-lg"></i>
                                            </button>
                                        </div>
                                        <div id="checkbox-container">
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Adalar"/>
                                                <span className="ml-2">Adalar</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Ataşehir"/>
                                                <span className="ml-2">Ataşehir</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Beykoz"/>
                                                <span className="ml-2">Beykoz</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Kadıköy"/>
                                                <span className="ml-2">Kadıköy</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Kartal"/>
                                                <span className="ml-2">Kartal</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Maltepe"/>
                                                <span className="ml-2">Maltepe</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Pendik"/>
                                                <span className="ml-2">Pendik</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Sancaktepe"/>
                                                <span className="ml-2">Sancaktepe</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Sultanbeyli"/>
                                                <span className="ml-2">Sultanbeyli</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Şile"/>
                                                <span className="ml-2">Şile</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Tuzla"/>
                                                <span className="ml-2">Tuzla</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown relative">
                                <button
                                    className="dropdown-button py-2 px-3 border rounded-lg w-full bg-inherit flex items-center justify-between">
                                    Semt/Mahalle
                                    <i className="ri-arrow-down-s-line text-lg m-0"></i>
                                </button>
                                <div
                                    className="dropdown-menu absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="px-4 py-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                className="dropdown-search w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none mb-3"
                                                placeholder="Semt/Mahalle ismi girin..."
                                            />
                                            <button className="dropdown-close"><i className="ri-close-line text-lg"></i>
                                            </button>
                                        </div>
                                        <div id="checkbox-container">
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Adalar"/>
                                                <span className="ml-2">Adalar</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Ataşehir"/>
                                                <span className="ml-2">Ataşehir</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Beykoz"/>
                                                <span className="ml-2">Beykoz</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Kadıköy"/>
                                                <span className="ml-2">Kadıköy</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Kartal"/>
                                                <span className="ml-2">Kartal</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Maltepe"/>
                                                <span className="ml-2">Maltepe</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Pendik"/>
                                                <span className="ml-2">Pendik</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Sancaktepe"/>
                                                <span className="ml-2">Sancaktepe</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Sultanbeyli"/>
                                                <span className="ml-2">Sultanbeyli</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Şile"/>
                                                <span className="ml-2">Şile</span>
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" className="ilce-checkbox" value="Tuzla"/>
                                                <span className="ml-2">Tuzla</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3>Fiyat</h3>
                            <div className="flex items-center justify-between p-1 rounded-lg border">
                                <button className="py-1 px-3 rounded-lg bg-[#f4f4f5] font-medium">TL</button>
                                <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">USD</button>
                                <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">EUR</button>
                                <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">GBP</button>
                            </div>
                            <div className="flex gap-2">
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min TL"/>
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max TL"/>
                            </div>
                        </div>
                        <div className="input-container rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3 className="ml-1">m² (Brüt)</h3>
                            <div className="flex gap-2">
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min"/>
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max"/>
                                <button className="bg-turuncu py-2 px-4 text-white rounded-lg hide-button">Ara</button>
                            </div>
                        </div>
                        <div className="input-container rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3 className="ml-1">m² (Net)</h3>
                            <div className="flex gap-2">
                                <input type="text" name="min" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min"/>
                                <input type="text" name="max" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max"/>
                                <button className="bg-turuncu py-2 px-4 text-white rounded-lg hide-button">Ara</button>
                            </div>
                        </div>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Oda Sayısı</option>
                            <option value="1+0">Stüdyo (1+0)</option>
                            <option value="1+1">1+1</option>
                            <option value="1+1">1.5+1</option>
                            <option value="2+1">2+0</option>
                            <option value="2+1">2+1</option>
                            <option value="2+1">2.5+1</option>
                            <option value="3+1">2+2</option>
                            <option value="3+1">3+0</option>
                            <option value="3+1">3+1</option>
                            <option value="3+1">3.5+1</option>
                            <option value="3+1">3+2</option>
                            <option value="3+1">3+3</option>
                            <option value="4+1">4+0</option>
                            <option value="4+1">4+1</option>
                            <option value="4+1">4.5+1</option>
                            <option value="4+1">4.5+2</option>
                            <option value="4+1">4+2</option>
                            <option value="4+1">4+3</option>
                            <option value="4+1">4+4</option>
                            <option value="5+1">5+1</option>
                            <option value="5+1">5.5+1</option>
                            <option value="5+1">5+2</option>
                            <option value="5+1">5+3</option>
                            <option value="5+1">5+4</option>
                            <option value="6+1">6+1</option>
                            <option value="6+1">6.5+1</option>
                            <option value="6+1">6+2</option>
                            <option value="6+1">6+3</option>
                            <option value="6+1">6+4</option>
                            <option value="7+1">7+1</option>
                            <option value="7+1">7+2</option>
                            <option value="7+1">7+3</option>
                            <option value="7+1">7+4</option>
                            <option value="7+1">8+1</option>
                            <option value="7+1">8+2</option>
                            <option value="7+1">8+3</option>
                            <option value="7+1">8+4</option>
                            <option value="7+1">9+1</option>
                            <option value="7+1">9+2</option>
                            <option value="7+1">9+3</option>
                            <option value="7+1">9+4</option>
                            <option value="7+1">10+1</option>
                            <option value="7+1">10+2</option>
                            <option value="7+1">10 Üzeri</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Bina Yaşı</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5-10 Arası</option>
                            <option>11-15 Arası</option>
                            <option>16-20 Arası</option>
                            <option>21-25 Arası</option>
                            <option>26-30 Arası</option>
                            <option>31 ve üzeri</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Bulunduğu Kat</option>
                            <option value="zemin">Giriş Altı Kot 4</option>
                            <option>Giriş Altı Kot 3</option>
                            <option>Giriş Altı Kot 2</option>
                            <option>Giriş Altı Kot 1</option>
                            <option>Bodrum Kat</option>
                            <option>Zemin Kat</option>
                            <option>Bahçe Katı</option>
                            <option>Giriş Katı</option>
                            <option>Yüksek Giriş</option>
                            <option>Müstakil</option>
                            <option>Villa Tipi</option>
                            <option>Çatı Katı</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15+</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Kat Sayısı</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>30 ve üzeri</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Isıtma</option>
                            <option>Yok</option>
                            <option>Soba</option>
                            <option>Doğalgaz Sobası</option>
                            <option>Kat Kaloriferi</option>
                            <option>Merkezi</option>
                            <option>Merkezi(Payölçer)</option>
                            <option>Kombi (Doğalgaz)</option>
                            <option>Kombi (Elektrik)</option>
                            <option>Yerden Isıtma</option>
                            <option>Klime</option>
                            <option>Fancoil Ünitesi</option>
                            <option>Güneş Enerjisi</option>
                            <option>Elektrikli Radyatör</option>
                            <option>Jeotermak</option>
                            <option>Şömine</option>
                            <option>VRV</option>
                            <option>Isı Pompası</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Banyo Sayısı</option>
                            <option>Yok</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>6 ve üzeri</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Mutfak</option>
                            <option>Açık (Amerikan)</option>
                            <option>kapalı</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Tapu Durumu</option>
                            <option>Kat Mülkiyetli</option>
                            <option>Kat İrtifakılı</option>
                            <option>Hisseli Tapu</option>
                            <option>Müstakil Tapulu</option>
                            <option>Arsa Tapulu</option>
                            <option>Kooperatif Hisseli Tapu</option>
                            <option>Yurt Dışı Tapulu</option>
                            <option>Arsa Tapulu</option>
                            <option>Tapu Kaydı Yok</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Kimden</option>
                            <option>Tümü</option>
                            <option>Sahibinden</option>
                            <option>Emlak Ofisi</option>
                            <option>İnşaat Firması</option>
                            <option>Banka</option>
                            <option>Turizm İşletmesi</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Yapının Durumu</option>
                            <option>Sıfır</option>
                            <option>İkinci El</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Zemin Etüdü</option>
                            <option>Var</option>
                            <option>Yok</option>
                        </select>
                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Balkon</span>
                            </label>
                        </div>
                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Asansör</span>
                            </label>
                        </div>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Otopark</option>
                            <option>Açık Otopark</option>
                            <option>Kapalı Otopark</option>
                            <option>Açık & Kapalı Otopark</option>
                            <option>Yok</option>
                        </select>
                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Eşyalı</span>
                            </label>
                        </div>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Kullanım Durumu</option>
                            <option>Boş</option>
                            <option>Kiracılı</option>
                            <option>Mülk Sahibi</option>
                        </select>
                        <div className="px-2 pt-2 border rounded-lg checkbox-container">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer checkbox-toggle"
                                       data-target="#selectWrapper1"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Site İçerisinde</span>
                            </label>
                            <div id="selectWrapper1" className="mt-4 mb-2 hidden space-y-2">
                                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                    <option value="" selected>Site Adı Seçiniz</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Krediye Uygun</span>
                            </label>
                        </div>

                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Takaslı</span>
                            </label>
                        </div>
                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Depozito</span>
                            </label>
                        </div>
                        <div className="px-2 pt-2 border rounded-lg">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-turuncu"
                                ></div>
                                <span className="ms-3">Kiracılı</span>
                            </label>
                        </div>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>İmar Durumu</option>
                            <option>Ada</option>
                            <option>A-Lejantlı</option>
                            <option>Arazi</option>
                            <option>Bağ&Bahçe</option>
                            <option>Depo & Antrepo</option>
                            <option>Eğitim</option>
                            <option>Enerji Depolama</option>
                            <option>Konut</option>
                            <option>Muhtelif</option>
                            <option>Özel Kullanım</option>
                            <option>Sağlık</option>
                            <option>Sanayi</option>
                            <option>Sera</option>
                            <option>Sit Alanı</option>
                            <option>Spor Alanı</option>
                            <option>Tarla</option>
                            <option>Tarla+Bağ</option>
                            <option>Ticari</option>
                            <option>Ticari+Konut</option>
                            <option>Toplu Konut</option>
                            <option>Turizm</option>
                            <option>Turizm+Konut</option>
                            <option>Turizm+Ticari</option>
                            <option>Villa</option>
                            <option>Zeytinlik</option>
                        </select>
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3 className="ml-2">m² Fiyatı</h3>

                            <div className="flex gap-2">
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min TL"/>
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max TL"/>
                            </div>
                            <div className="flex items-center justify-between p-1 rounded-lg border">
                                <button className="py-1 px-3 rounded-lg bg-[#f4f4f5] font-medium">TL</button>
                                <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">USD</button>
                                <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">EUR</button>
                                <button className="py-1 px-3 rounded-lg font-medium focus:bg-[#f4f4f5]">GBP</button>
                            </div>
                        </div>
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3 className="ml-1">Ada No</h3>
                            <div className="flex gap-2">
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min"/>
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max"/>
                            </div>
                        </div>
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3 className="ml-1">Parsel No</h3>
                            <div className="flex gap-2">
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min"/>
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max"/>
                            </div>
                        </div>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Kaks Emsal</option>
                            <option>0,05</option>
                            <option>0,10</option>
                            <option>0,15</option>
                            <option>0,20</option>
                            <option>0,24</option>
                            <option>0,25</option>
                            <option>0,30</option>
                            <option>0,35</option>
                            <option>0,40</option>
                            <option>0,45</option>
                            <option>0,50</option>
                            <option>0,60</option>
                            <option>0,70</option>
                            <option>0,75</option>
                            <option>0,80</option>
                            <option>0,90</option>
                            <option>0,95</option>
                            <option>1,0</option>
                            <option>1,05</option>
                            <option>1,10</option>
                            <option>1,15</option>
                            <option>1,20</option>
                            <option>1,25</option>
                            <option>1,30</option>
                            <option>1,35</option>
                            <option>1,40</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Gabari</option>
                            <option>3,50</option>
                            <option>6,50</option>
                            <option>7,50</option>
                            <option>8,50</option>
                            <option>9,50</option>
                            <option>11,50</option>
                            <option>12,50</option>
                            <option>14,50</option>
                            <option>15,50</option>
                            <option>18,50</option>
                            <option>21,50</option>
                            <option>24,50</option>
                            <option>27,50</option>
                            <option>30,50</option>
                            <option>36</option>
                            <option>Serbest</option>
                            <option>Belirtilmemiş</option>
                        </select>
                        <div className="rounded-lg border p-2 flex flex-col gap-1 text-sm">
                            <h3 className="ml-1">Bölüm & Oda Sayısı</h3>
                            <div className="flex gap-2">
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="min"/>
                                <input type="text" name="" id=""
                                       className="py-2 px-3 border rounded-lg w-full bg-inherit placeholder-black focus:outline-none"
                                       placeholder="max"/>
                            </div>
                        </div>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>İlan Tarihi</option>
                            <option value="">Son 24 saat</option>
                            <option value="">Son 3 Gün İçinde</option>
                            <option value="">Son 7 Gün İçinde</option>
                            <option value="">Son 15 Gün İçinde</option>
                            <option value="">Son 30 Gün İçinde</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Fotoğraf, Video</option>
                            <option value="">Videolu ilanlar</option>
                            <option value="">Klipli ilanlar</option>
                            <option value="">Sanal Tur'a sahip ilanlar</option>
                            <option value="">360 Derece Fotoğraflı ilanlar</option>
                        </select>
                        <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                            <option value="" selected>Harita</option>
                            <option value="">Haritalı ilanlar</option>
                        </select>
                        <div>
                            <label htmlFor="" className="mb-1">Kelime ile filtrele</label>
                            <input type="text" className="py-2 px-3 border rounded-lg w-full bg-inherit"/>
                        </div>
                        <div className="inline-flex gap-2">
                            <input type="checkbox"/>
                            <span>İlan açıklamalarını dahil et.</span>
                        </div>
                        <div className="sticky bottom-5">
                            <button className="bg-turuncu py-2 w-full text-white rounded-lg ">Ara</button>
                        </div>
                    </div>
                    <div className="lg:w-3/4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
                            <div className="flex gap-2 lg:gap-0 flex-wrap border p-1 rounded-lg lg:text-sm text-xs">
                                <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none"
                                        data-tab="tumu">Tümü
                                </button>
                                <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none"
                                        data-tab="sahibinden">Sahibinden
                                </button>
                                <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none"
                                        data-tab="emlakofisinden">Emlak Ofisinden
                                </button>
                                <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none"
                                        data-tab="insaatfirmasindan">İnşaat Firmasından
                                </button>
                                <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none"
                                        data-tab="bankadan">Bankadan
                                </button>
                            </div>
                            <div className="inline-flex flex-col-reverse md:flex-row md:items-center gap-2">
                                <p className="whitespace-nowrap">
                                    <span>1.500</span>
                                    sonuç gösteriliyor.
                                </p>
                                <select name="" id="" className="py-2 px-3 border rounded-lg w-full bg-inherit">
                                    <option value="" selected>Gelişmiş Sıralama</option>
                                    <option value="">Fiyata göre (Önce en yüksek)</option>
                                    <option value="">Fiyata göre (Önce en düşük)</option>
                                    <option value="">Oda Sayısı (Önce en yüksek)</option>
                                    <option value="">Oda Sayısı (Önce en düşük)</option>
                                    <option value="">Tarihe göre (Önce en yeni ilan)</option>
                                    <option value="">Tarihe göre (Önce en eski ilan)</option>
                                    <option value="">m² Fiyatı (Önce en yüksek)</option>
                                    <option value="">m² Fiyatı (Önce en düşük)</option>
                                    <option value="">m² Fiyatı (Önce en düşük)</option>
                                </select>
                            </div>
                        </div>
                        <div className=" mt-5 border rounded-lg p-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Adres: Aksaray, Güzelyurt, Ihlara</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Oda Sayısı: 2</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Kat Sayısı: 5</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Bina Yaşı: 5</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Isıtma: Merkezi</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Zemin Etüdü: Var</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Asansör: Var</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <div
                                    className="filter-item flex items-center bg-mavi text-white text-sm px-3 py-1 rounded-lg">
                                    <span>Kiracılı: Evet</span>
                                    <button className="remove-filter ml-2 text-white"><i
                                        className="ri-close-circle-fill"></i></button>
                                </div>
                                <button id="clearAll" className="text-xs ml-4">Tümünü Temizle</button>
                            </div>
                        </div>
                        <div id="tumu" className="tab-content md:pt-2">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                        </div>
                        <div id="sahibinden" className="tab-content hidden pt-2">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                <div className="bg-white rounded-lg p-2.5 shadow-lg">
                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-8">
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="relative">
                                                    <img className="rounded-lg w-full h-[220px]"
                                                         src="./view/img/urun-gorsel4.png" alt=""/>
                                                    <div
                                                        className="absolute inset-0 h-full flex flex-col justify-between bg-black/40 rounded-lg hover:opacity-0 transition-all delay-150">
                                                        <div className="flex items-center gap-1 flex-wrap p-2">
                                                            <div
                                                                className="text-white text-[9px] bg-[#2B67A1] py-1 px-2 rounded-full">Doğrulanmış
                                                                Lisans
                                                            </div>
                                                            <div
                                                                className="text-white text-[9px] bg-[#537DA7] py-1 px-2 rounded-full">Hızlı
                                                                Yanıt Verir
                                                            </div>
                                                        </div>
                                                        <div className="p-2">
                                                            <div className="space-y-2">
                                                                <div
                                                                    className="flex items-center justify-end gap-2 mt-4 text-white text-xs">
                                                                    <a href=""><i className="ri-heart-3-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-corner-up-right-fill ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-mail-line ri-2x"></i></a>
                                                                    <a href=""><i
                                                                        className="ri-video-on-line ri-2x"></i></a>
                                                                </div>
                                                                <p className="text-white text-xs">Estetik ve
                                                                    Fonksiyonellikte Harika Mobilyalarla Dolu Yepyeni
                                                                    Katalog Sizi Bekliyor!</p>
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
                                            <img className="w-[24px] h-[24px] rounded-full" src="./view/img/pp.png"
                                                 alt=""/>
                                            <span className="text-sm">Demiral Proje Mimarlık</span>
                                            <div
                                                className="absolute left-0 top-5 mt-2 w-[400px] bg-white shadow-lg rounded-lg hidden menu z-50 p-2">
                                                <div className="grid grid-cols-3 gap-1">
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                    <img src="./view/img/profil.png" alt=""/>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <img className="rounded-full -mt-10 w-[100px] h-[100px]"
                                                         src="./view/img/ilan-pp.png" alt=""/>
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
                                  <br/>
                                  Portföy
                                </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-5 mt-5">
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">35 M</h6>
                                                        <span className="font-medium text-xs">
                                  En Yüksek
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">145 M</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
                                  Satış
                                </span>
                                                    </div>
                                                    <div className="h-5 w-[1px] bg-gray-300"></div>
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-medium">150</h6>
                                                        <span className="font-medium text-xs">
                                  Toplam
                                  <br/>
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
                                                    <button
                                                        className="py-2 px-5 bg-turuncu rounded-lg text-white text-sm">Takip
                                                        Et
                                                    </button>
                                                    <button
                                                        className="py-2 px-5 border border-turuncu rounded-lg text-turuncu text-sm">0555
                                                        555 55 55
                                                    </button>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-6 text-center">Yukarıda yer alan
                                                    bilgilerde Gayrimenkul Danışmanı’nın beyanları esas alınmıştır.</p>
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
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>

        </>
    );
};

export default Ilanfiltrelemeadfiltering;
