// Theme Files
import { typography } from './typography.theme';
import { ColorsTheme as colors } from './colors.theme';

// TODO: ============================================================ move all of these v consts to a different location

// When re-exporting an interface its type must be explicitly defined
import { Color } from './colors.theme';
export type Color = Color;
export { colors } from './colors.theme';
export { fonts } from './fonts.theme';
export { sizes } from './sizes.theme';
export { variables } from './variables.theme';
export { NormalizeCSS, GlobalCSS } from './GlobalStyles';
// TODO: ============================================================ move all of these ^ consts to a different location

import { BUTTON_KEY, BUTTON_THEME } from '../Button/Button.component';

export const RootTheme = {
    typography,
    radii: { none: '0', base: '4px', modal: '8px', circular: '1000px' },
    [BUTTON_KEY]: BUTTON_THEME,
    colors,
};
