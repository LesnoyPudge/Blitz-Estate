import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';
import { Header } from './components';
import { Footer } from './components';
import { Test } from './components';
import { Services } from './components';
import { Apartments } from './components';
import { AboutUs } from './components';
import { Directions } from './components';
import { Leader } from './components';
import { Sprites } from "./components";
import { ModalProvider } from "./contexts";



function App() {

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    
    
  return (
        <>
            <ModalProvider>
                <Header />

                <main className="main">
                    <Test/>

                    <Services/>

                    <Apartments/>

                    <AboutUs/>

                    <Directions/>

                    <Leader/>
                </main>

                <Footer />
                <Sprites/>
            </ModalProvider>
        </>
  );
}

export default App;

