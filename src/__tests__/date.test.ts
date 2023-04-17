import { dateNotFuture } from 'utils/dateValidate';

describe('dateNotFuture', () => {
  it('returns true when given date is today', () => {
    const today = new Date().toISOString().split('T')[0];
    const result = dateNotFuture(today);
    expect(result).toBe(true);
  });

  it('returns true when given date is in the past', () => {
    const pastDate = '2022-01-01';
    const result = dateNotFuture(pastDate);
    expect(result).toBe(true);
  });

  it('returns error message when given date is in the future', () => {
    const futureDate = '2030-01-01';
    const result = dateNotFuture(futureDate);
    expect(result).toBe('Date should not be in the future');
  });
});
