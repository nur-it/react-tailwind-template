// SidebarContext.js
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const toggleSidebar = () => {
    setActiveSidebar((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ activeSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
