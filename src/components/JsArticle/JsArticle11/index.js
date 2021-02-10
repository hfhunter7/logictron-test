import React from 'react';
import { Button, Row } from 'react-bootstrap';
import myVideo from '../../../images/test.mp4'

const JsArticle11 = ( props ) => {
  const onPlay = (e) => {
    e.preventDefault()
    document.getElementById("video").play()
  }

  const onPause = (e) => {
    e.preventDefault()
    document.getElementById("video").pause()
  }

  return (
    <>
      <Row>
        <Button onClick={(e) => onPlay(e)}>Play</Button>
        <Button onClick={(e) => onPause(e)}>Pause</Button>
      </Row>
      <Row>
        <video id="video" width="500" height="360" controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </Row>
    </>
  )
};

export default JsArticle11;
