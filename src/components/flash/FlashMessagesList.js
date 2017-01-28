import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';

const FlashMessagesList = ({messages, deleteFlashMessage}) => {
  return (
    <div className="messages-list">
      {messages.map(message =>
        <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
      )}
    </div>
  );
};

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
