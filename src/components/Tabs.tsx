import React from 'react'
import { useEffect, useState } from "react";
import {FaAngleDoubleRight} from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';


export function Tabs(){
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0)

  async function fetchJobs(){
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()
  },[])

  console.log(jobs)

  if(loading){
    return(
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }

  interface JobsProps{
    company: string,
    dates: string,
    duties: Array<string>,
    title: string,
  }

  const {company, dates, duties, title}:JobsProps = jobs[value]

  return(
    <div>
      <h2>Tabs Project Setup</h2>
      <div className="jobs">
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{dates}</p>
          {duties.map((duty, index) => {
              return (
                <div className='duties-content' key={index}>
                  <FaAngleDoubleRight/>
                  <p>{duty}</p>
                </div>
              )
            })}
      </div>
    </div>
  )
}