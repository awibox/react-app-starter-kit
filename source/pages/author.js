import React from 'react';
import { connect } from 'react-redux';
import AuthorInfo from '../components/author-info/author-info';
import * as authorApi from '../api/author-api';
import store from '../store';

const AuthorInfoContainer = React.createClass({

  componentDidMount: function() {
    authorApi.getAuthor();
  },

  render: function() {
    return (
      <AuthorInfo author={this.props.author} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    author: store.authorState.author
  };
};

export default connect(mapStateToProps)(AuthorInfoContainer);
