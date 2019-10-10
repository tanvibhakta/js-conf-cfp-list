import styled from "styled-components";
import ConferenceData from "../conferences.json"
import ListItem from "./ListItem";
import {dynamicSort, filterConferencesChronologically} from "./utils";

const ListContainer = styled.ul`
all: unset;
 `

const List = ({chronologyType}) => {

    //TODO: waft datesort into upcoming and past.
    let filteredConferences = ConferenceData.conferences.filter(filterConferencesChronologically(chronologyType));

    return (
        <ListContainer>
            {
                filteredConferences.sort(dynamicSort("dateStart")).map(
                    conference => <ListItem {...conference}></ListItem>
                )
            }
        </ListContainer>
    );
}

export default List;