import React from 'react';
import { Container } from 'react-bootstrap';
import data from '../data/footer.json'

const Footer = () => {

  return (
    <footer className="text-white">
      <Container className='container-footer'>
         <h1 className='footer-title'>Global Multiplatform Reach</h1>
         <span className='separate-bar'></span>
         <div className="d-flex flex-column flex-md-row justify-content-evenly">
      {data.items.map((item, index) => (
        <div key={index} className="text-center mb-4 mb-md-0">
          <img
            src={require(`../assets/imgs/icons/${item.icon}.svg`)} 
            className="footer-icons" 
            alt={item.icon} 
          />
          <div className="p-3 mt-3">
            {item.words.map((word, i) => (
              <div key={i} className={`mb-4 word-${i + 1}`}>
                {word}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="container-custom">
      <div className="row row-cols-2 row-cols-md-4 justify-content-evenly">
        {data.social.map((item, index) => (
          <div key={index} className="col-custom text-center mb-4">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../assets/imgs/icons/social/${item.icon}`)} 
                className="footer-icons-custom" 
                alt={item.icon} 
              />
              </a>
              <div className="p-3 ml-3">
                <div className="word-custom">{item.words[0]}</div>
                <div className="word-custom">{item.words[1]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </Container>
    </footer>
  );
}

export default Footer;
