import React from 'react';
import {Link} from 'react-router';
import './author-info.scss';

// Using "Stateless Functional Components"
export default function (props) {
  console.log(props);
  const avatar_url = {
    backgroundImage: 'url(' + props.author.avatar_url + ')',
  };
  return (
    <div className="data-list">
      <div className="author-info">
        <h1 className="author-info__title">
          <div className="author-info__logo" style={avatar_url}></div>
          <div className="author-info__title-text">{props.author.name}
            <div className="author-info__title-version">{props.author.location}</div>
          </div>
        </h1>
        <div className="author-info__text">{props.author.company} - {props.author.bio}</div>
        <p><Link className="btn btn_lg btn_success" href={props.author.html_url}>Github page</Link></p>
      </div>
    </div>
  );
}
