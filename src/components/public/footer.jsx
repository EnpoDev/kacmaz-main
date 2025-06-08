import React from 'react';
import logo from "../../assets/img/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#486078] pt-8 text-white px-28">
            <div className="container mx-auto">
                <div className="mb-8 border-b md:mb-12">
                    <div className="mx-auto flex flex-wrap items-end justify-between gap-6 px-6 pb-6">
                        <a href="/" aria-label="go home" className="block size-fit">
                            <img className="md:w-[170px] w-[100px] lg:h-[30px] h-[20px]" src={logo} alt="Logo" />
                        </a>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="#" target="_blank" aria-label="X/Twitter" className="text-body block hover:text-title">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                </svg>
                            </a>
                            <a href="#" target="_blank" aria-label="LinkedIn" className="text-body block hover:text-title">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                </svg>
                            </a>
                            <a href="#" target="_blank" aria-label="Facebook" className="text-body block hover:text-title">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                                </svg>
                            </a>
                            <a href="#" target="_blank" aria-label="Threads" className="text-body block hover:text-title">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" color="currentColor"></path>
                                </svg>
                            </a>
                            <a href="#" target="_blank" aria-label="Instagram" className="text-body block hover:text-title">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                                </svg>
                            </a>
                            <a href="#" target="_blank" aria-label="TikTok" className="text-body block hover:text-title">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="px-6">
                    <div className="">
                        <div className="flex flex-wrap items-start justify-between">
                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Popüler İlan Kategorileri</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Satılık Daire İlanları</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kiralık Daire İlanları</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Sahibinden Satılık Evler</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Sahibinden Kiralık Evler</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Satılık Müstakil Ev</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Sahibinden Arsa İlanları</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kiralık Dükkan & Ofis</span>
                                </a>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Şehre Göre Popüler İlanlar</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>İstanbul Satılık Daire</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Ankara Kiralık Ev</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>İzmir Sahibinden Arsa</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Bursa Satılık Müstakil Ev</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Antalya Günlük Kiralık</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Mersin Kiralık İşyeri</span>
                                </a>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Hizmetlerimiz</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Ücretsiz Emlak İlanı Ver</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Hızlı Emlak Değerleme</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Dijital Kira Sözleşmesi</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Ev Taşıma & Nakliye Hizmeti</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Temizlik ve Tadilat Hizmeti</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kat Mülkiyeti & Tapu Danışmanlığı</span>
                                </a>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Emlak Rehberi</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Ev Alırken Nelere Dikkat Edilmeli?</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kira Sözleşmesi Nasıl Yapılır?</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Sahibinden Ev Satmak İçin İpuçları</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Arsa Yatırımı Rehberi</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Tapu Harcı Hesaplama</span>
                                </a>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Kurumsal</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Hakkımızda</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>İletişim</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Basında Biz</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>İşbirlikleri & Reklam</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kariyer Fırsatları</span>
                                </a>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Yasal & Politikalar</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kullanım Koşulları</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Gizlilik Politikası</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Çerez Politikası</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>KVKK Aydınlatma Metni</span>
                                </a>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <span className="text-title font-bold text-base">Destek ve Yardım</span>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Sıkça Sorulan Sorular (SSS)</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Canlı Destek</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Kullanıcı Güvenliği</span>
                                </a>
                                <a href="#" className="text-body block hover:text-title">
                                    <span>Site Haritası</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 gap-6 border-t py-6">
                        <span className="block text-center text-sm">© 2025 Kacm2.com, Tüm hakları saklıdır.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;