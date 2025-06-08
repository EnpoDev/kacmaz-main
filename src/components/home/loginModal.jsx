import React from "react";

export default function LoginModal({setLoginModal}) {
    return (
        <div style={{zIndex:9999}}
            className="absolute left-0 top-0 flex items-center justify-center bg-black/20 w-full h-full transition-all transform scale-95">
            <div className="authModal bg-white rounded-lg shadow-lg p-6 w-96 block" id="authModal"
                 style={{display: 'block'}}>
                <div className="flex justify-between items-center mb-4">
                    <button id="backBtn" className="text-gray-500 hover:text-gray-700"
                            style={{display: 'none'}}>←
                    </button>
                    <h2 className="text-xl font-semibold" id="modalTitle">Hesap Oluştur</h2>
                    <button onClick={() => setLoginModal(false)} id="closeModal"
                            className="text-gray-500 hover:text-gray-700">×
                    </button>
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
                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft"
                             className="w-5 h-5 mr-2"/>
                        Microsoft ile kayıt ol
                        <span></span>
                    </button>
                    <div className="text-center text-gray-500">VEYA</div>
                    <input type="email" id="email" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="continueBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Devam Et
                    </button>
                    <p className="text-center text-sm text-gray-500">Devam ederek, Hizmet Şartlarımızı kabul
                        etmiş ve Gizlilik Politikamızı onaylamış olursunuz.</p>
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
                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft"
                             className="w-5 h-5 mr-2"/>
                        Microsoft ile kayıt ol
                        <span></span>
                    </button>
                    <input type="email" id="email" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <input type="password" id="password" placeholder="Şifre (minimum 6 karakter)"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="signupBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Kayıt Ol
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Zaten Hesabınız Var mı?
                        <a href="#" id="loginLink" className="text-turuncu">Giriş Yap</a>
                    </p>
                    <p className="text-center text-sm text-gray-500">Devam ederek, Hizmet Şartlarımızı kabul
                        etmiş ve Gizlilik Politikamızı onaylamış olursunuz.</p>
                </div>
                <div id="loginForm" className="space-y-4 hidden" style={{display: 'none'}}>
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
                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft"
                             className="w-5 h-5 mr-2"/>
                        Microsoft ile kayıt ol
                        <span></span>
                    </button>
                    <div className="text-center text-gray-500">VEYA</div>
                    <input type="email" id="loginEmail" placeholder="E-Posta Adresi"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <input type="password" id="loginPassword" placeholder="Şifre"
                           className="w-full p-2 border border-gray-300 rounded-lg"/>
                    <button id="loginBtn" className="w-full bg-turuncu text-white py-2 rounded-lg">Giriş Yap
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Şifreni mi unuttun?
                        <a href="#" id="forgotPasswordLink" className="text-turuncu">Şifremi Unuttum</a>
                    </p>
                    <p className="text-center text-sm text-gray-500">Devam ederek, Hizmet Şartlarımızı kabul
                        etmiş ve Gizlilik Politikamızı onaylamış olursunuz.</p>
                </div>
                <div id="forgotPasswordForm" className="space-y-4 hidden" style={{display: 'none'}}>
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
        </div>
    )
}