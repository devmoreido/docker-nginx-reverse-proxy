import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: none;
  padding: 12px 0;
  flex-basis: 100%;
  color: ${({theme}) => theme.colors.text};
`;

export default Input;