import { createContext, useState } from "react";
import { doctors as initialDoctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState(initialDoctors); // Manage the state of doctors

  const currencySymbol = "$";

  // Function to cancel a specific doctor's appointment
  const cancelAppointment = (_id) => {
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== _id));
  };

  const value = {
    doctors,
    currencySymbol,
    cancelAppointment, // Provide this method for components to use
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
