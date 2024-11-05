import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;