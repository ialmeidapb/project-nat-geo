import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const StoryDetail = () => {
  const { id } = useParams();

  return (
    <Container className="py-5">
      <h2>Detalhes da História {id}</h2>
      <p>Este é o conteúdo detalhado da história {id}...</p>
    </Container>
  );
}

export default StoryDetail;
