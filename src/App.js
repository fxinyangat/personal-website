import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import SocialBar from './components/SocialBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="home">
                <Hero />
              </section>
              <About />
              <Projects />
              <Blogs />
            </main>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SocialBar />
      </div>
    </Router>
  );
}

export default App;
