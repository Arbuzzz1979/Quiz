import React, { useContext, useState } from "react";
import dataResources from "../assets/data/resources_data";

const initData = dataResources();
const ResourcesContext = React.createContext();

export function useResources() {
  return useContext(ResourcesContext);
}

export default function ArticlesProvider({ children }) {
  const [resData, setResData] = useState(initData);
  const [currentRes, setCurrentRes] = useState();

  const getCurrentRes = (id) => {
    console.log("id",id)
    console.log("resData",resData)
    let r = resData.filter(res => res.id===id)[0]
    console.log("r",r)
    setCurrentRes(resData.filter(res => res.id===id)[0])
  }
  const value = {
    resData,
    getCurrentRes,
    currentRes
  };

  return (
    <ResourcesContext.Provider value={value}>
      {children}
    </ResourcesContext.Provider>
  );
}  