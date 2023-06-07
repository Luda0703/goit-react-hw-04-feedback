import PropTypes from 'prop-types';
import { SectionDiv} from './Section.styled';


export const Section = ({title, children}) => {
    return (
        <SectionDiv>
            <h1>{title}</h1>
            {children}
        </SectionDiv>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}


    
    


