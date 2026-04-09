/**
 * JAVASCRIPT UNIT TESTING WITH VITEST
 * Simple examples to get started
 */

// ============================================
// 1. BASIC FUNCTION TESTING
// ============================================

// math.ts
export function add(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

// math.test.ts
/*
import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math';

describe('Math functions', () => {
  // Testing addition
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  it('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  // Testing subtraction
  it('should subtract two numbers correctly', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  // Testing multiplication
  it('should multiply two numbers correctly', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  // Testing division with error handling
  it('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
*/

// ============================================
// 2. STRING MANIPULATION TESTING
// ============================================

export function capitalize(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('')
}

export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/\s/g, '')
  return cleaned === reverseString(cleaned)
}

// string.test.ts
/*
import { describe, it, expect } from 'vitest';
import { capitalize, reverseString, isPalindrome } from './string';

describe('String functions', () => {
  describe('capitalize', () => {
    it('capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('returns empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    it('keeps uppercase letters', () => {
      expect(capitalize('HELLO')).toBe('HELLO');
    });
  });

  describe('reverseString', () => {
    it('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('handles single character', () => {
      expect(reverseString('a')).toBe('a');
    });
  });

  describe('isPalindrome', () => {
    it('detects palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('is case insensitive', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });

    it('ignores spaces', () => {
      expect(isPalindrome('race car')).toBe(true);
    });

    it('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  });
});
*/

// ============================================
// 3. ARRAY OPERATIONS TESTING
// ============================================

export function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0)
}

export function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

export function getUniqueCount<T>(arr: T[]): number {
  return new Set(arr).size
}

export function flattenArray(arr: unknown[]): unknown[] {
  return arr.flat(Infinity)
}

// array.test.ts
/*
import { describe, it, expect } from 'vitest';
import {
  filterEvenNumbers,
  removeDuplicates,
  getUniqueCount,
  flattenArray
} from './array';

describe('Array functions', () => {
  describe('filterEvenNumbers', () => {
    it('filters even numbers from array', () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });

    it('returns empty array for all odd numbers', () => {
      expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });

    it('handles empty array', () => {
      expect(filterEvenNumbers([])).toEqual([]);
    });
  });

  describe('removeDuplicates', () => {
    it('removes duplicate values', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it('handles empty array', () => {
      expect(removeDuplicates([])).toEqual([]);
    });
  });

  describe('getUniqueCount', () => {
    it('returns count of unique items', () => {
      expect(getUniqueCount([1, 1, 2, 2, 3])).toBe(3);
    });
  });

  describe('flattenArray', () => {
    it('flattens nested arrays', () => {
      expect(flattenArray([1, [2, [3, 4]]])).toEqual([1, 2, 3, 4]);
    });
  });
});
*/

// ============================================
// 4. OBJECT OPERATIONS TESTING
// ============================================

export function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U,
): T & U {
  return { ...obj1, ...obj2 }
}

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

export function filterObjectByValue<T extends object>(
  obj: T,
  predicate: (value: T[keyof T]) => boolean,
): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => predicate(value as T[keyof T])),
  ) as Partial<T>
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0
}

// object.test.ts
/*
import { describe, it, expect } from 'vitest';
import {
  mergeObjects,
  getObjectKeys,
  filterObjectByValue,
  isEmptyObject
} from './object';

describe('Object functions', () => {
  describe('mergeObjects', () => {
    it('merges two objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

    it('overwrites keys from second object', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });
  });

  describe('getObjectKeys', () => {
    it('returns all keys from object', () => {
      const obj = { name: 'John', age: 30, email: 'john@example.com' };
      expect(getObjectKeys(obj)).toEqual(['name', 'age', 'email']);
    });
  });

  describe('filterObjectByValue', () => {
    it('filters object by value condition', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 };
      const result = filterObjectByValue(obj, v => v > 2);
      expect(result).toEqual({ c: 3, d: 4 });
    });
  });

  describe('isEmptyObject', () => {
    it('returns true for empty object', () => {
      expect(isEmptyObject({})).toBe(true);
    });

    it('returns false for non-empty object', () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
    });
  });
});
*/

// ============================================
// 5. VALIDATION FUNCTIONS TESTING
// ============================================

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function isValidPhoneNumber(phone: string): boolean {
  const regex = /^\d{10}$/
  return regex.test(phone.replace(/\D/g, ''))
}

export function isStrongPassword(password: string): boolean {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  )
}

export function isValidAge(age: number): boolean {
  return age >= 0 && age <= 150 && Number.isInteger(age)
}

// validation.test.ts
/*
import { describe, it, expect } from 'vitest';
import {
  isValidEmail,
  isValidPhoneNumber,
  isStrongPassword,
  isValidAge
} from './validation';

describe('Validation functions', () => {
  describe('isValidEmail', () => {
    it('accepts valid emails', () => {
      expect(isValidEmail('john@example.com')).toBe(true);
    });

    it('rejects invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
    });
  });

  describe('isValidPhoneNumber', () => {
    it('accepts valid phone numbers', () => {
      expect(isValidPhoneNumber('1234567890')).toBe(true);
      expect(isValidPhoneNumber('123-456-7890')).toBe(true);
    });

    it('rejects invalid phone numbers', () => {
      expect(isValidPhoneNumber('123')).toBe(false);
    });
  });

  describe('isStrongPassword', () => {
    it('accepts strong passwords', () => {
      expect(isStrongPassword('MyPassword123')).toBe(true);
    });

    it('rejects weak passwords', () => {
      expect(isStrongPassword('short')).toBe(false);           // Too short
      expect(isStrongPassword('allsmallletters')).toBe(false); // No uppercase
      expect(isStrongPassword('ALLUPPERCASE')).toBe(false);    // No lowercase
      expect(isStrongPassword('NoNumbers')).toBe(false);       // No numbers
    });
  });

  describe('isValidAge', () => {
    it('accepts valid ages', () => {
      expect(isValidAge(25)).toBe(true);
    });

    it('rejects invalid ages', () => {
      expect(isValidAge(-5)).toBe(false);
      expect(isValidAge(200)).toBe(false);
      expect(isValidAge(25.5)).toBe(false);
    });
  });
});
*/
