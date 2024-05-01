import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import Header from "../common/heading/Header"

import "./price.css"
// import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
    <Header/>
      <Back title='Read your Book' />
      <section className='price padding'>
        <div className='contain '>
          <PriceCard />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Pricing
