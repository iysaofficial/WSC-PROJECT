import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Content
import Hero from "../components/hero";
import Support from "../components/support";
import Category from "../components/category";
import BackToTop from "../components/back-to-top";

function Home() {
    return (
        <>
        <Navigation />
        <Hero />
        <Support />
        <Category />
        <Footer />
        <BackToTop />
    </>
    )
}

export default Home;