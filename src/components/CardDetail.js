import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/home.json';
import LightFooter from './LightFooter';

const CardDetail = () => {
  const { id } = useParams();
  const storyId = parseInt(id);
  const story = data.stories.find(story => story.id === storyId);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReturnHome = () => {
    navigate('/');
    setTimeout(() => {
      const cardsSection = document.getElementById('cards-section');
      if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="card-detail-page">
      <div className="content-container">
        <button className="return-home" onClick={handleReturnHome}>
          &lt; Home
        </button>
        {story ? (
          <>
            <h2>{story.brand}</h2>
            <p>{story.fullStory ? story.fullStory : 'Not available.'}</p>
          </>
        ) : (
          <p>Not found</p>
        )}
      </div>
      <LightFooter />
    </div>
  );
};

export default CardDetail;
