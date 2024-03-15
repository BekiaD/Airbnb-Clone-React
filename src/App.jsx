import { useState } from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data' //not usual to import a hardcoded data file
// consosle.log(data)

function App() {
    const cards = data.map(item => {
        return (
            <Card
            key={item.id}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            item={item}
            // {...item} spread operator - remove all .item from the card too
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App
