import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { FAQ, Home, Navbar, Product } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="home" className='z-10'>
            <Home scrollContainer={wrapperRef} />
          </div>
          <div id="product" className='relative z-30 bg-primary mt-[-2px]'>
            <Product />
          </div>
          <div id="faq" className='relative z-30 bg-primary'>
            <FAQ />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
