import React from 'react';
import { Link } from 'react-router';
import './repos-list.scss';

// Using "Stateless Functional Components"
export default function(props) {
    console.log('repos', props);
    return (
        <div className="repos-list">
            {props.repos.map(repo => {
                let languageStyle;
                if (repo.language === 'JavaScript') {
                    languageStyle = {
                        color: '#f1e05a'
                    }
                } else if (repo.language === 'TypeScript'){
                    languageStyle = {
                        color: '#2b7489'
                    }
                }
                return (
                    <div key={repo.id} className="repos-list__item">
                        <Link href={repo.html_url} className="repos-list__name">{repo.name}</Link>
                        <div className="repos-list__github-ico"> <i className="fa fa-github" aria-hidden="true"></i></div>
                        <div className="repos-list__desc">{repo.description}</div>
                        <div className="repos-list__panel">
                            <div className="repos-list__property repos-list__property_language"><i className="fa fa-circle"  style={languageStyle}></i> {repo.language}</div>
                            <div className="repos-list__property repos-list__property_size"><i className="fa fa-file-archive-o"></i> {(repo.size / 1024).toFixed(2)} mb</div>
                            <div className="repos-list__property repos-list__property_stars"><i className="fa fa-star" aria-hidden="true"></i> {repo.stargazers_count}</div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}
