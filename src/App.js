import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import SocialBar from './components/SocialBar';

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Blogs />
      </main>
      <SocialBar />
    </div>
  );
}

export default App;
