import styled from "styled-components";

const LinkContainer = styled.a`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  color: black;
  justify-self: start;
  background-color: ${props=> props.type === 'openCfp' ? 'lavender' : ''};
  background-color: ${props=> props.type === 'happeningNow' ? 'yellow' : ''};
  background-color: ${props=> !props.type ? 'aquamarine' : ''};
  padding: ${props=> props.type && '0.25rem 0.5rem'};
`

const LinkButton = (props) => (
    <LinkContainer {...props} className="link-button" role="button">
        {props.children}
    </LinkContainer>
);

export default LinkButton;
