import styled from "styled-components";

const HomeContainer = styled.div`
padding: 56px 20px;
min-height: 100%;
width: 100%;
`

const Home = () => (
	<HomeContainer>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</HomeContainer>
);

export default Home;
