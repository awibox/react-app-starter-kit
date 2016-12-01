import React from 'react';
import {Link} from 'react-router';
import './home-info.scss';

// Using "Stateless Functional Components"
export default function (props) {
  let avatar_url, lastRelease, prerelease, published_at = '1970-01-01T00:00:00Z';
  for (let data in props.home.owner) {
    if (data == 'avatar_url') {
      avatar_url = props.home.owner[data];
    }
  }
  const companyImage = {
    backgroundImage: 'url(' + avatar_url + ')',
  };
  for (let data in props.releases) {
    if (props.releases[data].published_at > published_at) {
      published_at = props.releases[data].published_at;
      lastRelease = props.releases[data].tag_name;
      prerelease = props.releases[data].prerelease;
    }
  }
  return (
    <div className="data-list">
      <div className="home-info">
        <h1 className="home-info__title">
          <div className="home-info__logo" style={companyImage}></div>
          <div className="home-info__title-text">{props.home.name}
            <div className="home-info__title-version">v {lastRelease} {prerelease ? 'Beta' : ''}</div>
          </div>
        </h1>
        <div className="home-info__text">{props.home.description}</div>
        <p><Link className="btn btn_lg btn_success" href={props.home.html_url}>Download with Github</Link></p>
      </div>
    </div>
  );
}
