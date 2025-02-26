import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/home.json';
import LightFooter from './LightFooter';

const CardDetail = () => {
  const { id } = useParams();
  const storyId = parseInt(id);
  const story = data.stories.find(story => story.id === storyId);

  return (
    <div className="card-detail-page">
      <div className="content-container">
        <a href="/" className="return-home">&lt; Home</a>
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
