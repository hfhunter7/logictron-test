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
        ข้อที่ 1 ดูที่ไฟล์ index.html ครับ
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
      <hr />
      <Row>
        <p>แบบทดสอบ js</p>
      </Row>
      <Row>
        ข้อที่ 1
        <p>{`document.getElementById("mylist")`}</p>
      </Row>
      <Row>
        <Link to="/js/article/2">ข้อที่ 2</Link>
      </Row>
      <Row>
        <Link to="/js/article/3">ข้อที่ 3</Link>
      </Row>
      <Row>
        <Link to="/js/article/4">ข้อที่ 4</Link>
      </Row>
      <Row>
        <Link to="/js/article/5">ข้อที่ 5</Link>
      </Row>
      <Row>
        <Link to="/js/article/6">ข้อที่ 6</Link>
      </Row>
      <Row>
        <Link to="/js/article/7">ข้อที่ 7</Link>
      </Row>
      <Row>
        <Link to="/js/article/8">ข้อที่ 8</Link>
      </Row>
      <Row>
        <Link to="/js/article/9">ข้อที่ 9</Link>
      </Row>
      <Row>
        <Link to="/js/article/10">ข้อที่ 10</Link>
      </Row>
      <Row>
        <Link to="/js/article/11">ข้อที่ 11</Link>
      </Row>
      <Row>
        <Link to="/js/article/12">ข้อที่ 12</Link>
      </Row>
      <Row>
        <Link to="/js/article/13">ข้อที่ 13</Link>
      </Row>
      <Row>
        <Link to="/js/article/14">ข้อที่ 14</Link>
      </Row>
      <Row>
        <Link to="/js/article/15">ข้อที่ 15</Link>
      </Row>
      <Row>
        <Link to="/js/article/16">ข้อที่ 16</Link>
      </Row>
      <Row>
        <Link to="/js/article/17">ข้อที่ 17</Link>
      </Row>
    </Container>
  )
};

export default Home;
