import { Row } from 'react-bootstrap';
import React from 'react';

const JsArticle14 = ( props ) => {
  const arr = [1,9,9,3,2,1,3,6]
  let newArr = []
  const multiply = () => {
    arr.forEach((item, index) => {
      newArr.push(item * (index + 1))
    })
  }

  return (
    <>
      {multiply()}
      ดูโค้ดได้ที่ไฟล์ JsArticle 14
      <Row>
        old arr :
        {arr.join(",")}
      </Row>
      <Row>
        new arr : {newArr.join(",")}
      </Row>
    </>
  )
};

export default JsArticle14;
