import styled from "styled-components";

const LinkContainer = styled.a`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  color: black;
  background-color: ${props=> props.type === 'openCfp' ? 'lavender' : ''};
  background-color: ${props=> props.type === 'happeningNow' ? 'yellow' : ''};
  background-color: ${props=> !props.type ? 'aquamarine' : ''};

`

const LinkButton = (props) => (
    <LinkContainer {...props} role="button">
        {props.children}
    </LinkContainer>
);

export default LinkButton;
