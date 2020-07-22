import React, { Fragment } from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Card from './Card/Card';
import Text from './Text/Text';

function renderText(value, props) {
    return <Text {...props}>{value}</Text>;
}

function OPTimelineItem(props) {
    const {
        name,
        nameProps,
        title,
        titleProps,
        type,
        description,
        descriptionProps,
        oppositeDescription,
        oppositeDescriptionProps,
        image,
        imageProps,
    } = props;

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                {renderText(oppositeDescription, oppositeDescriptionProps)}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>{type}</TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Card>
                    <Fragment>
                        {renderText(name, nameProps)}
                        {renderText(title, titleProps)}
                        {renderText(description, descriptionProps)}
                        {renderText(image, imageProps)}
                    </Fragment>
                </Card>
            </TimelineContent>
        </TimelineItem>
    );
}

export default OPTimelineItem;
