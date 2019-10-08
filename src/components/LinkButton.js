import styled from "styled-components";

const LinkContainer = styled.a`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  color: black;
  background-color: aquamarine;
`

const LinkButton = ({children, href}) => (
    <LinkContainer href={href} role="button">
        {children}
    </LinkContainer>
);

export default LinkButton;
