import React from 'react';
import { Link } from 'react-router';
import './home-info.scss';

// Using "Stateless Functional Components"
export default function(props) {
    let avatar_url;
    for(let data in props.home.owner) {
        if(data == 'avatar_url') {
            avatar_url = props.home.owner[data];
        }
    }
    const companyImage = {
        backgroundImage: 'url(' + avatar_url + ')',
    };
    return (
        <div className="data-list">
            <div className="home-info">
                <h1 className="home-info__title">
                    <div className="home-info__logo" style={companyImage}></div>
                    <div className="home-info__title-text">{props.home.name} <div className="home-info__title-version">v 1.0 Beta</div></div>
                </h1>
                <div className="home-info__text">{props.home.description}</div>
                <p><Link className="btn btn_lg btn_success" href={props.home.html_url}>Download</Link></p>
            </div>
        </div>
    );
}
