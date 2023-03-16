import styled from 'styled-components';
import DescriptionSharedStyle from './styles/descriptionSharedStyle';

const DescriptionInput = styled.input`
    ${DescriptionSharedStyle}

    background: none;
    border: none;
    border-radius: ${({theme}) => theme.borders.radius};
    color: ${({theme}) => theme.colors.text};

    :focus {
        background: ${({theme}) => theme.colors.secondary};
        padding: 4px 8px;
    }
`;

export default DescriptionInput;