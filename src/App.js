import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {

    const [advice, setAdvice] = useState('')

    useEffect(() => {
        fetchAdvice()
    }, [])

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip
            setAdvice(advice)
        })
        .catch((error) => {
            console.log(error)
        })
    }
        
    return (
        <div className='app'>
                <h1 className='header'>{advice}</h1>
                <button className='button' onClick={fetchAdvice}>New Advice</button>
        </div>
    )
}

export default App
