import { CheckCircleFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

const DoneIcon = styled(CheckCircleFill)`
    cursor: pointer;
    color: ${({theme}) => theme.colors.success};

    :hover, :active {
        color: ${({theme}) => theme.colors.successDark};
    }
`;

export default DoneIcon;