import React from 'react';
import * as Type from '../../prop-types';

const containerStyle = {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `flex-start`,
  width: `100%`,
  margin: `20px`,
  padding: `20px`,
  textAlign: `center`,
  color: `#ff0000`,
};

const titleStyle = {
  fontSize: `24px`,
  lineHeight: 1.1667,
  fontWeight: 700,
  fontStyle: `oblique`,
};

const Message = (props) => {
  const {text} = props;

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Attention</h2>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: Type.MESSAGE_TEXT.isRequired,
};

export default Message;
