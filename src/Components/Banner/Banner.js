import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio quis ad odit praesentium itaque dolores vel! Velit sapiente veniam pariatur sunt recusandae id dignis</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner