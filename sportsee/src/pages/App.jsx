import React from 'react';
import '../styles/App.css';
import { useParams } from "react-router-dom";
import NavBarH from '../components/NavBarHorizontal';
import NavBarV from '../components/NavBarVertical';
import ContainerCard from '../components/ContainerCard';
import Profile from "../components/Profil";

//IMPORT CHART COMPONENTS
import BarChartComponent from '../components/BarChart';
import AreaChartComponent from '../components/AreaChart';
import RadarChartComponent from "../components/RadarChart"
import PieChartComponent from '../components/PieChart';


function App() {

  const params = useParams()
  const userId = parseInt(params.id)
 
  return (
    <div className="App">
      <header>
        <NavBarH/>
        <NavBarV/>  
        
      </header>
      <section className='main_container'>
        <Profile prop = {userId}/>
        <BarChartComponent prop = {userId}/>
          <div className='secondary_container'>
            <AreaChartComponent prop = {userId}/>
            <RadarChartComponent prop = {userId}/>
            <PieChartComponent prop = {userId}/>
          </div>
      </section>
      <ContainerCard prop = {userId}/>
    </div>
  );
}

export default App;
