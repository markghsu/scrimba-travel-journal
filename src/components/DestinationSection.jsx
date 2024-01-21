import React from 'react'
import mapIcon from '../assets/map_icon.svg'
import './DestinationSection.css'

export default function DestinationSection({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <section className="destination-section">
            <img src={imageUrl} className="destination--image" alt={title} />
            <div className="destination--info">
                <h1 className="destination--name">{title}</h1>
                <div className="destination--location">
                    <h4 className="destination--location--country"><img src={mapIcon} alt="" className="destination--location--icon" /> {location}</h4>
                    <a className="destination--location--link" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="destination--dates">{startDate} - {endDate}</h3>
                <p className="destination--description">{description}</p>
            </div>
        </section>
    )
}
