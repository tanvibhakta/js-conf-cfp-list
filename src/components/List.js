import styled from "styled-components";
import ConferenceData from "../conferences.json"
import ListItem from "./ListItem";
import {dynamicSort} from "./utils";

const ListContainer = styled.ul`
 `

const List = ({chronologyType}) => {

    //TODO: waft datesort into upcoming and past.

    return (
        <ListContainer>
            {
                ConferenceData.conferences.sort(dynamicSort("dateStart")).map(
                    conference => <ListItem {...conference}></ListItem>
                )
            }
        </ListContainer>
    );
}

export default List;