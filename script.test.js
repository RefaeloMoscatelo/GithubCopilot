const { validateEmail, validateID } = require('./script');

describe('validateEmail', () => {
  describe('Valid email addresses', () => {
    test('should accept standard email format', () => {
      expect(validateEmail('user@example.com')).toBe(true);
    });

    test('should accept email with subdomain', () => {
      expect(validateEmail('user@mail.example.com')).toBe(true);
    });

    test('should accept email with numbers', () => {
      expect(validateEmail('user123@example.com')).toBe(true);
    });

    test('should accept email with dots in local part', () => {
      expect(validateEmail('user.name@example.com')).toBe(true);
    });

    test('should accept email with hyphens', () => {
      expect(validateEmail('user-name@example-domain.com')).toBe(true);
    });

    test('should accept email with underscores', () => {
      expect(validateEmail('user_name@example.com')).toBe(true);
    });

    test('should accept email with plus sign', () => {
      expect(validateEmail('user+tag@example.com')).toBe(true);
    });

    test('should handle uppercase letters (case insensitive)', () => {
      expect(validateEmail('User@Example.COM')).toBe(true);
    });

    test('should accept email with multiple TLD parts', () => {
      expect(validateEmail('user@example.co.uk')).toBe(true);
    });

    test('should accept short email', () => {
      expect(validateEmail('a@b.c')).toBe(true);
    });
  });

  describe('Invalid email addresses', () => {
    test('should reject email without @ symbol', () => {
      expect(validateEmail('userexample.com')).toBe(false);
    });

    test('should reject email without domain', () => {
      expect(validateEmail('user@')).toBe(false);
    });

    test('should reject email without local part', () => {
      expect(validateEmail('@example.com')).toBe(false);
    });

    test('should reject email without TLD', () => {
      expect(validateEmail('user@example')).toBe(false);
    });

    test('should reject email with spaces', () => {
      expect(validateEmail('user name@example.com')).toBe(false);
    });

    test('should reject email with multiple @ symbols', () => {
      expect(validateEmail('user@@example.com')).toBe(false);
    });

    test('should reject email with double dots', () => {
      expect(validateEmail('user..name@example.com')).toBe(false);
    });

    test('should reject empty string', () => {
      expect(validateEmail('')).toBe(false);
    });

    test('should reject null', () => {
      expect(validateEmail(null)).toBe(false);
    });

    test('should reject undefined', () => {
      expect(validateEmail(undefined)).toBe(false);
    });

    test('should reject email starting with dot', () => {
      expect(validateEmail('.user@example.com')).toBe(false);
    });

    test('should reject email ending with dot', () => {
      expect(validateEmail('user.@example.com')).toBe(false);
    });

    test('should reject email with only spaces', () => {
      expect(validateEmail('   ')).toBe(false);
    });

    test('should reject plain text', () => {
      expect(validateEmail('not an email')).toBe(false);
    });

    test('should reject incomplete domain', () => {
      expect(validateEmail('user@.com')).toBe(false);
    });
  });

  describe('Edge cases', () => {
    test('should handle numeric input', () => {
      expect(validateEmail(12345)).toBe(false);
    });

    test('should handle object input', () => {
      expect(validateEmail({})).toBe(false);
    });

    test('should handle array input', () => {
      expect(validateEmail([])).toBe(false);
    });

    test('should handle boolean input', () => {
      expect(validateEmail(true)).toBe(false);
    });
  });
});

describe('validateID', () => {
  describe('Valid ID numbers', () => {
    test('should accept 9-digit ID', () => {
      expect(validateID('123456789')).toBe(true);
    });

    test('should accept 9-digit ID starting with zero', () => {
      expect(validateID('012345678')).toBe(true);
    });

    test('should accept all zeros (technically valid format)', () => {
      expect(validateID('000000000')).toBe(true);
    });

    test('should accept all nines', () => {
      expect(validateID('999999999')).toBe(true);
    });
  });

  describe('Invalid ID numbers', () => {
    test('should reject 8-digit number', () => {
      expect(validateID('12345678')).toBe(false);
    });

    test('should reject 10-digit number', () => {
      expect(validateID('1234567890')).toBe(false);
    });

    test('should reject ID with letters', () => {
      expect(validateID('12345678A')).toBe(false);
    });

    test('should reject ID with spaces', () => {
      expect(validateID('123 456 789')).toBe(false);
    });

    test('should reject ID with hyphens', () => {
      expect(validateID('123-456-789')).toBe(false);
    });

    test('should reject empty string', () => {
      expect(validateID('')).toBe(false);
    });

    test('should reject special characters', () => {
      expect(validateID('123456@89')).toBe(false);
    });

    test('should reject null', () => {
      expect(validateID(null)).toBe(false);
    });

    test('should reject undefined', () => {
      expect(validateID(undefined)).toBe(false);
    });

    test('should reject numeric input (not string)', () => {
      expect(validateID(123456789)).toBe(false);
    });
  });
});
