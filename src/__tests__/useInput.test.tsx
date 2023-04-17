import { renderHook } from '@testing-library/react';
import { useInput } from 'hooks/useInput';
import { act } from 'react-dom/test-utils';

describe('useInput', () => {
  test('should set initial value', () => {
    const initialValue = 'test';
    const { result } = renderHook(() => useInput(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  test('should update value when onInput is called', () => {
    const { result } = renderHook(() => useInput(''));

    act(() => {
      result.current.onInput({
        currentTarget: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('test');
  });
});
