
import Button from '../Button/Button';
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCountContainer,
  Count,
  Image,
  ImageControl,
} from './styles';
import { FeedbackProps } from './types';
import likeImage from '../../assets/like.png';

function Feedback({
  likes,
  dislikes,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <ImageControl onClick={onLike}>
    
            <Image src={likeImage} alt="Like img" />
          </ImageControl>
          <Count>{likes}</Count>
        </ButtonWithCountContainer>
      
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
