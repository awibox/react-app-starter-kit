import React from 'react';
import { Link } from 'react-router';
import './repos-list.scss';

// Using "Stateless Functional Components"
export default function(props) {
    console.log('repos', props);
    return (
        <div className="repos-list">

            {props.repos.map(repo => {

                return (
                    <div key={repo.id} className="repos-list__item">
                        <div className="repos-list__name">{repo.name}</div>
                        <div className="repos-list__desc">{repo.description}</div>
                        <div className="repos-list__panel">
                            <div className="repos-list__language">Language: JavaScript</div>
                            <div className="repos-list__stars">Stars: {repo.stargazers_count}</div>
                        </div>

                    </div>
                );

            })}

        </div>
    );
}
