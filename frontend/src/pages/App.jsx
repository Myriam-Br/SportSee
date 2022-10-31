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

  return (
    <div className="App">

      <section className='main_container'>
      <Profile prop = {params.id}/>
        <ContainerCard prop = {params.id}/>
        <div className='chart_containers'>
          <BarChartComponent prop = {params.id}/>
          <div className='secondary_container'>
            <AreaChartComponent prop = {params.id}/>
            <RadarChartComponent prop = {params.id}/>
            <PieChartComponent prop = {params.id}/>
          </div>
        </div>
       
      </section>
    
    </div>
  );
}

export default App;
