import image from "../../assets/img/evimin-degeri.jpeg";

export default function EviminDegeri() {
    return (
        <section className="container mx-auto py-16 px-5 lg:px-0">
            <div className="flex items-center justify-center gap-20">
                <img className="rounded-lg" src={image} alt=""/>
                <div>
                    <h1 className="text-3xl font-semibold text-zinc-700">
                        Evinizin değerini KacM2 ile
                        <br/>
                        hızlıca hesaplayın.
                    </h1>
                    <p className="w-[600px] text-zinc-600 text-xl font-medium mt-4">
                        Konut değerleme özelliğimiz ile evinizin gerçek değerini hemen keşfedin. Yalnızca birkaç adımda,
                        yapay zeka modelimiz değerlemeyi sizin için yapsın!
                    </p>
                </div>
            </div>
            <div className="bg-zinc-100 p-5 rounded mt-10">
                <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-1">
                        <h3 className="font-medium">Ülke</h3>
                        <select name="" id="tomselect-25" className="mySingleSelect tomselected ts-hidden-accessible"
                                tabIndex="-1">

                            <option value="sivas">Sivas</option>
                            <option value="izmir">İzmir</option>
                            <option value="ankara">Ankara</option>
                            <option value="turkiye" selected="">Türkiye</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="turkiye" className="item" data-ts-item="">Türkiye</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-25-ts-dropdown" id="tomselect-25-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-25-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">İl</h3>
                        <select name="" id="tomselect-26" className="mySingleSelect tomselected ts-hidden-accessible"
                                tabIndex="-1">

                            <option value="sivas">Sivas</option>
                            <option value="izmir">İzmir</option>
                            <option value="ankara">Ankara</option>
                            <option selected="">İl Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="İl Seçiniz" className="item" data-ts-item="">İl Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-26-ts-dropdown" id="tomselect-26-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-26-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">İlçe</h3>
                        <select name="" id="tomselect-27" className="mySingleSelect tomselected ts-hidden-accessible"
                                tabIndex="-1">

                            <option value="sivas">Sivas</option>
                            <option value="izmir">İzmir</option>
                            <option value="ankara">Ankara</option>
                            <option selected="">İlçe Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="İlçe Seçiniz" className="item" data-ts-item="">İlçe Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-27-ts-dropdown" id="tomselect-27-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-27-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Semt / Mahalle</h3>
                        <select name="" id="tomselect-28" className="mySingleSelect tomselected ts-hidden-accessible"
                                tabIndex="-1">

                            <option value="sivas">Sivas</option>
                            <option value="izmir">İzmir</option>
                            <option value="ankara">Ankara</option>
                            <option selected="">Semt/Mahalle Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Semt/Mahalle Seçiniz" className="item" data-ts-item="">Semt/Mahalle
                                    Seçiniz
                                </div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-28-ts-dropdown" id="tomselect-28-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-28-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">İlan Tipi</h3>
                        <select name="" id=""
                                className="emlakKategori py-2.5 px-3 border rounded-lg w-full bg-white text-sm">
                            <option value="">Seçiniz</option>
                            <option value="konut">Konut</option>
                            <option value="isyeri">İşyeri</option>
                            <option value="bina">Bina</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Emlak Tipi</h3>
                        <select name="" id=""
                                className="ilanTipi py-2.5 px-3 border rounded-lg w-full bg-white text-sm"></select>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Emlak Kategorisi</h3>
                        <select name="" id=""
                                className="emlakTipi py-2.5 px-3 border rounded-lg w-full bg-white text-sm"></select>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Satıcı Fiyat Talebi</h3>
                        <input type="text" className="py-2 px-3 border rounded-lg w-full bg-white focus:outline-none"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Net m²</h3>
                        <input type="text" className="py-2 px-3 border rounded-lg w-full bg-white focus:outline-none"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Brüt m²</h3>
                        <input type="text" className="py-2 px-3 border rounded-lg w-full bg-white focus:outline-none"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Tapu Durumu</h3>
                        <select name="" id="tomselect-29" className="mySingleSelect tomselected ts-hidden-accessible"
                                tabIndex="-1">

                            <option>Kat Mülkiyetli</option>
                            <option>Kat İrtifakılı</option>
                            <option>Hisseli Tapu</option>
                            <option>Müstakil Tapulu</option>
                            <option>Arsa Tapulu</option>
                            <option>Kooperatif Hisseli Tapu</option>
                            <option>Yurt Dışı Tapulu</option>
                            <option>Arsa Tapulu</option>
                            <option>Tapu Kaydı Yok</option>
                            <option selected="">Tapu Durumu Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Tapu Durumu Seçiniz" className="item" data-ts-item="">Tapu Durumu
                                    Seçiniz
                                </div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-29-ts-dropdown" id="tomselect-29-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-29-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Site İçerisinde</h3>
                        <select id="site-icerisinde" className="mySingleSelect tomselected ts-hidden-accessible"
                                tabIndex="-1">

                            <option>Evet</option>
                            <option>Hayır</option>
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="site-icerisinde-ts-dropdown" id="site-icerisinde-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="site-icerisinde-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div id="site-adi-div" className="space-y-1 hidden">
                        <h3 className="font-medium">Site Adı</h3>
                        <input type="text" className="py-2 px-3 border rounded-lg w-full bg-white focus:outline-none"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Mutfak</h3>
                        <select className="mySingleSelect tomselected ts-hidden-accessible" id="tomselect-31"
                                tabIndex="-1">

                            <option>Açık (Amerikan)</option>
                            <option>Kapalı</option>
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-31-ts-dropdown" id="tomselect-31-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-31-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Otopark</h3>
                        <select className="mySingleSelect tomselected ts-hidden-accessible" id="tomselect-32"
                                tabIndex="-1">

                            <option>Açık Otopark</option>
                            <option>Kapalı Otopark</option>
                            <option>Açık &amp; Kapalı Otopark</option>
                            <option>Yok</option>
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-32-ts-dropdown" id="tomselect-32-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-32-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Asansör</h3>
                        <select className="mySingleSelect tomselected ts-hidden-accessible" id="tomselect-33"
                                tabIndex="-1">

                            <option>Var</option>
                            <option>Yok</option>
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-33-ts-dropdown" id="tomselect-33-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-33-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Isıtma</h3>
                        <select className="mySingleSelect tomselected ts-hidden-accessible" id="tomselect-34"
                                tabIndex="-1">

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
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-34-ts-dropdown" id="tomselect-34-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-34-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Bulunduğu Kat</h3>
                        <select className="mySingleSelect tomselected ts-hidden-accessible" id="tomselect-35"
                                tabIndex="-1">

                            <option>Giriş Altı Kot 4</option>
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
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-35-ts-dropdown" id="tomselect-35-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-35-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Bina Yaşı</h3>
                        <select className="mySingleSelect tomselected ts-hidden-accessible" id="tomselect-36"
                                tabIndex="-1">

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
                            <option selected="">Seçiniz</option>
                        </select>
                        <div className="ts-wrapper mySingleSelect single input-hidden full has-items">
                            <div className="ts-control">
                                <div data-value="Seçiniz" className="item" data-ts-item="">Seçiniz</div>
                                <input type="text" autoComplete="off" size="1" tabIndex="0" role="combobox"
                                       aria-haspopup="listbox" aria-expanded="false"
                                       aria-controls="tomselect-36-ts-dropdown" id="tomselect-36-ts-control"
                                       placeholder="İlçe seçin"/></div>
                            <div className="ts-dropdown single" style={{display:'none'}}>
                                <div role="listbox" tabIndex="-1" className="ts-dropdown-content"
                                     id="tomselect-36-ts-dropdown"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button className="py-2 px-5 bg-turuncu rounded-lg text-white open-popup"
                            data-target="rapor">Expertiz Raporu Oluştur
                    </button>
                </div>
            </div>
        </section>
    )
}