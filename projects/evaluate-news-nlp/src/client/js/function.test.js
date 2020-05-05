import { UrlValidator } from './validateUrl.js';
import { ResultsUpdate } from './uiUpdate.js';

describe('Function validates a url from input field', () => {
    test('should fail', () => {
        const url = 'ncihkddjkh.65898798';

        expect(UrlValidator(url)).toBe(url);
    });
});

describe('Function updates an html element', () => {
    test('should succeed', () => {
        const newObject = myCar = {
            make: 'Ford',
            model: 'Mustang',
            year: 1969
        };

        expect(ResultsUpdate(newObject)).toBe(String);
    });
});