import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Kurumsaluyecorporatemember = () => {
    return (
        <>
            <Header></Header>
            <section className="container mx-auto py-5 px-32">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-2/3 w-full border rounded-lg shadow-lg bg-white lg:py-12 py-6 lg:px-10 px-5">
                        <h4 className="text-2xl font-semibolf mb-5">Kurumsal Hesap Aç</h4>
                        <div className="flex flex-wrap gap-5">
                            <button
                                className="tab-btn text-gray-500 rounded-lg focus:outline-none underline decoration-4 underline-offset-8 decoration-turuncu"
                                data-tab="broker">Broker/Danışman
                            </button>
                            <button
                                className="tab-btn text-gray-500 rounded-lg focus:outline-none underline decoration-4 underline-offset-8 "
                                data-tab="mimar">Mimar/Mühendis
                            </button>
                            <button
                                className="tab-btn text-gray-500 rounded-lg focus:outline-none underline decoration-4 underline-offset-8 "
                                data-tab="profesyonel">Profesyoneller
                            </button>
                            <button
                                className="tab-btn text-gray-500 rounded-lg focus:outline-none underline decoration-4 underline-offset-8 "
                                data-tab="satici">Satıcı Ol
                            </button>
                        </div>

                        <div id="broker" className="tab-content pt-4">
                            <form className="space-y-4 lg:grid grid-cols-4 gap-3 items-center">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mağaza Adınız <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 pt-4">
                                    <h6 className="text-sm text-turuncu font-medium">Oluşacak mağaza adresi</h6>
                                    <p className="text-sm">https://www.kacm2.com/<span
                                        className="text-turuncu">mervegayrimenkul</span>
                                    </p>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Ad Soyad</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İl</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İlçe</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mahalle</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Türü <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                        <option value="">Şahıs</option>
                                        <option value="">Limited Şirketi</option>
                                        <option value="">Anonim Şirket</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Açık Adres</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Unvanı <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Yetki Belge
                                        Numarası <i
                                            className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik
                                        Numarası</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi Kimlik
                                        No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi
                                        Dairesi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Cep Telefonu</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"
                                           placeholder="05__________"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Sabit
                                        Telefon</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">E-posta
                                        Adresi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
                                    <input type="password" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400"><a href="" className="text-turuncu">Kurumsal
                                            Hesap
                                            Sözleşmesi</a> ve eklerini kabul ediyorum.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma avantajlı tekliflerin
                                            sunulabilmesi amacıyla
                                            kişisel verilerimin işlenmesine ve paylaşılmasına açık rıza veriyorum.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma elektronik ileti gönderilmesini
                                            kabul
                                            ediyorum. </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Kişisel verilerimin işlenmesine yönelik
                                            aydınlatma
                                            metnini okudum ve anladım.</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Güçlü şifre</label>
                                    <div className="w-full h-1.5 bg-green-500 rounded-full mb-1"></div>
                                    <p className="text-xs text-gray-400">Şifreniz en az 10 karakter olmalı. 1 büyük
                                        harf, 1 küçük
                                        harf ve rakam içermelidir.</p>
                                    <button type="submit"
                                            className="mt-4 w-full bg-turuncu text-white py-2 rounded hover:bg-orange-600 transition">Giriş
                                        Yap
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8">
                                <p className="text-center">Zaten hesabın var mı?<a href=""
                                                                                   className="text-turuncu"> Giriş
                                    yap</a></p>
                            </div>
                        </div>
                        <div id="mimar" className="tab-content hidden pt-4">
                            <form className="space-y-4 lg:grid grid-cols-4 gap-3 items-center">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mağaza Adınız <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 pt-4">
                                    <h6 className="text-sm text-turuncu font-medium">Oluşacak mağaza adresi</h6>
                                    <p className="text-sm">https://www.kacm2.com/<span
                                        className="text-turuncu">mervegayrimenkul</span>
                                    </p>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Ad Soyad</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İl</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İlçe</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mahalle</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Türü <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                        <option value="">Şahıs</option>
                                        <option value="">Limited Şirketi</option>
                                        <option value="">Anonim Şirket</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Açık Adres</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Unvanı <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Yetki Belge
                                        Numarası <i
                                            className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik
                                        Numarası</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi Kimlik
                                        No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi
                                        Dairesi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Cep Telefonu</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"
                                           placeholder="05__________"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Sabit
                                        Telefon</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">E-posta
                                        Adresi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
                                    <input type="password" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400"><a href="" className="text-turuncu">Kurumsal
                                            Hesap
                                            Sözleşmesi</a> ve eklerini kabul ediyorum.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma avantajlı tekliflerin
                                            sunulabilmesi amacıyla
                                            kişisel verilerimin işlenmesine ve paylaşılmasına açık rıza veriyorum.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma elektronik ileti gönderilmesini
                                            kabul
                                            ediyorum. </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Kişisel verilerimin işlenmesine yönelik
                                            aydınlatma
                                            metnini okudum ve anladım.</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Güçlü şifre</label>
                                    <div className="w-full h-1.5 bg-green-500 rounded-full mb-1"></div>
                                    <p className="text-xs text-gray-400">Şifreniz en az 10 karakter olmalı. 1 büyük
                                        harf, 1 küçük
                                        harf ve rakam içermelidir.</p>
                                    <button type="submit"
                                            className="mt-4 w-full bg-turuncu text-white py-2 rounded hover:bg-orange-600 transition">Giriş
                                        Yap
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8">
                                <p className="text-center">Zaten hesabın var mı?<a href=""
                                                                                   className="text-turuncu"> Giriş
                                    yap</a></p>
                            </div>
                        </div>
                        <div id="profesyonel" className="tab-content hidden pt-4">
                            <form className="space-y-4 lg:grid grid-cols-4 gap-3 items-center">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mağaza Adınız <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 pt-4">
                                    <h6 className="text-sm text-turuncu font-medium">Oluşacak mağaza adresi</h6>
                                    <p className="text-sm">https://www.kacm2.com/<span
                                        className="text-turuncu">mervegayrimenkul</span>
                                    </p>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Ad Soyad</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İl</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İlçe</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mahalle</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Türü <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                        <option value="">Şahıs</option>
                                        <option value="">Limited Şirketi</option>
                                        <option value="">Anonim Şirket</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Açık Adres</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Unvanı <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Yetki Belge
                                        Numarası <i
                                            className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik
                                        Numarası</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi Kimlik
                                        No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi
                                        Dairesi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Cep Telefonu</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"
                                           placeholder="05__________"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Sabit
                                        Telefon</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">E-posta
                                        Adresi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
                                    <input type="password" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400"><a href="" className="text-turuncu">Kurumsal
                                            Hesap
                                            Sözleşmesi</a> ve eklerini kabul ediyorum.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma avantajlı tekliflerin
                                            sunulabilmesi amacıyla
                                            kişisel verilerimin işlenmesine ve paylaşılmasına açık rıza veriyorum.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma elektronik ileti gönderilmesini
                                            kabul
                                            ediyorum. </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Kişisel verilerimin işlenmesine yönelik
                                            aydınlatma
                                            metnini okudum ve anladım.</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Güçlü şifre</label>
                                    <div className="w-full h-1.5 bg-green-500 rounded-full mb-1"></div>
                                    <p className="text-xs text-gray-400">Şifreniz en az 10 karakter olmalı. 1 büyük
                                        harf, 1 küçük
                                        harf ve rakam içermelidir.</p>
                                    <button type="submit"
                                            className="mt-4 w-full bg-turuncu text-white py-2 rounded hover:bg-orange-600 transition">Giriş
                                        Yap
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8">
                                <p className="text-center">Zaten hesabın var mı?<a href=""
                                                                                   className="text-turuncu"> Giriş
                                    yap</a></p>
                            </div>
                        </div>
                        <div id="satici" className="tab-content hidden pt-4">
                            <form className="space-y-4 lg:grid grid-cols-4 gap-3 items-center">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mağaza Adınız <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 pt-4">
                                    <h6 className="text-sm text-turuncu font-medium">Oluşacak mağaza adresi</h6>
                                    <p className="text-sm">https://www.kacm2.com/<span
                                        className="text-turuncu">mervegayrimenkul</span>
                                    </p>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Ad Soyad</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İl</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İlçe</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Mahalle</label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Türü <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <select name="" id=""
                                            className="w-full p-1.5 border rounded focus:outline-none bg-inherit">
                                        <option value="" selected>Seçiniz</option>
                                        <option value="">Şahıs</option>
                                        <option value="">Limited Şirketi</option>
                                        <option value="">Anonim Şirket</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Açık Adres</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şirket Unvanı <i
                                        className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Yetki Belge
                                        Numarası <i
                                            className="ri-question-line ri-lg text-turuncu"></i></label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik
                                        Numarası</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi Kimlik
                                        No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Vergi
                                        Dairesi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Cep Telefonu</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"
                                           placeholder="05__________"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">TC Kimlik No</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Sabit
                                        Telefon</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">E-posta
                                        Adresi</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
                                    <input type="password" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div className="col-span-2 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400"><a href="" className="text-turuncu">Kurumsal
                                            Hesap
                                            Sözleşmesi</a> ve eklerini kabul ediyorum.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma avantajlı tekliflerin
                                            sunulabilmesi amacıyla
                                            kişisel verilerimin işlenmesine ve paylaşılmasına açık rıza veriyorum.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Tarafıma elektronik ileti gönderilmesini
                                            kabul
                                            ediyorum. </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <p className="text-xs text-gray-400">Kişisel verilerimin işlenmesine yönelik
                                            aydınlatma
                                            metnini okudum ve anladım.</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Güçlü şifre</label>
                                    <div className="w-full h-1.5 bg-green-500 rounded-full mb-1"></div>
                                    <p className="text-xs text-gray-400">Şifreniz en az 10 karakter olmalı. 1 büyük
                                        harf, 1 küçük
                                        harf ve rakam içermelidir.</p>
                                    <button type="submit"
                                            className="mt-4 w-full bg-turuncu text-white py-2 rounded hover:bg-orange-600 transition">Giriş
                                        Yap
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8">
                                <p className="text-center">Zaten hesabın var mı?<a href=""
                                                                                   className="text-turuncu"> Giriş
                                    yap</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="bg-mavi w-full lg:h-[700px] h-[400px] rounded-lg">

                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="px-3 py-5 border bg-white rounded-lg shadow-lg space-y-1">
                                <i className="ri-eye-line ri-xl text-turuncu"></i>
                                <h4 className="text-2xl font-semibold">210 Milyon</h4>
                                <p>Aylık Ziyaret</p>
                            </div>
                            <div className="px-3 py-5 border bg-white rounded-lg shadow-lg space-y-1">
                                <i className="ri-eye-line ri-xl text-turuncu"></i>
                                <h4 className="text-2xl font-semibold">210 Milyon</h4>
                                <p>Aylık Ziyaret</p>
                            </div>
                            <div className="px-3 py-5 border bg-white rounded-lg shadow-lg space-y-1">
                                <i className="ri-eye-line ri-xl text-turuncu"></i>
                                <h4 className="text-2xl font-semibold">210 Milyon</h4>
                                <p>Aylık Ziyaret</p>
                            </div>
                            <div className="px-3 py-5 border bg-white rounded-lg shadow-lg space-y-1">
                                <i className="ri-eye-line ri-xl text-turuncu"></i>
                                <h4 className="text-2xl font-semibold">210 Milyon</h4>
                                <p>Aylık Ziyaret</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Kurumsaluyecorporatemember;
