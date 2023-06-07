import PropTypes from 'prop-types';
import { FeedbackButton } from './Feedback.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
     return (
        <div>
            {options.map(option => {
                return (
                    <FeedbackButton 
                    type="button"
                    key={option} 
                    onClick={() => onLeaveFeedback(option)}
                    >
                    {option}
                    </FeedbackButton >
                )
            })}
        </div>
     )
     }




     FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired
     }


