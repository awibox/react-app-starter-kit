import React from 'react';
import { connect } from 'react-redux';
import HomeInfo from '../components/home-info/home-info';
import * as homeApi from '../api/github-api';
import store from '../store';

const HomeInfoContainer = React.createClass({

    componentDidMount: function() {
        homeApi.getHome();
        homeApi.getReleases();
    },

    render: function() {
        return (
            <HomeInfo home={this.props.home} releases={this.props.releases} />
        );
    }

});

const mapStateToProps = function(store) {
    console.log(store);
    return {
        home: store.home,
        releases: store.releases
    };
};

export default connect(mapStateToProps)(HomeInfoContainer);
