import { XCircle } from 'react-bootstrap-icons';
import styled from 'styled-components';

const RemoveIcon = styled(XCircle)`
    cursor: pointer;
    color: ${({theme}) => theme.colors.text};
    
    :hover {
        color: ${({theme}) => theme.colors.danger};
    }

    :active {
        color: ${({theme}) => theme.colors.dangerDark};
    }
`;

export default RemoveIcon;