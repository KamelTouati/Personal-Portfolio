import './App.css';
import {Header, Home, Services, About, Portfolio, Contact, Footer} from './Sections/index'
function App() {
  return (
    <div className="App container mx-auto">
      <>
        <Header />
        <Home />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
