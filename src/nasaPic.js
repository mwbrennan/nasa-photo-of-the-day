import React, { useState, useEffect } from 'react';
import Header from './header'
import axios from 'axios';

export default function Pic(props) {

    const [date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            // console.log(res);
            setDate(res.data.date);
            setExplanation(res.data.explanation);
            setTitle(res.data.title);
            setUrl(res.data.url);
        })
        .catch(err => console.log(err))
    }, [])

    return(
       <div>
           <Header title={title} />
           <h2>Photo of the day: {date}</h2>
           <img src={url} alt="nasa picture"/>
           <p> {explanation} </p>
       </div>
    )

}