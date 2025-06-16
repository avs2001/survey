import { manualEntryError } from './manual-entry-error';

describe('manualEntryError', () => {
  it('returns empty string when manual entry not allowed', () => {
    expect(manualEntryError(false, 'abc', 1, 5)).toBe('');
  });

  it('validates minimum length', () => {
    expect(manualEntryError(true, 'ab', 3, Infinity)).toContain('Minimum');
  });

  it('validates maximum length', () => {
    expect(manualEntryError(true, 'abcdef', 0, 5)).toContain('Maximum');
  });

  it('returns empty string when valid', () => {
    expect(manualEntryError(true, 'abc', 1, 5)).toBe('');
  });
});
