import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Content
import Hero from "../components/hero";
import Support from "../components/support";
import About from "../components/about";
import BackToTop from "../components/back-to-top";

function Home() {
    return (
        <>
        <Navigation />
        <Hero />
        <Support />
        <About />
        <Footer />
        <BackToTop />
    </>
    )
}

export default Home;