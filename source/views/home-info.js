import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    console.log('repos', props);
    return (
        <div className="data-list">

            {props.users.map(user => {

                return (
                    <div key={user.id} className="data-list-item">
                        <div className="details">
                            {user.name} - {user.description}
                        </div>
                    </div>
                );

            })}

        </div>
    );
}
