import React, { useEffect } from 'react';

const JsArticle7 = ( props ) => {
  const showText = () => {
    document.getElementById("love-message").innerText = 'I Love You'
  }

  const timer = () => {
    const dateVar = new Date();
    const time = dateVar.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
  };

  useEffect(() => {
    const clockId = setInterval(() => {
      timer()
    }, 1000);

    const intervalId = setInterval(() => {
      showText()
    }, 8000)

    return () => {
      clearInterval(intervalId)
      clearInterval(clockId)
    }
  }, [])

  return (
    <>
      <div id="clock"></div>
      <div id="love-message">

      </div>
    </>
  )
};

export default JsArticle7;
