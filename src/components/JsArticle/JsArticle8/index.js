import React, { useEffect } from 'react';

function JsArticle8( props ){
  let timer = 5000

  const changeTime = () => {
    timer = timer * 1.2
  }

  useEffect(() => {
    const msgElement = document.getElementById("like-message")
    changeTime()
    let intervalId = setInterval(() => {
      if(msgElement !== null){
        msgElement.innerHTML += "<p>I Like You</p>"
      }
    }, timer)

    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <div id="like-message">

    </div>
  )
};

export default JsArticle8;
