import React, { useEffect } from 'react';

const JsArticle17 = ( props ) => {
  useEffect(() => {
    const bodyElement = document.getElementById("body")
    const parentDiv = document.createElement('div')
    parentDiv.style.border = '1px solid red'
    parentDiv.style.height = '150px'
    parentDiv.style.padding = '10px'
    parentDiv.id = 'parent'

    const childDiv = document.createElement('div')
    childDiv.className = 'child'
    childDiv.style.border = '1px solid blue'
    childDiv.style.backgroundColor = 'green'
    childDiv.style.height = '75px'
    childDiv.style.padding = '10px'

    const childSpan = document.createElement('span')
    childSpan.id = 'inner-message'
    childSpan.innerText = 'Hi..'

    childDiv.appendChild(childSpan)
    parentDiv.appendChild(childDiv)
    bodyElement.appendChild(parentDiv)
  }, [])

  return (
    <>
      ดูโค้ดได้ที่ไฟล์ JsArticle 17
      <div id="body">

      </div>
    </>
  )
};

export default JsArticle17;
