// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import classnames from 'classnames';
// COMPONENTS
import { CustomAdaptor, StandardBreakpoints } from '../../Grid/Adaptor/index';

// Constants
// ------------------------------------------------------------------------------------------------------------------
export const DEFAULT_LAYOUT_WIDTH = '100%';
export const DEFAULT_CONTENT_WIDTH = '71.25rem';
export const DEFAULT_SIDEBAR_WIDTH = '13.75rem';
export const TRANSPARENT = 'transparent';
export const RIGHT = 'right';
export const LEFT = 'left';

// Types
// ------------------------------------------------------------------------------------------------------------------
type SidebarAlignment = 'left' | 'right';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledLayout = styled.section<StyledLayoutProps>`
    max-width: ${props => props.layoutWidth};
    background-color: ${props => props.layoutBackgroundColor};
    margin: 0 auto;
`;

const StyledContent = styled.div<StyledContentProps>`
    max-width: ${props => props.contentWidth};
    background-color: ${props => props.contentBackgroundColor};
    margin: 0 auto;
`;

StyledLayout.displayName = 'StyledLayout';
StyledContent.displayName = 'StyledContent';

// Interfaces
// ------------------------------------------------------------------------------------------------------------------
interface SidebarLayoutProps {
    /** The width of the layout, edge to edge. */
    layoutWidth?: string | number;
    /** The width of the content within the layout. */
    contentWidth?: string | number;
    /** The width of the area for the sidebar. */
    sidebarWidth?: string | number;
    /** If the sidebar is on the left or the right of the layout */
    sidebarAlign?: SidebarAlignment;
    /** The actual sidebar. This can be a component. */
    sidebar?: any;
    /** The background color of the layout. Default is transparent. */
    layoutBackgroundColor?: string;
    /** The background color of the content within the layout area. Default is transparent. */
    contentBackgroundColor?: string;
    /** Additional classname. */
    className?: string;
    children?: any;
}

interface StyledLayoutProps {
    layoutWidth?: string | number;
    layoutBackgroundColor?: string;
}

interface StyledContentProps {
    contentWidth?: string | number;
    contentBackgroundColor?: string;
}

// Components
// ------------------------------------------------------------------------------------------------------------------
export const SidebarLayout = ({
    layoutWidth = DEFAULT_LAYOUT_WIDTH,
    layoutBackgroundColor = TRANSPARENT,
    contentWidth = DEFAULT_CONTENT_WIDTH,
    contentBackgroundColor = TRANSPARENT,
    sidebar,
    sidebarAlign = LEFT,
    sidebarWidth = DEFAULT_SIDEBAR_WIDTH,
    children,
    className,
}: SidebarLayoutProps): React.ReactElement<any> => (
    <StyledLayout
        layoutWidth={layoutWidth}
        layoutBackgroundColor={layoutBackgroundColor}
        className={classnames('anchor-sidebar-layout', className)}
    >
        <StyledContent
            contentWidth={contentWidth}
            contentBackgroundColor={contentBackgroundColor}
        >
            {sidebarAlign === RIGHT ? (
                <Grid columns={`1fr ${sidebarWidth}`}>
                    <CustomAdaptor maxWidth={StandardBreakpoints.sm.max}>
                        <Cell width={2}>{children}</Cell>
                    </CustomAdaptor>

                    <CustomAdaptor minWidth={StandardBreakpoints.md.min}>
                        <Cell>{children}</Cell>
                        <Cell>{sidebar}</Cell>
                    </CustomAdaptor>
                </Grid>
            ) : (
                <Grid columns={`${sidebarWidth} 1fr `}>
                    <CustomAdaptor maxWidth={StandardBreakpoints.sm.max}>
                        <Cell width={2}>{children}</Cell>
                    </CustomAdaptor>

                    <CustomAdaptor minWidth={StandardBreakpoints.md.min}>
                        <Cell>{sidebar}</Cell>
                        <Cell>{children}</Cell>
                    </CustomAdaptor>
                </Grid>
            )}
        </StyledContent>
    </StyledLayout>
);

export default SidebarLayout;
