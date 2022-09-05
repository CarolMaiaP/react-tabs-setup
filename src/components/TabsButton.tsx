import { useContext } from "react"
import { TabsContext } from "../contexts/TabsContext"

export function TabsButton(){
  const {jobs, setValue}:any = useContext(TabsContext)

  return(
    <div className="tab-buttons">
      {jobs.map((item:any, index:number) => {
        return(
          <button key={item.id} onClick={() => setValue(index)}>{item.company}</button>
        )
      })}
    </div>
  )
}

