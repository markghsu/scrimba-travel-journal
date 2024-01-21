import React from 'react'
import Header from './Header'
import DestinationSection from './DestinationSection'
import data from '../data'
import './App.css'

export default function App() {
    return (
        <div className="app">
            <Header />
            <div class="container">
            {
                data.map((e) => <DestinationSection {...e} />)
            }
            </div>
        </div>
    )
}
