import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Kredidetaykreditdetail = () => {
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
            <section className="container mx-auto py-10 px-32">
                <div
                    className="bg-white border rounded-lg md:p-6 p-4 shadow-md flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
                    <img className="w-[150px]" src="./view/img/icon/akbank-seeklogo.png" alt=""/>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        <input type="text"
                               className="border rounded-lg py-1.5 px-3 bg-inherit focus:outline-none md:w-[230px] w-full"
                               placeholder="Kredi Tutarı"/>
                        <select name="" id=""
                                className="py-2 px-3 border rounded-lg bg-inherit md:w-[230px] w-full text-gray-400">
                            <option value="">Kredi Vadesi</option>
                        </select>
                        <button className="py-2 md:w-[230px] w-full bg-turuncu rounded-lg text-white">Yeniden Hesapla
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 mt-10">
                    <div
                        className="bg-white rounded-lg border shadow-md p-10 md:w-1/2 w-full  flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="inline-flex items-center justify-between pb-2 border-b w-full">
                                <h4 className="text-turuncu font-semibold">Faiz Oranı</h4>
                                <span>%4,28</span>
                            </div>
                            <div className="inline-flex items-center justify-between pb-2 border-b w-full">
                                <h4 className="text-turuncu font-semibold">Toplam Faiz</h4>
                                <span>66.778,05 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between pb-2 border-b w-full">
                                <h4 className="text-turuncu font-semibold">Aylık Taksit</h4>
                                <span>3.243,84 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between pb-2 border-b w-full">
                                <h4 className="text-turuncu font-semibold">Toplam Ödeme</h4>
                                <span>117.065,74 TL</span>
                            </div>
                            <div className="inline-flex items-center justify-between pb-2 border-b w-full">
                                <h4 className="text-turuncu font-semibold">Yıllık Maliyet Oranı</h4>
                                <span>%92,53</span>
                            </div>
                            <div className="inline-flex items-center justify-between pb-2 border-b w-full">
                                <h4 className="text-turuncu font-semibold">Tahsis Ücreti</h4>
                                <span>287,50 TL</span>
                            </div>
                        </div>
                        <button className="py-2 px-5 rounded-lg bg-turuncu text-white">Hemen Başvur</button>
                    </div>
                    <div className="bg-white rounded-lg border shadow-md p-10">
                        <div className="flex flex-col md:flex-row items-center">
                            <canvas id="myChart" className="w-40 h-40"></canvas>
                            <div className="ml-6 space-y-5">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-4 h-4 bg-yellow-300"></div>
                                    <div>
                                        <p className="font-semibold">Anapara</p>
                                        <p className="text-gray-600">50.000 TL</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-4 h-4 bg-yellow-500"></div>
                                    <div>
                                        <p className="font-semibold">Toplam Faiz</p>
                                        <p className="text-gray-600">66.778 TL</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-blue-500"></div>
                                    <div>
                                        <p className="font-semibold">Tahsis Ücreti</p>
                                        <p className="text-gray-600">287,50 TL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <div className="bg-white rounded-lg">
                        <div className="tabs flex items-center justify-between border p-2 md:gap-5 gap-2 rounded-lg">
                            <button className="tab-btn py-2 px-4 rounded-lg w-full" data-tab="genel">Genel Bilgiler
                            </button>
                            <button className="tab-btn text-gray-600 py-2 px-4 rounded-lg w-full bg-gray-100"
                                    data-tab="odeme">Ödeme Planı
                            </button>
                        </div>

                        <div id="genel" className="tab-content md:p-5 p-2">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-mavi text-2xl font-bold">Açıklama</h4>
                                    <p>HangiKredi finansal ürünlerin karşılaştırılması ve başvuruların kullanıcılar
                                        tarafından bankalara yapılması konusunda destek olur. Gösterilen faiz oranı
                                        banka tarafından iletilen bilgi olup, kredi notunuza ve sigorta kullanım
                                        durumunuza göre değişkenlik gösterebilmektedir. HangiKredi’nin bu kapsamda
                                        herhangi bir sorumluluğu bulunmamaktadır.</p>
                                    <p>Yasal vade sınırlamaları gereği, kredi tutarı 125.000 TL ve altında olan krediler
                                        için vade 36 ay, 125.000 TL - 250.000 TL'ye kadar 24 ay, 250.000 TL ve üzerinde
                                        olan krediler için 12 ay vade sınırlaması bulunmaktadır.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-mavi text-2xl font-bold">İstenen Belgeler</h4>
                                    <p>Akbank, faiz oranı, vade ve diğer kredi koşullarında değişiklik yapma, kredinin
                                        onaylanması ve kullandırılması hakkında son kararı verme, uygun görmediği
                                        başvuruları reddetme, gerekli gördüğü durumda ek bilgi ve belge isteme,
                                        kampanyayı durdurma ve şartlarında değişiklik yapma hakkına sahip olduğunu
                                        belirtmek isteriz.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-mavi text-2xl font-bold">Sigorta ve Masraf</h4>
                                    <p>Kredi tahsis ücreti, kredi tutarının %0,575’i kadar olup, %15 oranındaki BSMV
                                        dahildir.</p>
                                </div>
                            </div>
                        </div>

                        <div id="odeme" className="tab-content md:p-5 p-2" style={{display: "none"}}>
                            <div className="relative overflow-x-auto rounded-lg border mt-5">
                                <table className="w-full text-sm text-left rtl:text-right">
                                    <thead
                                        className="text-base uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">

                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Taksit
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Anapara
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Faiz
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            KKDF
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            BSMV
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Bakiye
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row"
                                            className="md:px-6 px-3 py-2 font-semibold">
                                            1
                                        </th>
                                        <td className="px-6 py-2 text-center">
                                            3.243,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            461,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            2.140,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            49.538,16 TL
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row"
                                            className="md:px-6 px-3 py-2 font-semibold">
                                            2
                                        </th>
                                        <td className="px-6 py-2 text-center">
                                            3.243,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            461,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            2.140,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            49.538,16 TL
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row"
                                            className="md:px-6 px-3 py-2 font-semibold">
                                            3
                                        </th>
                                        <td className="px-6 py-2 text-center">
                                            3.243,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            461,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            2.140,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            49.538,16 TL
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row"
                                            className="md:px-6 px-3 py-2 font-semibold">
                                            Toplam
                                        </th>
                                        <td className="px-6 py-2 text-center">
                                            3.243,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            461,84 TL
                                        </td>
                                        <td className="px-6 py-2 text-center">
                                            2.140,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            321,00 TL
                                        </td>
                                        <td className="md:px-6 px-3 py-2 md:text-center">
                                            49.538,16 TL
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Kredidetaykreditdetail;
