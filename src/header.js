import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Header(props) {

    return(
       <div>
           <H1Style>{props.title}</H1Style>
       </div>
    )

}

const H1Style = styled.h1`
    color: yellow;
    background-color: lightcoral;
    padding: 2rem;
    /* padding-bottom: .25rem; */
    margin-top: -.5rem;
    `;