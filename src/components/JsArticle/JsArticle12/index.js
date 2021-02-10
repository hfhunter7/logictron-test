import API from '../../../api/Http'
import React, { useEffect } from 'react';

const JsArticle12 = ( props ) => {
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = API.get('/users.json')
    console.log('res', response)
  }

  return (
    <>
      ดูโค้ดได้ที่ไฟล์ JsArticle 12
    </>
  )
};

export default JsArticle12;
