import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const JsArticle3 = ( props ) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <Row>
        <input placeholder="input text here..." onChange={onChange}/>
      </Row>
      <Row>
        <p>my text {text}</p>
      </Row>
    </>
  )
};

export default JsArticle3;
