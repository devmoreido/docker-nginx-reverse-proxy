import styled from 'styled-components';

const Form = styled.form`
  border-radius: ${({theme}) => theme.borders.radius};
  background: ${({theme}) => theme.colors.secondary};
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 8px;
  gap: 4px;
`;

export default Form;