import React from 'react';
import Img from '../Img/scuba2.jpg';
import Produkter from '../components/Produkter.js';
import Rejser from '../components/Rejser';
import Kurser from '../components/Kurser';


const Home = () => {
  return (

    <main className="">
      <div><div className="carousel-caption d-none d-md-block position-absolute ps w-50 m-auto p-4">
        <h5>THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FISH.</h5>
        <p>JACQUES COUSTEAU</p>
      </div>

        <img className="img__1 img-fluid" alt="billeder af folk der dykker" src={Img} />

      </div>

      <Produkter />
      <Rejser />
      <Kurser />
    </main>
  )

}

export default Home