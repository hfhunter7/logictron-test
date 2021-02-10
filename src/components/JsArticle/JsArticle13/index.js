import { Button, Row } from 'react-bootstrap';
import API from '../../../api/Http'
import React from 'react';

const JsArticle13 = ( props ) => {
  const onClick = async (e) => {
    e.preventDefault()
    const body = {
      name: 'John',
      lastname: 'Adam',
      age: 28
    }
    const response = API.post(`/save`, body)
    console.log('res', response)

  }

  return (
    <>
      ดูโค้ดได้ที่ไฟล์ JsArticle 13
      <Row>
        <Button onClick={(e) => onClick(e)}>บันทึก</Button>
      </Row>
    </>
  )
};

export default JsArticle13;
