import React from 'react';
import '../styles/App.css';
import { useParams } from "react-router-dom";
import NavBarH from '../components/NavBarHorizontal';
import NavBarV from '../components/NavBarVertical';
import ContainerCard from '../components/ContainerCard';
import Profile from "../components/Profil";
import GraphUserActivity from '../components/GraphUserActivity';
import GraphAverageSession from '../components/GraphAverageSession';


function App() {

  const params = useParams()


  return (
    <div className="App">
      <header>
        <NavBarH/>
        <NavBarV/>  
        <Profile prop = {params.id}/>
      </header>
      <section className='main_container'>
        <GraphUserActivity prop = {params.id}/>
        <div className='secondary_container'>
        <GraphAverageSession prop = {params.id}/>
        <GraphAverageSession prop = {params.id}/>
        <GraphAverageSession prop = {params.id}/>
        </div>
      </section>
      <ContainerCard prop = {params.id}/>
    </div>
  );
}

export default App;
