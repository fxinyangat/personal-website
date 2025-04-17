import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Leadership from './components/Leadership';
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
        <Projects/>
        <Blogs />
        {/* <Leadership/> */}
      </main>
      <SocialBar />
    </div>
  );
}

export default App;
