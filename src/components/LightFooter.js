import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../assets/styles/LightFooter.css';

const LightFooter = () => {
  return (
    <section className="light-footer">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="nat-geo">National Geographic</h5>
          </Col>
          <Col md={3}>
            <h5>OUR SITES</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent border-0">
                <a href="/">Home</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="/">About us</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="/">Contact us</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5>JOIN US</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent border-0">
                <a href="/">Subscribe</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="/">Terms of Service</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="/">Help</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5>Follow us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/natgeo" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://x.com/natgeo" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/natgeo" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.youtube.com/user/NationalGeographic" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>Copyright &copy; 2015-2025 National Geographic Partners, LLC. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LightFooter;
