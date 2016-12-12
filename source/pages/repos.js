import React from 'react';
import { connect } from 'react-redux';
import ReposList from '../components/repos-list/repos-list';
import * as reposApi from '../api/repos-api';
import store from '../store';

const ReposListContainer = React.createClass({

    componentDidMount: function() {
        reposApi.getRepos();
    },

    render: function() {
        return (
            <ReposList repos={this.props.repos} />
        );
    }

});

const mapStateToProps = function(store) {
    return {
        repos: store.repos
    };
};

export default connect(mapStateToProps)(ReposListContainer);
