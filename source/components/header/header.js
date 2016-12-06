import React from 'react';
import { Link } from 'react-router';
import './header.scss';


const Header = React.createClass({
    render: function() {
        return (
            <header className="header">
                <div className="wrapper">
                    <Link className="header__logo" to="/"></Link>
                    <Link className="header__name" to="/">BEM-builder</Link>
                    <aside className="header__menu">
                        <Link className="header__menu-item" to="/" activeClassName="header__menu-item_active">About</Link>
                        <Link className="header__menu-item" to="/repos" activeClassName="header__menu-item_active">Repositories</Link>
                        <Link className="header__menu-item" to="/author" activeClassName="header__menu-item_active">Author</Link>
                    </aside>
                </div>
            </header>
        );
    }
});

export default Header;