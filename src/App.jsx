import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Screens/Home.jsx";
import ProfesyonellerPage from "./Screens/ProfesyonellerPage.jsx";
import CompanyDetailPage from "./Screens/ProfesyonellerDetail.jsx";
import CompanyFilterPage from "./Screens/ProfFiltrele.jsx";
import RoommateDetailPage from "./Screens/RoommateDetailPage.jsx";
import RealEstateFilter from "./Screens/RealEstateFilter.jsx";
import EmlakDetail from "./Screens/EmlakDetail.jsx";

// Dönüştürülmüş JSX sayfaları
import Danismananasayfaadvisorhome from "./Screens/OtomatikDonusum/Danismananasayfaadvisorhome.jsx";
import Danismandetayadvisordetail from "./Screens/OtomatikDonusum/Danismandetayadvisordetail.jsx";
import Danismanfiltrelemeadvisorfiltering from "./Screens/OtomatikDonusum/Danismanfiltrelemeadvisorfiltering.jsx";
import Degerlendirmeyazwritereview from "./Screens/OtomatikDonusum/Degerlendirmeyazwritereview.jsx";
import Duzenleme from "./Screens/OtomatikDonusum/Duzenleme.jsx";
import Emlakharitaestatemap from "./Screens/OtomatikDonusum/Emlakharitaestatemap.jsx";
import Firmadetayfirmdetail from "./Screens/OtomatikDonusum/Firmadetayfirmdetail.jsx";
import Firmafiltrelemefirmfiltering from "./Screens/OtomatikDonusum/Firmafiltrelemefirmfiltering.jsx";
import Firmalarcompanies from "./Screens/OtomatikDonusum/Firmalarcompanies.jsx";
import Galerigallery from "./Screens/OtomatikDonusum/Galerigallery.jsx";
import Hakkimizdaabout from "./Screens/OtomatikDonusum/Hakkimizdaabout.jsx";
import Ilandetayaddetail from "./Screens/OtomatikDonusum/Ilandetayaddetail.jsx";
import Ilanfiltrelemeadfiltering from "./Screens/OtomatikDonusum/Ilanfiltrelemeadfiltering.jsx";
import Insaatilerlemesiconstructionprogress from "./Screens/OtomatikDonusum/Insaatilerlemesiconstructionprogress.jsx";
import Kredidetaykreditdetail from "./Screens/OtomatikDonusum/Kredidetaykreditdetail.jsx";
import Kredihesaplamacreditcalculation from "./Screens/OtomatikDonusum/Kredihesaplamacreditcalculation.jsx";
import Kurumsaluyecorporatemember from "./Screens/OtomatikDonusum/Kurumsaluyecorporatemember.jsx";
import Loginregister from "./Screens/OtomatikDonusum/Loginregister.jsx";
import Nakliyetransport from "./Screens/OtomatikDonusum/Nakliyetransport.jsx";
import Projelerprojects from "./Screens/OtomatikDonusum/Projelerprojects.jsx";
import Sifremiunuttumforgotpass from "./Screens/OtomatikDonusum/Sifremiunuttumforgotpass.jsx";

// CSS
import './assets/css/style.css';
import './assets/css/default.css';
import './assets/css/swiper-bundle.min.css';

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/profesyoneller", element: <ProfesyonellerPage /> },
    { path: "/profesyoneller/:id", element: <CompanyDetailPage /> },
    { path: "/prof-filtrele", element: <CompanyFilterPage /> },
    { path: "/roommate-detail", element: <RoommateDetailPage /> },
    { path: "/RealEstateFilter", element: <RealEstateFilter /> },
    { path: "/emlak-detail", element: <EmlakDetail /> },

    // Otomatik eklenen HTML dönüşümleri
    { path: "/danisman", element: <Danismananasayfaadvisorhome /> },
    { path: "/danisman-detay", element: <Danismandetayadvisordetail /> },
    { path: "/danisman-filtreleme", element: <Danismanfiltrelemeadvisorfiltering /> },
    { path: "/degerlendirme-yaz", element: <Degerlendirmeyazwritereview /> },
    { path: "/duzenleme", element: <Duzenleme /> },
    { path: "/hakkimizda", element: <Hakkimizdaabout /> },
    { path: "/ilan-detay", element: <Ilandetayaddetail /> },
    { path: "/ilan-filtreleme", element: <Ilanfiltrelemeadfiltering /> },
    { path: "/insaat-ilerlemesi", element: <Insaatilerlemesiconstructionprogress /> },
    { path: "/kredi-detay", element: <Kredidetaykreditdetail /> },
    { path: "/kredi-hesaplama", element: <Kredihesaplamacreditcalculation /> },
    { path: "/kurumsal-uye", element: <Kurumsaluyecorporatemember /> },
    { path: "/login-register", element: <Loginregister /> },
    { path: "/nakliye", element: <Nakliyetransport /> },
    { path: "/projeler", element: <Projelerprojects /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
