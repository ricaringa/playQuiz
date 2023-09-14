import { render, screen } from '@testing-library/react';
import QuestionBox from '../components/Question';
import { useTranslation } from 'react-i18next';
import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({ t: jest.fn() }),
}));
const myMock = jest.fn()
myMock.mockReturnValueOnce({ QuestionType: 'Capital', Capital: 'Test Capital' }).mockReturnValueOnce({ QuestionType: 'Flag', Capital: 'Test Capital' })

jest.mock("../hooks/useData", () => () => (myMock()));
describe('QuestionBox Component', () => {
  it('renders QuestionBox with Capital question type', () => {
    // Mocking return values for useData and useTranslation hooks
    (useTranslation as jest.Mock).mockReturnValue({ t: jest.fn().mockReturnValue('Test Capital Question') });

     render(<QuestionBox />);

    // Add your assertions based on the rendered output
    // expect(container).toMatchSnapshot(); // Example snapshot test
    expect(screen.getByText('Test Capital Test Capital Question 🤔')).toBeInTheDocument();
  });

  it('renders QuestionBox with Flag question type', () => {
    // Mocking return values for useData and useTranslation hooks
    (useTranslation as jest.Mock).mockReturnValue({ t: jest.fn().mockReturnValue('Test Flag Question') });

    render(<QuestionBox />);

    // Add your assertions based on the rendered output
    expect(screen.getByText('Test Flag Question 🤔')).toBeInTheDocument();
  });
});
