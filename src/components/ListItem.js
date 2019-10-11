import styled from "styled-components";
import LinkButton from "./LinkButton";
import {getDisplayDate} from "./utils";

const ListItemContainer = styled.li`
    display: grid;
    grid-template-areas: 
        "date"
        "name"
        "location"
        "link-button";
    padding-bottom: 1.5rem;
    
    .date {
        grid-area: date;
        font-weight: 300;
        line-height: 1;
        font-size: ${props => props.theme.fontSizes.small};
        text-transform: uppercase;
    }

    .name {
        grid-area: name;
        font-weight: 500;
        align-self: center;
        font-size: ${props => props.theme.fontSizes.large};
        display: inline-block;
    }
    
    .location {
        grid-area: location;
        line-height: 1;
        font-size: ${props => props.theme.fontSizes.medium};
        text-transform: capitalize;
    }
    
    .link-button {
        grid-area: link-button;
        font-size: ${props => props.theme.fontSizes.medium};
        margin-top: 0.125rem;
    }
    
    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        padding-bottom: 1rem;

        .name {
            align-self: baseline;
        }
        
        .name, .date, .location {
            margin-right: 0.5rem;
        }

    }
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

    return (<ListItemContainer {...props}>
        <div className="date">{getDisplayDate(props.dateStart)}</div>
        <a className="name" href={props.website}>{props.name}</a>
        <div className="location">{props.location.city}, {props.location.country}</div>
        {badge.type ? (<LinkButton type={badge.type} href={badge.href}>{badge.text}</LinkButton>) : null}
    </ListItemContainer> )
};

export default ListItem;

