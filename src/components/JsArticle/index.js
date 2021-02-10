import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import JsArticle10 from './JsArticle10';
import JsArticle11 from './JsArticle11';
import JsArticle12 from './JsArticle12';
import JsArticle13 from './JsArticle13';
import JsArticle14 from './JsArticle14';
import JsArticle15 from './JsArticle15';
import JsArticle16 from './JsArticle16';
import JsArticle17 from './JsArticle17';
import JsArticle2 from './JsArticle2';
import JsArticle3 from './JsArticle3';
import JsArticle4 from './JsArticle4';
import JsArticle5 from './JsArticle5';
import JsArticle6 from './JsArticle6';
import JsArticle7 from './JsArticle7';
import JsArticle8 from './JsArticle8';
import JsArticle9 from './JsArticle9';

const JsArticle = ( props ) => {
  const { id } = useParams()

  const renderArticle = () => {
    switch (parseInt(id)) {
      case 2:
        return <JsArticle2 />
      case 3:
        return <JsArticle3 />
      case 4:
        return <JsArticle4 />
      case 5:
        return <JsArticle5 />
      case 6:
        return <JsArticle6 />
      case 7:
        return <JsArticle7 />
      case 8:
        return <JsArticle8 />
      case 9:
        return <JsArticle9 />
      case 10:
        return <JsArticle10 />
      case 11:
        return <JsArticle11 />
      case 12:
        return <JsArticle12 />
      case 13:
        return <JsArticle13 />
      case 14:
        return <JsArticle14 />
      case 15:
        return <JsArticle15 />
      case 16:
        return <JsArticle16 />
      case 17:
        return <JsArticle17 />
      default:
        return null
    }
  }

  return (
    <Container>
      แบบทดสอบ Js ข้อที่ {id}
      <div className="main-layout">
        {renderArticle()}
      </div>
    </Container>
  )
};

export default JsArticle;
