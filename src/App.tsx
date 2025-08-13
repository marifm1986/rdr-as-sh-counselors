import { Advantages } from './components/Advantages';
import { ContactFormProvider } from './components/ContactFormProvider';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
export function App() {
  return <ContactFormProvider>
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Advantages />
        <ContactSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  </ContactFormProvider>;
}