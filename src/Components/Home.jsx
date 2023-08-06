import React from 'react'
import Header from './Header/Header'
import OneLine from './OneLineSlider/OneLine'
import MHT from "../MHT.json"
import Card from './Card/Card'
const Home = () => {
  return (
    <>
              <Header />
              <OneLine />
              <div className="wrapper">
                {MHT.map((Element) => (
                  <Card
                    img={Element.Poster}
                    title={Element.Title}
                    description={Element.Description}
                    extra={Element}
                  />
                ))}
              </div>
            </>
  )
}

export default Home