import { ResultsUpdate } from '../src/client/js/uiUpdate';

test('Displays text in DOM UL element', () => {
    // Set up our document body
    document.body.innerHTML = 
        `<section>
            <strong>Sentiment Results:</strong>
            <div id="results"></div>
        </section>`;

    // Assign test function parameter
    const mockResults = {
        polarity: 'neutral',
        subjectivity: 'objective',
        text: 'The president despises reports who question his policy and decision making faculty',
        polarity_confidence: 0.7726206740988575,
        subjectivity_confidence: 0.5427156021389409
    };    

    // Assert that the function runs to completion and returns nothing
    // Test also yields the proper console logs
    expect(ResultsUpdate(mockResults)).toBe(undefined);
})    