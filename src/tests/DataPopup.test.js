import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataPopup from '../components/DataPopup';

describe('DataPopup component', () => {
    test('renders popup with text and close button', () => {
        const popupText = [['Field 1', 'Value 1'], ['Field 2', 'Value 2']];
        const setShowPopup = jest.fn();

        render(<DataPopup popupText={popupText} setShowPopup={setShowPopup} />);

        // Verify popup text
        const field1 = screen.getByText('Field 1:');
        const value1 = screen.getByText('Value 1');
        const field2 = screen.getByText('Field 2:');
        const value2 = screen.getByText('Value 2');

        expect(field1).toBeInTheDocument();
        expect(value1).toBeInTheDocument();
        expect(field2).toBeInTheDocument();
        expect(value2).toBeInTheDocument();

        // Verify close button and click event
        const closeButton = screen.getByRole('button', { name: 'Close' });

        expect(closeButton).toBeInTheDocument();

        fireEvent.click(closeButton);
        expect(setShowPopup).toHaveBeenCalledWith(false);
    });

    test('renders popup with no text', () => {
        render(<DataPopup popupText={[]} setShowPopup={jest.fn()} />);

        // Verify no popup text
        const popupContainer = screen.getByTestId('data-popup-container');
        expect(popupContainer).toBeInTheDocument();

        // Verify no popup text elements
        const popupTextElements = screen.queryAllByRole('heading', { level: 2 });
        expect(popupTextElements).toHaveLength(0);

        // Verify close button
        const closeButton = screen.getByRole('button', { name: 'Close' });
        expect(closeButton).toBeInTheDocument();
    });
});
