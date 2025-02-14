import { Star } from 'lucide-react';
import styled from 'styled-components';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const StyledStar = styled(Star)<{ filled: boolean }>`
  width: 12px;
  height: 12px;
  color: ${({ filled }) => (filled ? 'gold' : '#ccc')};
  fill: ${({ filled }) => (filled ? 'gold' : 'none')};
`;

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <StarContainer>
      {Array.from({ length: maxStars }).map((_, i) => (
        <StyledStar key={i} filled={i < rating} />
      ))}
    </StarContainer>
  );
};

export default StarRating;
