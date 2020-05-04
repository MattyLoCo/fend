import { UrlValidator } from './validateUrl.js'

describe('Function validates a url from input field', () => {
    test('should fail', () => {
        const url = '';

        expect(UrlValidator(url)).toBe(url);
    })
})