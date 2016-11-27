import React from 'react';
import { Link } from 'react-router';


const Header = React.createClass({
    render: function() {
        return (
            <header className="header">
                <div className="wrapper">
                    <aside className="header__menu">
                        <Link className="header__menu-item" to="/" activeClassName="header__menu-item_active">Home</Link>
                        <Link className="header__menu-item" to="/repos" activeClassName="header__menu-item_active">Repos</Link>
                    </aside>
                </div>
            </header>
        );
    }
});

export default Header;