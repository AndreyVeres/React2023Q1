import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from 'pages/form/Form';
import { mockUserData } from '__mocks__/userData';
import FormCard from 'pages/form/FormCard';

describe('Form component', () => {
  it('should render all form fields correctly', () => {
    render(<Form />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('SurName:')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth:')).toBeInTheDocument();
    expect(screen.getByLabelText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByLabelText('Загрузите файл:')).toBeInTheDocument();
    expect(screen.getByLabelText('Aggre')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('form have correcty values', () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'TestName' } });
    fireEvent.change(screen.getByLabelText('SurName:'), { target: { value: 'TestSurName' } });
    fireEvent.change(screen.getByLabelText('Date of birth:'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByLabelText('Country:'), { target: { value: 'USA' } });
    fireEvent.click(screen.getByLabelText('Male'));
    fireEvent.load(screen.getByLabelText('Загрузите файл:'), {
      target: { files: [new File([''], 'file.png', { type: 'image/png' })] },
    });
    fireEvent.click(screen.getByLabelText('Aggre'));

    expect(screen.getByLabelText('Name:')).toHaveValue('TestName');
    expect(screen.getByLabelText('SurName:')).toHaveValue('TestSurName');
    expect(screen.getByLabelText('Date of birth:')).toHaveValue('1990-01-01');
    expect(screen.getByLabelText('Country:')).toHaveValue('USA');
    expect(screen.getByLabelText('Male')).toBeChecked();
    expect(screen.getByLabelText('Female')).not.toBeChecked();
    expect(screen.getByLabelText('Загрузите файл:')).toHaveValue('');
    expect(screen.getByLabelText('Aggre')).toBeChecked();
  });

  test('render user card', () => {
    render(<FormCard {...mockUserData} />);
    expect(screen.getByTestId('name')).toHaveTextContent('myName mySurName');
    expect(screen.getByTestId('dob')).toHaveTextContent('1990-01-01');
    expect(screen.getByTestId('country')).toHaveTextContent('USA');
  });
});
