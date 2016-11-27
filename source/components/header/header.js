import React from 'react';
import { Link } from 'react-router';


const Header = React.createClass({
    render: function() {
        return (
            <header className="primary-header">
                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                    </ul>
                </aside>
            </header>
        );
    }
});

export default Header;