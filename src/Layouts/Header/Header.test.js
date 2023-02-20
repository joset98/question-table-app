import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('src/Layouts/Header', () => {

	describe('check component render', () => {

		it('should render the link to add new questions', () => {
			render(<Header />);
			const linkElement = screen.getByText(/ADD NEW QUESTION/i);
			expect(linkElement).toBeInTheDocument();
		});

	});

});
