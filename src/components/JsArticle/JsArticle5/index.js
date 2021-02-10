import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const JsArticle5 = ( props ) => {
  const [selected, setSelected] = useState('Rose`')


  const onChangeSelect = (e) => {
    setSelected(e.target.value)
  }

  return (
    <>
      <Row>
        <select name="blackpink" onChange={onChangeSelect} value={selected}>
          <option value="Jennie">Jennie</option>
          <option value="Rose`">Rose</option>
          <option value="Lisa">Lisa</option>
          <option value="Jisoo">Jisoo</option>
        </select>
      </Row>
      <Row>
        <p>you selected : {`${selected}`}</p>
      </Row>
    </>
  )
};

export default JsArticle5;
