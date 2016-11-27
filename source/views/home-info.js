import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    console.log('home', props);
    return (
        <div className="data-list">

            <div>{props.home.name}</div>
            <div>{props.home.bio}</div>
            <div><img src={props.home.avatar_url} /></div>

        </div>
    );
}
