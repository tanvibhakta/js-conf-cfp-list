import styled from "styled-components";
import ConferenceData from "../conferences.json"
import ListItem from "./ListItem";

const ListContainer = styled.ul`
 `

const List = () => (
    <ListContainer>
        {
            ConferenceData.conferences.map(conference => <ListItem {...conference}></ListItem>)
        }
    </ListContainer>
);
const List = ({chronologyType}) => {
    return (
        <ListContainer>
            {
                ConferenceData.conferences.map(conference => <ListItem {...conference}></ListItem>)
            }
        </ListContainer>
    );
}

export default List;