// REACT
import * as React from 'react';
const { forwardRef } = React;
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import classnames from 'classnames';
// ANCHOR
import { space as spaceStyles, SpaceProps } from '@xstyled/system';

// Todo: These should not be hardcoded and need a better solution
const OFF_TRACK_COLOR = '#D3D3D3';
const OFF_KNOB_COLOR = '#808080';

const HiddenInput = styled('input')<ToggleProps>`
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const StyledToggle = styled('label')<ToggleProps>`
    display: inline-flex;
    flex-direction: column;

    ${spaceStyles}

    // Styles for the ON/OFF
    font-family: base;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    text-align: center;
    ${({ disabled }) =>
        css({
            color: disabled ? 'text.disabled' : 'text.light',
            cursor: disabled ? 'not-allowed' : 'pointer',
        })}
    user-select: none;
`;

const Switch = styled('span')<ToggleProps>`
    position: relative;
    ${({ height, trackWidth }) =>
        css({
            height,
            width: trackWidth,
        })};

    margin-bottom: 0.25rem;
    display: flex;

    // Styles the track the knob slides on
    &:before {
        position: absolute;
        top: 50%;
        content: '';

        border-radius: circular;
        background-color: ${OFF_TRACK_COLOR};
        transform: translate(0, -50%);
        transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            opacity 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        ${({ checked, disabled, trackWidth, toggleColor, trackHeight }) =>
            css`
                height: ${trackHeight};
                width: ${trackWidth};
                background-color: ${checked && !disabled
                    ? toggleColor
                    : OFF_TRACK_COLOR};
                opacity: ${checked && !disabled ? 0.5 : undefined};
            `}
    }

    // Styles the knob of the toggle
    &:after {
        display: block;
        position: absolute;
        box-sizing: border-box;
        content: '';
        transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            background-color 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        top: 50%;
        ${({ knobSize }) => css`
            width: ${knobSize};
            height: ${knobSize};
        `}
        border-radius: circular;
        transform: translate(0, -50%);

        ${({ checked, disabled, knobSize, trackWidth, toggleColor }) =>
            css`
                transform: translate(
                    ${checked ? `calc(${trackWidth} - ${knobSize})` : 0},
                    -50%
                );
                background-color: ${checked && !disabled
                    ? toggleColor
                    : OFF_KNOB_COLOR};
            `}
    }
`;

interface ToggleProps extends SpaceProps, React.HTMLAttributes<any> {
    className?: string;
    id?: string;
    htmlFor?: string;

    checked?: boolean;
    disabled?: boolean;
    name?: string;

    height?: string;
    showText?: boolean;
    knobSize?: string;
    toggleColor?: string;
    trackHeight?: string;
    trackWidth?: string;

    inputProps?: any;
    onChange?: (arg: any) => any;
}

export const Toggle = forwardRef(
    (
        {
            id,
            className,
            inputProps,
            checked,
            showText = true,
            height = '1.375rem',
            // TODO: this should be a variable
            toggleColor = '#784c82',
            knobSize = '1.125rem',
            trackHeight = '0.75rem',
            trackWidth = '2rem',
            disabled,
            onChange,
            ...props
        }: ToggleProps,
        ref: React.RefObject<any>
    ): React.ReactElement<ToggleProps> => (
        <StyledToggle
            className={classnames('anchor-toggle', className)}
            disabled={disabled}
            htmlFor={id}
            height={height}
            trackWidth={trackWidth}
            trackHeight={trackHeight}
            {...props}
        >
            <Switch
                knobSize={knobSize}
                height={height}
                toggleColor={toggleColor}
                trackHeight={trackHeight}
                trackWidth={trackWidth}
                checked={checked}
                disabled={disabled}
            />
            <HiddenInput
                type="checkbox"
                id={id}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                ref={ref}
                {...props}
                {...inputProps}
            />
            {showText && (checked ? 'ON' : 'OFF')}
        </StyledToggle>
    )
);
