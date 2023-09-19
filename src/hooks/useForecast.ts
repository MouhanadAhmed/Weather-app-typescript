import { ChangeEvent, useState, useEffect } from "react";
import { optionType, forecastType } from "../types";

const useForecast = ()=>{

    const [term,setTerm]=useState<string>('');
    const [options,setOptions]=useState<[]>([]);
    const [city,setCity]=useState<optionType| null>(null);
    const [forecast,setForecast]=useState<forecastType | null>(null);
  
    const getSearchOptions= (value:string)=>{
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}
            &limit=5&appid=${process.env.REACT_APP_API_KEY}&`)
            .then((res)=> res.json())
            .then((data)=> setOptions(data))
            .catch((err)=> console.log(err) )
    }
  
    const onInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setTerm(e.target.value);
      const value = e.target.value.trim();
      // console.log(term);
      if (value === '')  return 
      getSearchOptions(value);
    }
    const onOptionSelect = (option:optionType)=>{
      setCity(option);
      
      
    }
    const getForecast = (city:optionType) =>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
           .then((res)=>res.json())
           .then((data)=> {
            const forecastData={
                ...data.city,
                list: data.list.slice(0,16),
            }
            setForecast(forecastData)
        }).catch((err)=> console.log(err) )
  
    }
    const onSubmit = ()=>{
      if (!city) return;
      getForecast(city);
    }
  
  
    useEffect(()=>{
      if (city) {
        setTerm(city.name);
        setOptions([]);
      }
    },[city])


  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
    city,
    };
  
}

export default useForecast;