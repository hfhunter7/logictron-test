import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import CssArticle2 from './CssArticle2';
import CssArticle3 from './CssArticle3';
import CssArticle4 from './CssArticle4';
import CssArticle5 from './CssArticle5';
import CssArticle6 from './CssArticle6';
import CssArticle7 from './CssArticle7';
import CssArticle8 from './CssArticle8';
import CssArticle9 from './CssArticle9';
import CssArticle10 from './CssArticle10';

const CssArticle = ( props ) => {
  const { id } = useParams()

  const renderArticle = () => {
    switch (parseInt(id)) {
      case 2:
        return <CssArticle2 />
      case 3:
        return <CssArticle3 />
      case 4:
        return <CssArticle4 />
      case 5:
        return <CssArticle5 />
      case 6:
        return <CssArticle6 />
      case 7:
        return <CssArticle7 />
      case 8:
        return <CssArticle8 />
      case 9:
        return <CssArticle9 />
      case 10:
        return <CssArticle10 />
      default:
        return null
    }
  }

  return (
    <Container>
       แบบทดสอบ Css ข้อที่ {id}
       <div className="main-layout">
         {renderArticle()}
       </div>
    </Container>
  )
};

export default CssArticle;
