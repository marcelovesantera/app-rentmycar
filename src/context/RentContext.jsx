import { createContext, useState } from "react";
export const RentContext = createContext({});
const RentProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPayModal, setIsPayModal] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  return (
    <RentContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        currentCar,
        setCurrentCar,
        isPayModal,
        setIsPayModal,
      }}
    >
      {children}
    </RentContext.Provider>
  );
};

export default RentProvider;
