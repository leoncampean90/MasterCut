import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Services from './components/Services/Services';
import Locations from './components/Locations/Locations';
import Team from './components/Team/Team';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Highlights />
    <Services />
    <Locations />
    <Team />
    <About />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
