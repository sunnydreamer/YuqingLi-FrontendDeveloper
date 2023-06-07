import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
    test('renders footer with copyright text', () => {
        // Use a custom text matcher function
        const textMatcher = (content, element) => {
            const hasText = (node) => node.textContent === content;
            const elementHasText = hasText(element);
            const childrenDontHaveText = Array.from(element.children).every(
                (child) => !hasText(child)
            );
            return elementHasText && childrenDontHaveText;
        };

        // Verify footer text using custom matcher
        const copyrightText = screen.getByText(
            (content, element) => textMatcher(content, element),
            /2023 SpaceX. All rights reserved./i
        );
        expect(copyrightText).toBeInTheDocument();
    });
});
