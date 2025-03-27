import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch('https://67cd3b0bdd7651e464edba1c.mockapi.io/Item')
      .then((r) => r.json())
      .then((d) => {
        setArray(d);
      });
  }, []);

  return (
    <>
      <Header />
      <Content array={array} />
      <Footer></Footer>
    </>
  );
}

export default App;