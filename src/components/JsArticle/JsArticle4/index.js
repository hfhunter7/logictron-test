import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const JsArticle4 = ( props ) => {
  const [checked, setChecked] = useState(true)
  const [selected, setSelected] = useState('Rose`')

  const onChange = (e) => {
    setChecked(e.target.checked)
  }

  const onChangeSelect = (e) => {
    setSelected(e.target.value)
  }

  return (
    <>
      <Row>
        <input type="checkbox" onChange={onChange}/>
      </Row>
      <Row>
        <p>checked : {`${checked}`}</p>
      </Row>
      <hr />
      <Row>
        <input type="radio" id="male" name="blackpink" value="Jennie" onClick={onChangeSelect}/>
        <label htmlFor="male">Jennie</label><br/>
        <input type="radio" id="female" name="blackpink" value="Rose`" onClick={onChangeSelect}/>
        <label htmlFor="female">Rose</label><br/>
        <input type="radio" id="other" name="blackpink" value="Lisa" onClick={onChangeSelect}/>
        <label htmlFor="other">Lisa</label><br/>
        <input type="radio" id="other" name="blackpink" value="Jisoo" onClick={onChangeSelect}/>
        <label htmlFor="other">Jisoo</label><br/>
      </Row>
      <Row>
        <p>radio selected : {`${selected}`}</p>
      </Row>
    </>
  )
};

export default JsArticle4;
