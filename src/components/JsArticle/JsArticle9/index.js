import React from 'react';
import { Button } from 'react-bootstrap';

const JsArticle9 = ( props ) => {
  const onClick = (e) => {
    e.preventDefault()
    alert("Blackpink in your area ya !!!")
  }

  return (
    <>
      <Button onClick={(e) => onClick(e)}>Alert</Button>
    </>
  )
};

export default JsArticle9;
