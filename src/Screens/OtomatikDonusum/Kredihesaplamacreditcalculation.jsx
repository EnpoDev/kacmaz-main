import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Kredihesaplamacreditcalculation = () => {
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
            <section className="bg-[url('../img/banner.jpeg')] bg-cover bg-no-repeat h-[500px] relative">
                <div className="absolute inset-0 bg-black/60"></div>
                <div
                    className="flex flex-col items-center justify-center gap-4 h-full relative z-50 text-center px-32">
                    <h1 className="lg:text-4xl text-xl font-extrabold text-white">Kredi Hesaplama</h1>
                    <div className="bg-white rounded-lg mx-5">
                        <div className="tabs flex items-center justify-between border-b p-5 md:gap-5 gap-2">
                            <button className="tab-btn py-2 px-4 rounded-lg w-full" data-tab="ihtiyac">İhtiyaç</button>
                            <button className="tab-btn text-gray-600 py-2 px-4 rounded-lg w-full bg-gray-100"
                                    data-tab="konut">Konut
                            </button>
                            <button className="tab-btn text-gray-600 py-2 px-4 rounded-lg w-full bg-gray-100"
                                    data-tab="tasit">Taşıt
                            </button>
                            <button className="tab-btn text-gray-600 py-2 px-4 rounded-lg w-full bg-gray-100"
                                    data-tab="kobi">Kobi
                            </button>
                        </div>

                        <div id="ihtiyac" className="tab-content p-5 md:w-[700px]">
                            <div className="flex flex-wrap items-center gap-4">
                                <input type="text"
                                       className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                                       placeholder="Kredi Tutarı"/>
                                <select name="" id=""
                                        className="py-2 px-3 border rounded-lg bg-inherit w-full text-gray-400">
                                    <option value="">Kredi Vadesi</option>
                                </select>
                                <button className="py-2 w-full bg-turuncu rounded-lg text-white">Hesapla</button>
                            </div>
                            <p className="md:w-[630px] mx-auto text-gray-400 text-center mt-4 md:text-base text-sm">Avantajlı
                                faiz oranları ile ihtiyaç
                                kredisi hesaplamak ve bankalara tüketici kredisi başvurusunda bulunmak Hangikredi.com’da
                                güvenli
                                ve ücretsiz!</p>
                        </div>

                        <div id="konut" className="tab-content md:w-[700px] p-5" style={{display: "none"}}>
                            <div className="flex flex-wrap items-center gap-4">
                                <input type="text"
                                       className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                                       placeholder="Kredi Tutarı"/>
                                <select name="" id=""
                                        className="py-2 px-3 border rounded-lg bg-inherit w-full text-gray-400">
                                    <option value="">Kredi Vadesi</option>
                                </select>
                                <button className="py-2 w-full bg-turuncu rounded-lg text-white">Hesapla</button>
                            </div>
                            <p className="md:w-[630px] mx-auto text-gray-400 text-center mt-4 md:text-base text-sm">Avantajlı
                                faiz oranları ile ihtiyaç
                                kredisi hesaplamak ve bankalara tüketici kredisi başvurusunda bulunmak Hangikredi.com’da
                                güvenli
                                ve ücretsiz!</p>
                        </div>
                        <div id="tasit" className="tab-content md:w-[700px] p-5" style={{display: "none"}}>
                            <div className="flex flex-wrap items-center gap-4">
                                <input type="text"
                                       className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                                       placeholder="Kredi Tutarı"/>
                                <select name="" id=""
                                        className="py-2 px-3 border rounded-lg bg-inherit w-full text-gray-400">
                                    <option value="">Kredi Vadesi</option>
                                </select>
                                <button className="py-2 w-full bg-turuncu rounded-lg text-white">Hesapla</button>
                            </div>
                            <p className="md:w-[630px] mx-auto text-gray-400 text-center mt-4 md:text-base text-sm">Avantajlı
                                faiz oranları ile ihtiyaç
                                kredisi hesaplamak ve bankalara tüketici kredisi başvurusunda bulunmak Hangikredi.com’da
                                güvenli
                                ve ücretsiz!</p>
                        </div>
                        <div id="kobi" className="tab-content md:w-[700px] p-5" style={{display: "none"}}>
                            <div className="flex flex-wrap items-center gap-4">
                                <input type="text"
                                       className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none w-full"
                                       placeholder="Kredi Tutarı"/>
                                <select name="" id=""
                                        className="py-2 px-3 border rounded-lg bg-inherit w-full text-gray-400">
                                    <option value="">Kredi Vadesi</option>
                                </select>
                                <button className="py-2 w-full bg-turuncu rounded-lg text-white">Hesapla</button>
                            </div>
                            <p className="md:w-[630px] mx-auto text-gray-400 text-center mt-4 md:text-base text-sm">Avantajlı
                                faiz oranları ile ihtiyaç
                                kredisi hesaplamak ve bankalara tüketici kredisi başvurusunda bulunmak Hangikredi.com’da
                                güvenli
                                ve ücretsiz!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-10 px-32">
                <h4 className="text-center md:text-3xl text-xl font-semibold">Tavsiye Ettiğimiz İhtiyaç
                    Kredileri/Finansmanları</h4>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-4">
                    <div
                        className="bg-turuncu/5 rounded-lg p-4 shadow space-y-4 border border-b-8 border-turuncu text-gray-700">
                        <img className="w-[200px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex items-center justify-between">
                            <h6 className="text-lg font-medium">İhtiyaç Kredisi</h6>

                        </div>
                        <div>
                            <h6 className="mb-1">Tutar</h6>
                            <div
                                className="flex items-center justify-between border border-gray-500 rounded-lg py-1.5 px-3">
                                <input type="text" className=" bg-inherit focus:outline-none"/>
                                <span>TL</span>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-1">Vade</h6>
                            <select name="" id=""
                                    className="py-2 px-3 border border-gray-500 rounded-lg bg-inherit w-full text-gray-400">
                                <option value="">Kredi Vadesi</option>
                            </select>
                        </div>
                        <div className="space-y-0.5">
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Faiz</h6>
                                <span>%4.68</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Aylık Taksit</h6>
                                <span>3.243,84 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Toplam Ödeme</h6>
                                <span>117.065,74 TL</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu text-center">Detay</a>
                        </div>
                    </div>
                    <div
                        className="bg-turuncu/5 rounded-lg p-4 shadow space-y-4 border border-b-8 border-turuncu text-gray-700">
                        <img className="w-[200px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex items-center justify-between">
                            <h6 className="text-lg font-medium">İhtiyaç Kredisi</h6>

                        </div>
                        <div>
                            <h6 className="mb-1">Tutar</h6>
                            <div
                                className="flex items-center justify-between border border-gray-500 rounded-lg py-1.5 px-3">
                                <input type="text" className=" bg-inherit focus:outline-none"/>
                                <span>TL</span>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-1">Vade</h6>
                            <select name="" id=""
                                    className="py-2 px-3 border border-gray-500 rounded-lg bg-inherit w-full text-gray-400">
                                <option value="">Kredi Vadesi</option>
                            </select>
                        </div>
                        <div className="space-y-0.5">
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Faiz</h6>
                                <span>%4.68</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Aylık Taksit</h6>
                                <span>3.243,84 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Toplam Ödeme</h6>
                                <span>117.065,74 TL</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu text-center">Detay</a>
                        </div>
                    </div>
                    <div
                        className="bg-turuncu/5 rounded-lg p-4 shadow space-y-4 border border-b-8 border-turuncu text-gray-700">
                        <img className="w-[200px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex items-center justify-between">
                            <h6 className="text-lg font-medium">İhtiyaç Kredisi</h6>

                        </div>
                        <div>
                            <h6 className="mb-1">Tutar</h6>
                            <div
                                className="flex items-center justify-between border border-gray-500 rounded-lg py-1.5 px-3">
                                <input type="text" className=" bg-inherit focus:outline-none"/>
                                <span>TL</span>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-1">Vade</h6>
                            <select name="" id=""
                                    className="py-2 px-3 border border-gray-500 rounded-lg bg-inherit w-full text-gray-400">
                                <option value="">Kredi Vadesi</option>
                            </select>
                        </div>
                        <div className="space-y-0.5">
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Faiz</h6>
                                <span>%4.68</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Aylık Taksit</h6>
                                <span>3.243,84 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Toplam Ödeme</h6>
                                <span>117.065,74 TL</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu text-center">Detay</a>
                        </div>
                    </div>
                    <div
                        className="bg-turuncu/5 rounded-lg p-4 shadow space-y-4 border border-b-8 border-turuncu text-gray-700">
                        <img className="w-[200px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex items-center justify-between">
                            <h6 className="text-lg font-medium">İhtiyaç Kredisi</h6>

                        </div>
                        <div>
                            <h6 className="mb-1">Tutar</h6>
                            <div
                                className="flex items-center justify-between border border-gray-500 rounded-lg py-1.5 px-3">
                                <input type="text" className=" bg-inherit focus:outline-none"/>
                                <span>TL</span>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-1">Vade</h6>
                            <select name="" id=""
                                    className="py-2 px-3 border border-gray-500 rounded-lg bg-inherit w-full text-gray-400">
                                <option value="">Kredi Vadesi</option>
                            </select>
                        </div>
                        <div className="space-y-0.5">
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Faiz</h6>
                                <span>%4.68</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Aylık Taksit</h6>
                                <span>3.243,84 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between w-full">
                                <h6 className="text-turuncu text-base font-medium">Toplam Ödeme</h6>
                                <span>117.065,74 TL</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu text-center">Detay</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-10 px-32">
                <h4 className="text-center md:text-3xl text-xl font-semibold">En Çok Tercih Edilenler</h4>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-5 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow space-y-4 border border-b-4">
                        <img className="w-[100px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-medium">50.000 TL</h6>
                            <p>12 Ay</p>
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu">Detay</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow space-y-4 border border-b-4">
                        <img className="w-[100px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-medium">50.000 TL</h6>
                            <p>12 Ay</p>
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu">Detay</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow space-y-4 border border-b-4">
                        <img className="w-[100px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-medium">50.000 TL</h6>
                            <p>12 Ay</p>
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu">Detay</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow space-y-4 border border-b-4">
                        <img className="w-[100px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-medium">50.000 TL</h6>
                            <p>12 Ay</p>
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu">Detay</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow space-y-4 border border-b-4">
                        <img className="w-[100px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-medium">50.000 TL</h6>
                            <p>12 Ay</p>
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu">Detay</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow space-y-4 border border-b-4">
                        <img className="w-[100px] mx-auto" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-medium">50.000 TL</h6>
                            <p>12 Ay</p>
                            <a href=""
                               className="text-turuncu underline underline-offset-4 decoration-turuncu">Detay</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-10 px-32">
                <h4 className="text-center md:text-3xl text-xl font-semibold">İhtiyaç Kredisi / Finansmanı Faiz ve Kâr
                    Payı Oranları - 10 Mart 2025</h4>
                <div className="relative overflow-x-auto rounded-lg border mt-5">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead
                            className="text-base uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Bankalar
                            </th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">
                                Kredi/Finansman Tutarı (min - max)
                            </th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">
                                Vade (min - max)
                            </th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">
                                Faiz/Kâr Payı (min - max)
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row"
                                className="md:px-6 px-3 py-2 font-medium">
                                <img className="w-[120px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1.000 - 250.000 TL
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1 - 36 Ay
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                %4,28 - %4,68
                            </td>
                            <td className="md:px-6 px-3 py-2 md:text-center">
                                <a href=""
                                   className="text-turuncu underline underline-offset-4 decoration-turuncu">İncele</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row"
                                className="md:px-6 px-3 py-2 font-medium">
                                <img className="w-[120px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1.000 - 250.000 TL
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1 - 36 Ay
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                %4,28 - %4,68
                            </td>
                            <td className="md:px-6 px-3 py-2 md:text-center">
                                <a href=""
                                   className="text-turuncu underline underline-offset-4 decoration-turuncu">İncele</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row"
                                className="md:px-6 px-3 py-2 font-medium">
                                <img className="w-[120px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1.000 - 250.000 TL
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1 - 36 Ay
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                %4,28 - %4,68
                            </td>
                            <td className="md:px-6 px-3 py-2 md:text-center">
                                <a href=""
                                   className="text-turuncu underline underline-offset-4 decoration-turuncu">İncele</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row"
                                className="md:px-6 px-3 py-2 font-medium">
                                <img className="w-[120px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1.000 - 250.000 TL
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1 - 36 Ay
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                %4,28 - %4,68
                            </td>
                            <td className="md:px-6 px-3 py-2 md:text-center">
                                <a href=""
                                   className="text-turuncu underline underline-offset-4 decoration-turuncu">İncele</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row"
                                className="md:px-6 px-3 py-2 font-medium">
                                <img className="w-[120px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1.000 - 250.000 TL
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1 - 36 Ay
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                %4,28 - %4,68
                            </td>
                            <td className="md:px-6 px-3 py-2 md:text-center">
                                <a href=""
                                   className="text-turuncu underline underline-offset-4 decoration-turuncu">İncele</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row"
                                className="md:px-6 px-3 py-2 font-medium">
                                <img className="w-[120px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                            </th>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1.000 - 250.000 TL
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                1 - 36 Ay
                            </td>
                            <td className="px-6 py-2 text-center hidden md:table-cell">
                                %4,28 - %4,68
                            </td>
                            <td className="md:px-6 px-3 py-2 md:text-center">
                                <a href=""
                                   className="text-turuncu underline underline-offset-4 decoration-turuncu">İncele</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Kredihesaplamacreditcalculation;
