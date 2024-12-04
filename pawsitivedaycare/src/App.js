import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="page-container">
            <Navbar />
            <main className="content">
                <Hero />
                <Services />   
            </main>
            <Footer />
        </div>
    );
}


export default App;