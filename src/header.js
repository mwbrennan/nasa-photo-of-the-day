import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header(props) {

    return(
       <div>
           <h1>{props.title} </h1>
       </div>
    )

}