import { createContext, ReactNode, useState } from "react";

export const TabsContext = createContext({});

interface TabsContextProps{
  children: ReactNode;
}

export function TabsContextProvider({children}:TabsContextProps){
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  return(
    <TabsContext.Provider
      value={{jobs, setJobs, value, setValue}}
    >
      {children}
    </TabsContext.Provider>
  )
}