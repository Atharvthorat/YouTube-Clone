import { useState,createContext,useEffect } from "react"; 
import React from "react";

import {FetchDataFromApi} from '../utils/api'


export const Context=createContext();

export const AppContext=(props)=>{
const [loading,setLoading]=useState(false);
const [Searchresult,setSearchresult]=useState(false);
const [SelectCatagory,setSelectCatagory]=useState('new');
const [MobileView,setMobileView]=useState(false);


useEffect(()=>{

    FetchSelectedCategoryData(SelectCatagory)

},[SelectCatagory]);
const FetchSelectedCategoryData = (query) => {
    setLoading(true);
    FetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
        console.log(contents);
        setSearchresult(contents);
        setLoading(false);
    });
};

 

return (
    <Context.Provider value={{
        loading,
        setLoading,
        Searchresult,
        setSearchresult,
        SelectCatagory,
        setSelectCatagory,
        MobileView,
        setMobileView
    }}>
    {props.children}
    </Context.Provider>
 
)
}
