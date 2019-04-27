// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Input } from '../Form';
import { ResultsContainer } from './ResultsContainer';
// THEME
import { colors } from '../theme';

const { useState, useRef } = React;

type AutoCompleteDataSource = Array<{
    label?: string;
    listItemType?: 'item' | 'title' | 'divider';
    [key: string]: any;
}>;

interface AutoCompleteProps {
    dataSource?: AutoCompleteDataSource | string[] | number[];
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    value?: string | number;
    // TODO: resultTemplate
    // TODO: allowClear
    allowClear?: boolean;
    // Visual
    border?: boolean;
    shadow?: boolean;
    background?: string;
    color?: string;
    // TODO: Allow children
    resultTemplate?: (props: any) => any;
    suffix?: React.ReactElement<any>;
    prefix?: React.ReactElement<any>;
    // Event Handlers
    onFilter?: (term: string | number) => void;
    onSelect?: (value?: string | number, item?: any) => void;
    onChange?: (value?: string | number, item?: any) => void;
    onFocus?: (event?: React.FocusEvent) => void;
    onBlur?: (event?: React.FocusEvent) => void;
}

interface StyledAutoCompleteProps {
    shadow?: boolean;
    border?: boolean;
    background?: string;
    color?: string;
}

const EventKeyCodes = {
    TAB: 9,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};

const StyledAutoComplete = styled.div<StyledAutoCompleteProps>`
    width: 100%;
    position: relative;
    ${({ border }: StyledAutoCompleteProps) =>
        border ? `border: solid thin ${colors.ash.light}` : null};
    border-radius: 0.25rem;
    transition: border-color 250ms;
    background: ${({ background }: StyledAutoCompleteProps) => background};
    color: ${({ color }: StyledAutoCompleteProps) => color};
    ${({ shadow }: StyledAutoCompleteProps) =>
        shadow
            ? 'box-shadow: 0 0.5rem 0.75rem -0.375rem rgba(0, 0, 0, 0.12);'
            : null};

    &:hover {
        border: ${({ border }: StyledAutoCompleteProps) =>
            border ? `solid thin ${colors.ash.base}` : null};
    }

    &:active,
    &:focus {
        border: ${({ border }: StyledAutoCompleteProps) =>
            border ? `solid thin ${colors.ash.dark}` : null};
    }

    .auto-complete-input {
        border: none;
    }
`;

export const AutoComplete = ({
    className,
    placeholder,
    // children,
    suffix,
    prefix,
    dataSource = [],
    value = '',
    onFilter = () => null,
    onSelect = () => null,
    onChange = () => null,
    size = 'lg',
    shadow = false,
    border = true,
    background = colors.white.base,
    color = colors.charcoal.light,
    resultTemplate,
    allowClear,
    ...props
}: AutoCompleteProps) => {
    // Flag for autocomplete focus
    const [isFocused, setIsFocused] = useState<boolean>(false);
    // The current search term
    const [term, setTerm] = useState<string>(value ? `${value}` : '');
    // Instance of the nested input
    const inputRef = useRef<any>();
    const resultsRef = useRef<any>();

    // Handle updating the search term
    const changeSearchTerm = (newTerm: string) => {
        // Fire external filter event
        onFilter(newTerm);
        // Update new term
        setTerm(newTerm);
    };
    // Handle updating the search term
    const updateInputAndTerm = (newTerm: string) => {
        // Update the filter
        setTerm(newTerm);
        // Update the input
        inputRef.current.update(newTerm);
    };

    // Handle updating the autocomplete value
    const changeActiveValue = (newValue: any) => {
        changeSearchTerm(newValue.label);
        // Fire External Select/Change Event
        onSelect(newValue.label, newValue);
        onChange(newValue.label, newValue);
        // Update the input value
        inputRef.current.update(newValue.label);
        inputRef.current.blur();
        // Reset the index
        resultsRef.current.setActiveIndex(0);
    };

    return (
        <StyledAutoComplete
            shadow={shadow}
            border={border}
            background={background}
            color={color}
            className={classNames('anchor-auto-complete', className)}
            {...props}
        >
            <Input
                value={term}
                ref={inputRef}
                size={size}
                prefix={prefix}
                suffix={suffix}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(newValue: string) => {
                    changeSearchTerm(newValue);
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                    switch (event.keyCode) {
                        case EventKeyCodes.TAB:
                        case EventKeyCodes.ENTER:
                            event.preventDefault();
                            event.stopPropagation();
                            if (isFocused) {
                                // Unset initialTerm
                                resultsRef.current.clearInitialTerm();
                                // Set the active value of the autocomplete
                                resultsRef.current.selectActive();
                            }
                            break;
                        case EventKeyCodes.ARROW_DOWN:
                            event.preventDefault();
                            event.stopPropagation();
                            resultsRef.current.handleNext(term);
                            break;
                        case EventKeyCodes.ARROW_UP:
                            event.preventDefault();
                            event.stopPropagation();
                            resultsRef.current.handlePrevious(term);
                            break;
                        default:
                            if (resultsRef.current) {
                                resultsRef.current.clearInitialTerm();
                                resultsRef.current.setActiveIndex(0);
                            }
                            break;
                    }
                }}
                name="auto-complete"
                className="auto-complete-input"
            />
            {isFocused && dataSource.length > 0 && (
                <ResultsContainer
                    ref={resultsRef}
                    emitSelectedItem={(item: any) => {
                        changeActiveValue(item);
                    }}
                    emitActiveTerm={(newTerm: string) => {
                        updateInputAndTerm(newTerm);
                    }}
                    resultTemplate={resultTemplate}
                    dataSource={dataSource}
                    term={term}
                />
            )}
        </StyledAutoComplete>
    );
};
