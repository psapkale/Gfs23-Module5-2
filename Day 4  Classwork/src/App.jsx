import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/HeaderSection/header';
import Quote from './Component/QuoteSection/quote';
import Footer from './Component/FooterSection/footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Quote />
      <Footer />
    </>
  )
}

export default App
