import React from 'react';
import Menu from './menu';

const MainLayout = React.createClass({
    render: function() {
        return (
            <div className="app">
                <header className="primary-header"></header>
                <Menu />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

export default MainLayout;