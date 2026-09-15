import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Evento from './components/Evento';
import Manifesto from './components/Manifesto';
import Interstitial from './components/Interstitial';
import Territories from './components/Territories';
import Ciencia from './components/Ciencia';
import Leadership from './components/Leadership';
import Alliances from './components/Alliances';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Evento />
        <Manifesto />
        <Interstitial />
        <Territories />
        <Ciencia />
        <Leadership />
        <Alliances />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
