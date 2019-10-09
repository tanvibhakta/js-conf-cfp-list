import styled from "styled-components";
import LinkButton from "./LinkButton";
import {getDisplayDate} from "./utils";
const ListItemContainer = styled.li`
 `

const ListItem = (props) => {
    // TODO: waft checks date for cfp and conf happening with current date and adds badge accordingly
    return (<ListItemContainer>
        <span>{getDisplayDate(props.dateStart)}</span>
        <a href={props.website}>{props.name}</a>
        <span>{props.location.city}, {props.location.country}</span>
        <LinkButton />  {/*This needs an href based on what role it is, so we can't just pass the role*/}
    </ListItemContainer> )
};

export default ListItem;

