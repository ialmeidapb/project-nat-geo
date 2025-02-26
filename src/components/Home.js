import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import img1 from '../assets/imgs/image.jpg';
import video1 from '../assets/imgs/video1.mp4';
import Footer from './Footer';
import homeData from '../data/home.json'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Cards Menu
  const filteredStories = selectedCategory === 'All'
    ? homeData.stories
    : homeData.stories.filter(story => story.category === selectedCategory);

 
  const categories = ['All', ...new Set(homeData.stories.map(story => story.category))];


  return (
    <div>
      <header className="hero-section">
        <div className="video-container">
          <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={video1} type="video/mp4" />
            Video not supported by your browser.
          </video>
        </div>
        <div className="overlay">
          <Container>            
            <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
              <Col md={8} className="text-center">
              <h1 className="text-white display-4 geo-title">
              NATIONAL GEOGRAPHIC <span className="second-line">BRAND STORIES</span>
              </h1>
                <p className="text-white lead geo-text">For over 135 years, National Geographic has used the power of science, exploration and storytelling to illuminate the wonders of our world. When we work with clients, we use the same principles - helping to tell our audience the incredible stories of some of the world's most loved and respected brands.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <section className="stories-section py-5">
      <Container>
        {/* Menu de Categorias */}
        <div className="categories-menu">
          {categories.map((category) => (
            <span
              key={category}
              className={`category-item ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Lista de Histórias Filtradas - Exibindo todos os cards de uma vez */}
        <Row className="justify-content-center">
          {filteredStories.map((story, index) => (
            <Col key={index} md={4} className="story-card">
              <Link to={story.link}>
                <div className="story-image" style={{ backgroundImage: `url(${require(`../assets/imgs/cards/${story.image}.png`)})`, backgroundSize: 'cover' }}></div>
                <h5>{story.category}</h5>
                <h4>{story.brand}</h4>
                <p className="summary-text">{story.summary}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>



<a href="https://www.nationalgeographic.com/travel" target="_blank" rel="noopener noreferrer">
    <header className="hero-section-travel" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
      <div className="overlay-travel">
        <Container>
          <Row className="d-flex justify-content-start align-items-center" style={{ minHeight: '100vh' }}>
            <Col md={8}>
              <h1 className="text-white display-4 geo-title-travel">TRAVEL IN FOCUS</h1>
              <span className="separate-bar-img"></span>
              <p className="text-white lead geo-text-travel">Click to explore how the yellow border is a portal to inspiring travel content and impactful brand stories.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  </a>
      <Footer />
    </div>
  );
}

export default Home;
