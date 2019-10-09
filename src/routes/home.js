import styled from "styled-components";
import List from "../components/List";

const HomeContainer = styled.div`
`

const Home = ({path}) => {
	let chronologyType = path === "/" ? "/upcoming" : path;
	chronologyType = chronologyType.replace("/", "");

	return (
		<HomeContainer>
			<List chronologyType={chronologyType}/>
		</HomeContainer>
	);
}

export default Home;
