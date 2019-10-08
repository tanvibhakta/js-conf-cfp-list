import { Link } from 'preact-router/match';
import styled from "styled-components";
import LinkButton from './LinkButton'

const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

   nav {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-self: end;
    grid-gap: 1rem;

   }
 `

const Header = () => (
    <HeaderContainer>
        <h1>JS Conferences List</h1>
        <nav>
            <LinkButton href="/upcoming">Upcoming</LinkButton>
            <LinkButton href="/past">Past</LinkButton>
            <LinkButton href="https://github.com/tanvibhakta/js-conf-cfp-list">Add</LinkButton>
        </nav>
    </HeaderContainer>
);

export default Header;