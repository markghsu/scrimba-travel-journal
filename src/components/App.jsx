import React from 'react'
import Header from './Header'
import DestinationSection from './DestinationSection'
import './App.css'

export default function App() {
    return (
        <div className="app">
            <Header />
            <DestinationSection />
            <DestinationSection />
            <DestinationSection />
        </div>
    )
}
