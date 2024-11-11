import React from 'react'
import Nav from './componet/Nav';
import Clip from "./componet/Clip"
import Poster from "./componet/poster"
import Header from './componet/Header';
import Footer from './componet/Footer';
const Home = () => {
  return (<>
  <Header/>
    <Nav/>
    <Poster/>
    <Clip/>
    <Footer/>

    </> )
}

export default Home;