import styled from "styled-components";
import List from "../components/List";

const HomeContainer = styled.div`
`

const Home = ({route}) => {
	let chronologyType = route === "/" ? "/upcoming" : route;
	chronologyType = chronologyType.replace("/", "");

	return (
		<HomeContainer>
			<List chronologyType={chronologyType}/>
		</HomeContainer>
	);
}

export default Home;
