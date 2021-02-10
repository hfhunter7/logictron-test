import React, { useEffect } from 'react';
import './index.css'
const JsArticle16 = ( props ) => {
  useEffect(() => {
    const element = document.getElementById("article-16-red-box")
    element.classList.add('box-move')
    element.classList.add('move-bottom')
  }, [])

  return (
    <>
      ดูโค้ดได้ที่ไฟล์ JsArticle 16
      <div style={{ position: 'relative' }}>
        <div id="article-16-red-box">

        </div>
      </div>
    </>
  )
};

export default JsArticle16;
