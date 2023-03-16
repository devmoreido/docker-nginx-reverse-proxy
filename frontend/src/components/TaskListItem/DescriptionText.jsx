import styled from 'styled-components';
import DescriptionSharedStyle from './styles/descriptionSharedStyle';

const DescriptionText = styled.span`
    ${DescriptionSharedStyle}
    
    text-decoration: line-through;
    color: ${({theme}) => theme.colors.success};
`;

export default DescriptionText;