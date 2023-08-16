import './App.css';
import { Herobanner, Navbar, Carda, Cardb, Cardc, Sgldiv, Repart1, Repart2, Repart3, Myservices, Free } from './components';

function App() {
  return (
    <div className="App">

      <section className='herobanner'>
        <Herobanner />
      </section>

      <Navbar />

      <section className='card_container'>

        <div className='card_a'>
          <Carda />
        </div>

        <div className='card_b'>
          <Cardb />
        </div>

        <div className='card_c'>
          <Cardc />
        </div>

      </section>

      <Sgldiv />

      <section className='resume'>
        <div className="resumepart1"><Repart1 /></div>
        <div className="resumepart2"><Repart2 /></div>
        <div className="resumepart3"><Repart3 /></div>
      </section>

      <section className='myservices'>
        <Myservices />
      </section>

      <Free />


    </div>
  )
}

export default App;
