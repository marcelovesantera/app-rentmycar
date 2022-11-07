import { createContext, useState } from "react";
export const DashboardContext = createContext({});
const DashboardProvider = ({ children }) => {
  const [currentMarcaCar, setMarcaCurrentCar] = useState(null);
  const [currentModeloCar, setModeloCurrentCar] = useState(null);
  const [currentAnoCar, setAnoCurrentCar] = useState(null);
  const [currentCity, setCity] = useState(null);
  const [currentDateFrom, setCurrentDateFrom] = useState("");
  const [currentDateTo, setCurrentDateTo] = useState("");

  return (
    <DashboardContext.Provider
      value={{
        currentMarcaCar,
        setMarcaCurrentCar,
        currentModeloCar,
        setModeloCurrentCar,
        currentAnoCar,
        setAnoCurrentCar,
        currentCity,
        setCity,
        currentDateFrom,
        setCurrentDateFrom,
        currentDateTo,
        setCurrentDateTo,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
