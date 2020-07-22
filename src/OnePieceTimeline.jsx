import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import OPTimelineItem from './components/OPTimelineItem';

const timelineMock = [
    {
        name: '???name???',
        nameProps: { capitalize: true },
        title: 'Portgas D. Rouge',
        type: 'death',
        description: 'Morre Portgas D. Rouge porque fico com o fiote na barriga por muito tempo',
        oppositeDescription: 'January 1st',
        image: 'seria bacana se a gente fizesse algo pra fazer a img crescer se o cara clicar',
    },
    {
        name: '???name1???',
        title: 'Portgas D. Ace',
        type: 'Birth',
        description: `Smol desc`,
        oppositeDescription: 'January 1st',
        image: 'link da img aqui - baby ace',
    },
    {
        name: '???name2???',
        nameProps: { italic: true },
        title: 'Capeleto',
        type: 'Birth',
        description: `Mussum Ipsum, cacilds vidis litro abertis.
            Casamentiss faiz malandris se pirulitá. Diuretics paradis num copo é motivis de denguis.
            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
            Aenean aliquam molestie leo, vitae iaculis nisl.`,
        oppositeDescription: 'January 20th',
        oppositeDescriptionProps: { bold: true },
        image: 'link da img aqui - no pics',
    },
];

export default function OnePieceTimeline() {
    return (
        <Timeline>
            {timelineMock.map((item) => (
                <OPTimelineItem {...item} />
            ))}
        </Timeline>
    );
}
