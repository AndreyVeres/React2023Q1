import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { cardsMock } from '__mocks__/cards';
import { CardDetails, CardThumbnail, Modal, Spinner } from 'components';

describe('Form component', () => {
  it('should render all properties', () => {
    const props = cardsMock[0];
    render(<CardDetails {...props} />);
    expect(screen.getByAltText('image')).toHaveAttribute('src', props.imageUrl);
    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByText(props.type)).toBeInTheDocument();
    expect(screen.getByText(`${props.power} / ${props.toughness}`)).toBeInTheDocument();
    expect(screen.getByText(props.flavor)).toHaveClass('flavor');
  });

  it('should render all properties', () => {
    const props = cardsMock[0];
    render(<CardThumbnail {...props} />);
    expect(screen.getByAltText('image not found')).toHaveAttribute('src', props.imageUrl);
    expect(screen.getByRole('heading', { name: props.name })).toBeInTheDocument();
    expect(screen.getByText(props.type)).toBeInTheDocument();
    expect(screen.getByText(props.flavor)).toBeInTheDocument();
  });

  it('should show modal on image click', () => {
    const props = cardsMock[0];
    render(<CardThumbnail {...props} />);
    fireEvent.click(screen.getByAltText('image not found'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should render modal when isOpen is true', () => {
    const props = {
      isOpen: true,
      setIsOpen: jest.fn(),
      children: <div>Test Content</div>,
    };
    render(<Modal {...props} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should not render modal when isOpen is false', () => {
    const props = {
      isOpen: false,
      setIsOpen: jest.fn(),
      children: <div>Test Content</div>,
    };
    render(<Modal {...props} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should call setIsOpen(false) when clicking on background', () => {
    const setIsOpenMock = jest.fn();
    const props = {
      isOpen: true,
      setIsOpen: setIsOpenMock,
      children: <div>Test Content</div>,
    };
    render(<Modal {...props} />);
    fireEvent.click(screen.getByRole('dialog'));
    expect(setIsOpenMock).toHaveBeenCalledTimes(1);
  });

  it('should not call setIsOpen(false) when clicking on modal content', () => {
    const setIsOpenMock = jest.fn();
    const props = {
      isOpen: true,
      setIsOpen: setIsOpenMock,
      children: <div>Test Content</div>,
    };
    render(<Modal {...props} />);
    fireEvent.click(screen.getByText('Test Content'));
    expect(setIsOpenMock).not.toHaveBeenCalled();
  });

  it('should have "spinner" class', () => {
    render(<Spinner />);
    expect(screen.getByRole('progressbar')).toHaveClass('spinner');
  });
});
