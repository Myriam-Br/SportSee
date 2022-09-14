import React from 'react';
import '../styles/App.css';
import NavBarH from '../components/NavBarHorizontal';
import NavBarV from '../components/NavBarVertical';
import ContainerCard from '../components/ContainerCard';
import Profile from "../components/Profil";
import { useParams } from "react-router-dom";

function App() {

  const params = useParams()
  console.log(params);

  return (
    <div className="App">
      <header>
        <NavBarH/>
        <NavBarV/>
        <Profile prop = {params.id}/>
        <ContainerCard/>
      </header>
    </div>
  );
}

export default App;
