import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Header from "../common/heading/Header"

const Team = () => {
  return (
    <>
    <Header/>
      <Back title='Team' />
      <section className='team padding'>
        <div className='contain grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
