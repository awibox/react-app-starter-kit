import React from 'react';
import { Link } from 'react-router';

const MainLayout = React.createClass({
    render: function() {
        return (
            <div className="app">
                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                </ul>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

export default MainLayout;