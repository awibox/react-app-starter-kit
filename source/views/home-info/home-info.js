import React from 'react';
import { Link } from 'react-router';
import './home-info.scss';

// Using "Stateless Functional Components"
export default function(props) {
    const companyImage = {
        backgroundImage: 'url(' + props.home.avatar_url + ')',
    };
    return (
        <div className="data-list">
            <div className="home-info">
                <h1 className="home-info__title">
                    <div className="home-info__logo" style={companyImage}></div>
                    <div className="home-info__title-text">{props.home.name} <div className="home-info__title-version">{props.home.bio}</div></div>
                </h1>
                <div className="home-info__text">A module bundler for javascript application: BEM + Webpack + ES6 + HBS + SASS</div>
                <p><Link className="btn btn_lg btn_success" href={props.home.html_url}>Download</Link></p>
            </div>
        </div>
    );
}
