import React from 'react';
import Header from './../components/header/header';
import './../sass/build.scss';

const MainLayout = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Header />
                <main className="content">
                    <div className="wrapper">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
});

export default MainLayout;