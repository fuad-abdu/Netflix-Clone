import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="banner__description">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                </h1>
            </div>
        </div>
    )
}

export default Banner
