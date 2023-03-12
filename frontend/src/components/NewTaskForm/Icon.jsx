import styled from 'styled-components';
import { Plus } from 'react-bootstrap-icons';

const Icon = styled(Plus)`
  color: ${({theme}) => theme.colors.text};
`;

export default Icon;