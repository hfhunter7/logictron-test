import { Row } from 'react-bootstrap';
import React from 'react';

const JsArticle15 = ( props ) => {
  const arr = ['adam','wanda','john','sean','danny','jean']
  const filterArr = ['adam','sean', 'jean']

  const getFilterValue = () => {
    return arr.filter(item => {
      return filterArr.includes(item)
    })
  }

  return (
    <>
      ดูโค้ดได้ที่ไฟล์ JsArticle 15
      <Row>
        old arr :
        {arr.join(",")}
      </Row>
      <Row>
        filter arr :
        {getFilterValue().join(",")}
      </Row>
    </>
  )
};

export default JsArticle15;
