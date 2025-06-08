import React from 'react';

const Sifremiunuttumforgotpass = () => {
  return (
    <>
      <section className="h-screen px-5 lg:px-0">
                  <div className="h-full flex flex-col items-center justify-center">
                      <div className="bg-white border rounded-lg shadow-lg p-10 space-y-4">
                          <a href="" className="py-2 px-3 rounded-lg text-center bg-gray-300"><i className="ri-arrow-left-s-line ri-xl"></i></a>
                          <h4 className="text-2xl font-medium pt-4">Şifre yenileme</h4>
                          <p className="lg:w-[400px]">Şifre yenileme bağlantısını gönderebilmemiz için e-posta adresinize ihtiyacımız var.</p>
                          <input type="email" className="w-full p-1.5 border rounded focus:outline-none" placeholder="E-posta adresiniz" />
                          <button className="py-2 text-white bg-turuncu rounded-lg w-full">Devam Et</button>
                      </div>
                  </div>
          </section>
    </>
  );
};

export default Sifremiunuttumforgotpass;
