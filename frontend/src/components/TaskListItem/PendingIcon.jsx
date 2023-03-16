import { Circle } from 'react-bootstrap-icons';
import styled from 'styled-components';

const PendingIcon = styled(Circle)`
    cursor: pointer;
    color: ${({theme}) => theme.colors.text};

    :hover {
        color: ${({theme}) => theme.colors.success};
    }

    :active {
        color: ${({theme}) => theme.colors.successDark};
    }
`;

export default PendingIcon;