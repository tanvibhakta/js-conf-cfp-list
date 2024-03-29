import { Link } from 'preact-router/match';
import styled from "styled-components";
import LinkButton from './LinkButton'

const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #ddd;
    margin-bottom: 2rem;

    h1 {
        margin: 0;
        padding-top: 1.5rem;
    }
    
    nav {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: start;
        justify-self: end;
        grid-gap: 1rem;
        width: 100%;
    }
 `

const Header = () => (
    <HeaderContainer>
        <h1>JS Conferences List</h1>
        <nav>
            <LinkButton href="/">Upcoming</LinkButton>
            <LinkButton href="/past">Past</LinkButton>
            <LinkButton href="https://github.com/tanvibhakta/js-conf-cfp-list">Add</LinkButton>
        </nav>
    </HeaderContainer>
);

export default Header;