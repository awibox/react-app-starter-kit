import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    const companyImage = {
        backgroundImage: 'url(' + props.home.avatar_url + ')',
    };
    return (
        <div className="data-list">
            <div className="promo">
                <h1 className="promo__title" style={companyImage}>
                    <div className="promo__logo"></div>
                    <div className="promo__title-text">{props.home.name} <div className="promo__title-version">{props.home.bio}</div></div>
                </h1>
                <div className="promo__text">A module bundler for javascript application: BEM + Webpack + ES6 + HBS + SASS</div>
                <p><a className="btn btn_lg btn_success">Download</a></p>
            </div>
        </div>
    );
}
