import React from 'react';
import { connect } from 'react-redux';
import HomeInfo from '../../views/home-info/home-info';
import * as homeApi from '../../api/home-api';
import store from '../../store';

const HomeInfoContainer = React.createClass({

    componentDidMount: function() {
        homeApi.getHome();
    },

    render: function() {
        return (
            <HomeInfo home={this.props.home} />
        );
    }

});

const mapStateToProps = function(store) {
    return {
        home: store.homeState.home
    };
};

export default connect(mapStateToProps)(HomeInfoContainer);
