// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Grid, Cell } from '../index';
import {
    generateBreakpointCSS,
    getBreakpointKey,
    sortBreakpoints,
} from '../utils';
import { RootTheme } from '../../theme';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = (
    <ThemeProvider theme={RootTheme}>
        <Grid
            alignContent="center"
            areas={['head head', 'nav main', 'nav foot']}
            columnGap="5rem"
            debug
            justifyContent="initial"
            rowGap="1rem"
            rows={3}
        >
            <Cell>Cell 1</Cell>
            <Cell>Cell 2</Cell>
        </Grid>
    </ThemeProvider>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Grid & Cell', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('Component: Cell', () => {
    it('should align content horizontally', () => {
        const valignOptions = ['top', 'middle', 'bottom'];

        valignOptions.map(option => {
            const testSubject = (
                <ThemeProvider theme={RootTheme}>
                    <Grid>
                        <Cell valign={option}>Text</Cell>
                    </Grid>
                </ThemeProvider>
            );
            const tree = renderer.create(testSubject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    it('should align content vertically', () => {
        const alignOptions = ['left', 'center', 'right'];

        alignOptions.map(option => {
            const testSubject = (
                <ThemeProvider theme={RootTheme}>
                    <Grid>
                        <Cell align={option}>Text</Cell>
                    </Grid>
                </ThemeProvider>
            );
            const tree = renderer.create(testSubject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

describe('Utilities: Grid & Cell', () => {
    const testObject = { xs: 0, md: 900, sm: 600 };
    const innerWidth = 780;
    const sortedBreakpoints = sortBreakpoints(testObject);

    it('sortBreakpoints should return a sorted array from an object', () => {
        const lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
        const value = Object.values(lastBreakpoint)[0];

        expect(value).toEqual(900);
    });

    it('getBreakpointKey should return the key associated to the current innerWidth', () => {
        const value = getBreakpointKey(innerWidth, sortedBreakpoints);

        expect(value).toEqual('sm');
    });

    it('generateBreakpointCSS should return generated css and basic grid settings', () => {
        const gridSettings = {
            width: { xs: 12, md: 6 },
            left: 1,
            height: { xs: 3, md: 1 },
        };
        const value = generateBreakpointCSS(gridSettings, sortedBreakpoints);

        expect(value.sortedResponsiveCSS.length).toBe(2);
        expect(Object.keys(value.generalSettings)[0]).toBe('left');
    });
});
