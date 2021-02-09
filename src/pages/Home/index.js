import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ( props ) => {
  return (
    <Container>
      <Row>
        <p>แบบทดสอบ css</p>
      </Row>
      <Row>
        <Link to="/css/article/2">ข้อที่ 2</Link>
      </Row>
      <Row>
        <Link to="/css/article/3">ข้อที่ 3</Link>
      </Row>
      <Row>
        <Link to="/css/article/4">ข้อที่ 4</Link>
      </Row>
      <Row>
        <Link to="/css/article/5">ข้อที่ 5</Link>
      </Row>
      <Row>
        <Link to="/css/article/6">ข้อที่ 6</Link>
      </Row>
      <Row>
        <Link to="/css/article/7">ข้อที่ 7</Link>
      </Row>
      <Row>
        <Link to="/css/article/8">ข้อที่ 8</Link>
      </Row>
      <Row>
        <Link to="/css/article/9">ข้อที่ 9</Link>
      </Row>
      <Row>
        <Link to="/css/article/10">ข้อที่ 10</Link>
      </Row>
    </Container>
  )
};

export default Home;
