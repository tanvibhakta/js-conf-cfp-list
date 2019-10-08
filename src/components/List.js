import styled from "styled-components";
import ConferenceData from "../conferences.json"

const ListContainer = styled.div`
 `

const List = () => (
    <ListContainer>
        {
            ConferenceData.conferences.map(conference => <h3>{conference.name}</h3>)
        }
    </ListContainer>
);

export default List;