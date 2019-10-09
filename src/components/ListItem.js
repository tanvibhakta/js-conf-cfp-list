import styled from "styled-components";
import LinkButton from "./LinkButton";
import {getDisplayDate} from "./utils";
const ListItemContainer = styled.li`
 `

const ListItem = (props) => {

    let badge =  {
        type: undefined,
        href: undefined,
        text: undefined
    };

    let today = new Date().toISOString();

    if(props.cfp && props.cfp.dateStart) {
        if(props.cfp.dateStart <= today && today <= props.cfp.dateEnd) {
            badge.type = "openCfp";
            badge.href = props.cfp.cfpWebsite || props.website;
            badge.text = "Call For Papers";
        }
        else if (props.dateStart <= today && today <= props.dateEnd) {
            badge.type = "happeningNow";
            badge.href = props.website;
            badge.text = "Happening Now";
        }
    }

    return (<ListItemContainer>
        <span>{getDisplayDate(props.dateStart)}</span>
        <a href={props.website}>{props.name}</a>
        <span>{props.location.city}, {props.location.country}</span>
        {badge.type ? (<LinkButton type={badge.type} href={badge.href}>{badge.text}</LinkButton>) : null}
    </ListItemContainer> )
};

export default ListItem;

