// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from '@xstyled/styled-components';
import { text } from '@storybook/addon-knobs';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import {
    Page,
    DEFAULT_HEADER_HEIGHT,
    DEFAULT_FOOTER_HEIGHT,
} from './Page.component';
import { Footer } from '../Footer/Footer.component';
import { RootTheme } from '../../theme';
// README
import * as README from './README.md';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled('div')`
    width: 100%;
`;

// Stories
// ------------------------------------------------------------------------------------------------------------------
storiesOf('Components/Layout', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Page', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Page
                    footer={<Footer />}
                    headerHeight={text('Header Height', DEFAULT_HEADER_HEIGHT)}
                    footerHeight={text('Footer Height', DEFAULT_FOOTER_HEIGHT)}
                >
                    <h1>Page</h1>
                    <h2>
                        Main wrapper, includes a header and footer and content
                    </h2>
                </Page>
            </StyledStory>
        </ThemeProvider>
    ));
