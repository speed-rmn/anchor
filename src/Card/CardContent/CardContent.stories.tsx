// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import CardContent from './CardContent.component';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Card/CardContent', module).add('Default', () => (
    <StyledStory>
        <CardContent>
            <p>
                This is the container for card content. You can specify it's
                padding via the <code>Card</code> component.
            </p>
        </CardContent>
    </StyledStory>
));