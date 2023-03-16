import { Pen } from 'react-bootstrap-icons';
import styled from 'styled-components';

const EditIcon = styled(Pen)`
    cursor: pointer;
    color: ${({theme}) => theme.colors.text};

    :hover {
        color: ${({theme}) => theme.colors.success};
    }

    :active {
        color: ${({theme}) => theme.colors.successDark};
    }
`;

export default EditIcon;