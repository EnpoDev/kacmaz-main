import React from 'react';
import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";

const Loginregister = () => {
    return (
        <>
            <Header></Header>
            <section className="container mx-auto py-5 px-32">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 w-full border rounded-lg shadow-lg bg-white lg:py-12 py-6 lg:px-10 px-5">
                        <div className="flex w-full border p-1 rounded-lg">
                            <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none w-full"
                                    data-tab="login">Giriş Yap
                            </button>
                            <button className="tab-btn px-4 py-1 text-gray-600 rounded-lg focus:outline-none w-full"
                                    data-tab="register">Kayıt Ol
                            </button>
                        </div>

                        {/* Giriş Yap Formu */}
                        <div id="login" className="tab-content pt-4">
                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">E-posta</label>
                                    <input type="email" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
                                    <input type="password" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <a href="" className="block text-right text-sm">Şifremi Unuttum</a>

                                <button type="submit"
                                        className="mt-4 w-full bg-turuncu text-white py-2 rounded hover:bg-orange-600 transition">Giriş
                                    Yap
                                </button>
                            </form>
                            <div className="mt-4">
                                <p className="text-center">Henüz hesabın yok mu? <a href="" className="text-turuncu">Hesap
                                    aç</a></p>
                                <div className="flex items-center justify-between mt-4 gap-10">
                                    <div className="h-0.5 lg:w-40 w-full bg-gray-300"></div>
                                    <span className="whitespace-nowrap">ya da</span>
                                    <div className="h-0.5 lg:w-40 w-full bg-gray-300"></div>
                                </div>
                                <div className="flex items-center justify-center gap-6 mt-4">
                                    <a href=""><img className="w-[26px] h-[26px]" src="./view/img/facebook.png" alt=""/></a>
                                    <a href=""><img className="w-[26px] h-[26px]" src="./view/img/google.png"
                                                    alt=""/></a>
                                    <a href=""><img className="w-[26px] h-[26px]" src="./view/img/apple.png"
                                                    alt=""/></a>
                                </div>
                            </div>
                        </div>

                        {/* Kayıt Ol Formu */}
                        <div id="register" className="tab-content pt-4 hidden">
                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">E-posta</label>
                                    <input type="email" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">İsim</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Soyisim</label>
                                    <input type="text" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
                                    <input type="password" className="w-full p-1.5 border rounded focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Güçlü şifre</label>
                                    <div className="w-full h-1.5 bg-green-500 rounded-full mb-1"></div>
                                    <p className="text-xs text-gray-400">Şifreniz en az 10 karakter olmalı. 1 büyük
                                        harf, 1 küçük
                                        harf ve rakam içermelidir.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox"/>
                                    <p className="text-xs text-gray-400">Tarafıma avantajlı tekliflerin sunulabilmesi
                                        amacıyla
                                        kişisel verilerimin işlenmesine ve paylaşılmasına açık rıza veriyorum.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox"/>
                                    <p className="text-xs text-gray-400">Tarafıma elektronik ileti gönderilmesini kabul
                                        ediyorum.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox"/>
                                    <p className="text-xs text-gray-400">Kişisel verilerimin işlenmesine yönelik
                                        aydınlatma metnini
                                        okudum ve anladım.</p>
                                </div>
                                <button type="submit"
                                        className="mt-4 w-full bg-turuncu text-white py-2 rounded hover:bg-orange-600 transition">Üye
                                    Ol
                                </button>
                            </form>
                            <div className="mt-4">
                                <p className="text-center">Henüz hesabın yok mu? <a href="" className="text-turuncu">Hesap
                                    aç</a></p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="h-0.5 w-40 bg-gray-300"></div>
                                    <span>ya da</span>
                                    <div className="h-0.5 w-40 bg-gray-300"></div>
                                </div>
                                <div className="flex items-center justify-center gap-6 mt-4">
                                    <a href=""><img className="w-[26px] h-[26px]" src="./view/img/facebook.png" alt=""/></a>
                                    <a href=""><img className="w-[26px] h-[26px]" src="./view/img/google.png"
                                                    alt=""/></a>
                                    <a href=""><img className="w-[26px] h-[26px]" src="./view/img/apple.png"
                                                    alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full">
                        <div className="bg-mavi w-full h-[600px] rounded-lg">

                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
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

export default Loginregister;
