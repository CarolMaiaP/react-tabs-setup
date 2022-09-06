import { useContext } from "react"
import { TabsContext } from "../contexts/TabsContext"
import { TabButton } from "./TabsButton.styled"

export function TabsButton(){
  const {jobs, setValue}:any = useContext(TabsContext)

  return(
    <TabButton>
      <div className="tab-buttons">
        {jobs.map((item:any, index:number) => {
          return(
            <button key={item.id} onClick={() => setValue(index)}>{item.company}</button>
          )
        })}
      </div>
    </TabButton>
  )
}

