// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessagesList from './flash/FlashMessagesList';

import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          loading={this.props.loading}
        />
        <div className="container">
          <FlashMessagesList />
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
