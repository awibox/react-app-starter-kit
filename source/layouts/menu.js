import React from 'react';
import { Link } from 'react-router';


const MenuLayout = React.createClass({
    render: function() {
        return (
            <aside className="primary-aside">
                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                </ul>
            </aside>
        );
    }
});

export default MenuLayout;