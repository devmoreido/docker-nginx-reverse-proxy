import styled from 'styled-components';

const PageTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 900;
    color: ${({theme}) => theme.colors.text};
`;

export default PageTitle;