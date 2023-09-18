// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Message in Child: {props.message}</p>
    </div>
  );
}

export default ChildComponent;
