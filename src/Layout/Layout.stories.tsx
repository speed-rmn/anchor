// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { text, color } from '@storybook/addon-knobs';
// COMPONENT
import Layout, {
    DEFAULT_LAYOUT_WIDTH,
    DEFAULT_CONTENT_WIDTH,
    TRANSPARENT,
} from './Layout.component';
import { colors } from '../theme';
import { Header } from './Header/Header.component';
import { Footer } from './Footer/Footer.component';
import { Page } from './Page/Page.component';
// README
// import * as README from './README.md';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled.div`
    background: ${colors.white.base};
`;

// Stories
// ------------------------------------------------------------------------------------------------------------------
storiesOf('Components/Layout', module).add('Default', () => (
    <StyledStory>
        <Page header={<Header />} footer={<Footer />}>
            <Layout
                layoutWidth={text('Layout Width', DEFAULT_LAYOUT_WIDTH)}
                contentWidth={text('Content Width', DEFAULT_CONTENT_WIDTH)}
                layoutBackgroundColor={color(
                    'Layout Background Color',
                    TRANSPARENT
                )}
                contentBackgroundColor={color(
                    'Content Background Color',
                    TRANSPARENT
                )}
            >
                <h1>Default Layout</h1>
                <h2>This example uses the Page component as a wrapper.</h2>
            </Layout>
        </Page>
    </StyledStory>
));

// storiesOf('Components/Layout/Page', module)
//     .addParameters({
//         readme: {
//             sidebar: README,
//         },
//     })
//     .add('default', () => (
//         <StyledStory>
//             <Page>Story</Page>
//         </StyledStory>
//     ));
