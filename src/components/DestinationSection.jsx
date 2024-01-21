import React from 'react'
import mapIcon from '../assets/map_icon.svg'
import './DestinationSection.css'

export default function DestinationSection() {
    return (
        <section className="destination-section">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="destination--image" alt="Mount Fuji" />
            <div className="destination--info">
                <h1 className="destination--name">Mount Fuji</h1>
                <div className="destination--location">
                    <h4 className="destination--location--country"><img src={mapIcon} alt="" className="destination--location--icon" /> Japan</h4>
                    <a className="destination--location--link" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                </div>
                <h3 className="destination--dates">12 Jan, 2021 - 24 Jan 2021</h3>
                <p className="destination--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}
