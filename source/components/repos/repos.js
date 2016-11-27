import React from 'react';
import { connect } from 'react-redux';
import ReposList from '../../views/repos-list';
import * as reposApi from '../../api/repos-api';
import store from '../../store';

const ReposListContainer = React.createClass({

    componentDidMount: function() {
        reposApi.getRepos();
    },

    render: function() {
        return (
            <ReposList users={this.props.users} />
        );
    }

});

const mapStateToProps = function(store) {
    return {
        users: store.reposState.repos
    };
};

export default connect(mapStateToProps)(ReposListContainer);
