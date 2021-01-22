import React, { useState, useEffect } from 'react';
import Header from './header';
import axios from 'axios';
import styled from 'styled-components';

export default function Pic(props) {

    const [date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res);
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
           <MainDivStyle>
           <DivStyle1>
            <h2>Photo of the day: {date}</h2>
            <img src={url} alt="nasa picture"/>
           </DivStyle1>
           
           <DivStyle2>
             <p> {explanation} </p>
           </DivStyle2>
           </MainDivStyle>

       </div>
    )

}

const MainDivStyle = styled.div`
    display: flex;
    flex-direction: row;
`;



const DivStyle1 = styled.div`
    background-color: pink;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 2%;
    // need to update this

    h2 {
        color: darkgray;
        justify-content: center;
        display: flex;
        font-size: 2rem;
        
    }

    img {
        display: flex;
        justify-content: center;
        border-radius: 100%;
        max-width: 100%;
        /* width: 75%; */
    }

`;

const DivStyle2 = styled.div`
    background-color: teal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 44%;

    p {
        color: red;
        display: flex; 
        font-size: 20px;
        padding: 10px;
        text-align: center;
    }

`;