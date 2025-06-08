import logo from "../../assets/img/logo.png";
import {Link} from "react-router";

export default function Header({loginModal, setLoginModal}) {


    return (
        <header className="bg-[#486078] lg:py-4 py-4 px-32 ">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/"><img className="md:w-[170px] w-[100px] lg:h-[30px] h-[20px]" src={logo}
                                alt=""/></a>
                <div className="md:flex items-center gap-5 text-white text-xs hidden">
                    <button className="py-2 px-4 bg-green-500 rounded-lg">
                        Evinizi Kiralayalım
                    </button>
                    <Link to="/profesyoneller" className="py-2 px-4 border border-white rounded-lg">
                        <i className="ri-wallet-line ri-lg"></i>
                        Profesyoneller
                    </Link>
                    <button className="py-2 px-4 border border-white rounded-lg">
                        <i className="ri-wallet-line ri-lg"></i>
                        Kira Öde
                    </button>

                    <button className="py-2 px-4 border border-white rounded-lg">
                        <i className="ri-add-circle-line ri-lg"></i>
                        Ücretsiz İlan Ver
                    </button>
                    <button onClick={() => setLoginModal(true)} id="openModal" className="py-2 px-4 border border-white rounded-lg">Giriş Yap / Kayıt Ol
                    </button>
                    <select className="py-2 px-4 rounded-lg bg-inherit border border-white">
                        <option value="us" className="text-black" data-text="English">English</option>
                        <option value="es" className="text-black" data-text="Español">Español</option>
                        <option value="fr" className="text-black" data-text="Français">Français</option>
                        <option value="de" className="text-black" data-text="Deutsch">Deutsch</option>
                        <option value="tr" className="text-black" data-text="Türkçe">Türkçe</option>
                    </select>
                </div>
            </div>
            <div className="backdrop" id="backdrop"></div>
            <div className="authModal bg-white rounded-lg shadow-lg p-6 w-96" id="authModal">
                <div className="flex justify-between items-center mb-4">
                    <button id="backBtn" className="text-gray-500 hover:text-gray-700">←</button>
                    <h2 className="text-xl font-semibold" id="modalTitle">Hesap Oluştur</h2>
                    <button id="closeModal" className="text-gray-500 hover:text-gray-700">×</button>
                </div>
                <div id="step1" className="space-y-4">
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2"/>
                        Google ile devam edin
                        <span></span>
                    </button>
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2"/>
                        Apple ile kayıt ol
                        <span></span>
                    </button>
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5 mr-2"/>
                        Microsoft ile kayıt ol
                        <span></span>
                    </button>
                    <div className="text-center text-gray-500">VEYA</div>
                    <input type="email" id="email" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="continueBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Devam Et</button>
                    <p className="text-center text-sm text-gray-500">Devam ederek, Hizmet Şartlarımızı kabul etmiş ve
                        Gizlilik Politikamızı onaylamış olursunuz.</p>
                </div>
                <div id="step2" className="space-y-4 hidden">
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2"/>
                        Google ile devam edin
                        <span></span>
                    </button>
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2"/>
                        Apple ile kayıt ol
                        <span></span>
                    </button>
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5 mr-2"/>
                        Microsoft ile kayıt ol
                        <span></span>
                    </button>
                    <input type="email" id="email" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <input type="password" id="password" placeholder="Şifre (minimum 6 karakter)"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="signupBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Kayıt Ol</button>
                    <p className="text-center text-sm text-gray-500">
                        Zaten Hesabınız Var mı?
                        <a href="#" id="loginLink" className="text-turuncu">Giriş Yap</a>
                    </p>
                    <p className="text-center text-sm text-gray-500">Devam ederek, Hizmet Şartlarımızı kabul etmiş ve
                        Gizlilik Politikamızı onaylamış olursunuz.</p>
                </div>
                <div id="loginForm" className="space-y-4 hidden">
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2"/>
                        Google ile devam edin
                        <span></span>
                    </button>
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2"/>
                        Apple ile kayıt ol
                        <span></span>
                    </button>
                    <button
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-100">
                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5 mr-2"/>
                        Microsoft ile kayıt ol
                        <span></span>
                    </button>
                    <div className="text-center text-gray-500">VEYA</div>
                    <input type="email" id="loginEmail" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <input type="password" id="loginPassword" placeholder="Şifre"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="loginBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Giriş Yap</button>
                    <p className="text-center text-sm text-gray-500">
                        Şifreni mi unuttun?
                        <a href="#" id="forgotPasswordLink" className="text-turuncu">Şifremi Unuttum</a>
                    </p>
                    <p className="text-center text-sm text-gray-500">Devam ederek, Hizmet Şartlarımızı kabul etmiş ve
                        Gizlilik Politikamızı onaylamış olursunuz.</p>
                </div>
                <div id="forgotPasswordForm" className="space-y-4 hidden">
                    <input type="email" id="forgotEmail" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="resetPasswordBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Şifre
                        Sıfırlama Bağlantısı Gönder
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Giriş ekranına dönmek için
                        <a href="#" id="backToLoginLink" className="text-turuncu">Giriş Yap</a>
                    </p>
                </div>
            </div>
            <div
                className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md opacity-0 invisible transition-all duration-300 z-[999999]"></div>

            <div id="mobile-menu"
                 className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform duration-300 z-[999999]">
                <div className="">
                    <div className="flex items-center justify-between border-b p-5">
                        <a href=""><img className="md:w-[170px] w-[100px] lg:h-[30px] h-[20px]"
                                        src="../view/img/logo2.png" alt=""/></a>
                        <button id="menu-close" className="text-gray-700 text-3xl">&times;</button>
                    </div>
                    <ul className="space-y-4 p-5">
                        <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Satılık</a></li>
                        <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Kiralık</a></li>
                        <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Projeler</a></li>
                        <li><a href="#" className="block text-base text-gray-700 hover:text-blue-50">Ortak</a></li>
                    </ul>
                </div>
            </div>
        </header>

    )
}