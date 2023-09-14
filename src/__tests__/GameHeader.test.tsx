import React from 'react';
import { render, screen } from '@testing-library/react';
import GameHeader from '../components/GameHeader';
import '@testing-library/jest-dom';

// Mocking the dependencies
jest.mock("@chakra-ui/react", () => ({
  Center: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
const myMock = jest.fn()
myMock.mockReturnValueOnce({ gameStatus: 'Playing' }).mockReturnValueOnce({ gameStatus: 'Finished' })
jest.mock("../components/Question/index", () => () => <div>Mocked Question Component</div>);
jest.mock("../hooks/useData", () => () => ({ QuestionType: 'Flag', Flag: 'flag-image-url' }));
jest.mock("../hooks/useGame", () => () => (myMock()));
jest.mock("../components/AfterGameMessage/index", () => () => <div>Mocked AfterGameMessage Component</div>);

describe('GameHeader Component', () => {
  it('renders GameHeader correctly when gameStatus is Playing', () => {
    render(<GameHeader />);
    expect(screen.queryByText('Mocked Question Component')).toBeInTheDocument();
    expect(screen.queryByText('Mocked AfterGameMessage Component')).not.toBeInTheDocument();
  });

  it('renders GameHeader correctly when gameStatus is Finished', () => {
    jest.resetModules(); // Reset modules to change the useGame hook return value
    render(<GameHeader />);
    expect(screen.queryByText('Mocked Question Component')).not.toBeInTheDocument();
    expect(screen.queryByText('Mocked AfterGameMessage Component')).toBeInTheDocument();
  });
});