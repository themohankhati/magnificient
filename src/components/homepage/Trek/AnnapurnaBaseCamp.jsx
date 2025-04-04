import React from 'react'
import TourTrek from '../Tour and Trek/TourTrek';
import {useState, useEffect} from "react";
import { getPackages } from '../../../services/packageService';

function AnnapurnaBaseCamp() {
  const[packages, setPackages] = useState();

  const getAnnapurnaPackages = async() => {
    
    const annapurnaData = await getPackages(packages);
    console.log(annapurnaData, "Data");
  }


  useEffect (() => {
    getAnnapurnaPackages();

  },[]);
  
  return (
    <>
  {/* <TourTrek
  title={packages.title}
  description={packages.description}
  
  days={packages.days}
  includes={packages.included}
  excludes={packages.excluded} 
  /> */}



    </>
  )
}

export default AnnapurnaBaseCamp