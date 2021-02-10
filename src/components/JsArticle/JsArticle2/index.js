import React, { useEffect } from 'react';

const JsArticle2 = ( props ) => {
  useEffect(() => {
    document.getElementById("box").style.backgroundColor = 'red'
    document.getElementById("box").style.width = '100px'
    document.getElementById("box").style.height = '100px'
    document.getElementById("box").style.opacity = '0.7'
  }, [])

  return (
    <>
      <div id="box"></div>
    </>
  )
};

export default JsArticle2;
