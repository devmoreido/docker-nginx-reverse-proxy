import styled from "styled-components";

const Button = styled.button`
    display:flex;
    align-items: center;
    gap: 6px;
    border: none;
    padding: 5px 12px;
    border-radius: ${({theme}) => theme.borders.radius};
    color: ${({theme}) => theme.colors.text};
    background: ${({theme}) => theme.colors.secondary};
    cursor: pointer;

    :hover {
        background: ${({theme}) => theme.colors.danger};
        color: ${({theme}) => theme.colors.textLight};
    }

    :active {
        background: ${({theme}) => theme.colors.dangerDark};
        color: ${({theme}) => theme.colors.textLight};
    }
`;

export default Button;