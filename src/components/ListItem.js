import styled from "styled-components";
import LinkButton from "./LinkButton";
const ListItemContainer = styled.li`
 `

const ListItem = (props) => (
    <ListItemContainer>
        <span>{props.dateStart}</span>
        <a href={props.website}>{props.name}</a>
        <span>{props.location.city}, {props.location.country}</span>

    </ListItemContainer>
);

export default ListItem;