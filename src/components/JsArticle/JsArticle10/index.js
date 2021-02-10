import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const JsArticle10 = ( props ) => {
  const [text, setText] = useState('')
  const onClick = (e) => {
    e.preventDefault()
    alert("text reverse is = " + reverse(text))
  }

  const reverse = (strings) => {
    let newText = ''
    for (let i = 0;i < strings.length; i++){
      newText += strings.charAt(strings.length - (i + 1))
    }

    return newText
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={onChange}/>
      <Button onClick={(e) => onClick(e)}>Reverse</Button>
    </>
  )
};

export default JsArticle10;
