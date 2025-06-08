import Header from "../components/public/header.jsx";
import React, {useState} from "react";
import Hero from "../components/home/hero.jsx";
import LoginModal from "../components/home/loginModal.jsx";
import RealEstateListings from "../components/home/RealEstateListings.jsx";
import Footer from "../components/public/footer.jsx";
import InteriorDesignAI from "../components/home/InteriorDesignAI.jsx";

export default function Home() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [loginModal, setLoginModal] = useState(false);

    return (
        <div>
            <Header loginModal={loginModal} setLoginModal={setLoginModal}/>
            {loginModal && (
                <LoginModal setLoginModal={setLoginModal}/>
            )}
            <Hero activeTab={activeTab} setActiveTab={setActiveTab}/>
            {(activeTab === 'tab1' ||
                activeTab === 'tab2' ||
                activeTab === 'tab3' ||
                activeTab === 'tab4' ||
                activeTab === 'tab5' ||
                activeTab === 'tab6') && (
                <RealEstateListings/>
            )}
            {(activeTab === 'tab7' ||
                activeTab === 'tab8' ||
                activeTab === 'tab9' ||
                activeTab === 'tab10') && (
                <InteriorDesignAI/>
            )}
            <Footer/>
        </div>
    );
}