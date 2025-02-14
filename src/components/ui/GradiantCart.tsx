import React from 'react';
import styled from 'styled-components';

interface Category {
  category: {
    id: number;
    url: string;
    title: string;
    description: string;
  };
}

const GradientCard = (props: Category) => {
  const { category } = props;
  const { url, title, description } = category;

  return (
    <CardContainer url={url}>
      <GradientOverlay />
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
    </CardContainer>
  );
};

export default GradientCard;

const CardContainer = styled.div<{ url: string }>`
  position: relative;
  width: 100%;
  height: 400px;
  background: url(${({ url }) => url}) center/cover no-repeat;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(128, 128, 128, 0.8), transparent);
`;

const CardContent = styled.div`
  position: relative;
  color: white;
  z-index: 1;
`;
