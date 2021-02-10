import React from 'react';
import { Row } from 'react-bootstrap';

class Summary {
  set price(price){
    this._price = price
  }

  set amount(amount){
    this._amount = amount
  }

  set discount(discount){
    this._discount = discount
  }

  get summary(){
    return (this._amount * this._price) - this._discount
  }

}

const JsArticle6 = () => {
  let summary = new Summary()
  summary.amount = 100
  summary.price = 50
  summary.discount = 500

  console.log('summary', summary.summary)

  return (
    <div>
      <Row>
        ดูเพิ่มเติมได้ที่ JsArticle 6
      </Row>
      {summary.summary}
    </div>
  )
}

export default JsArticle6;

