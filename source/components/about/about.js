import React from 'react';
import { connect } from 'react-redux';
import Gihub from '../github/github';
import * as githubApi from '../../api/github-api';
import store from '../../store';

const UserListContainer = React.createClass({

    componentDidMount: function() {
        githubApi.getUserInfo();
    },

    render: function() {
        return (
            <Github />
        );
    }

});

const mapStateToProps = function(store) {
    return {
        github: store.githubState
    };
};

export default connect(mapStateToProps)(UserListContainer);