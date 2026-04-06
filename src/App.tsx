import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Media } from './components/Media';
//import { Contact } from './components/Contact';
import { Shows } from './components/Shows';
import { Footer } from './components/Footer';
//import { BandMembers } from './components/Bandmembers';
import { Divider } from './components/Divider';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Divider />
        <About />
        <Divider />
        {/* <BandMembers /> */}
        <Media />
        <Divider />
        <Shows />
        <Footer />
      </div>
    </div>
  );
}

export default App;