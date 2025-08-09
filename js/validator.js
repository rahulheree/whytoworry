```javascript
document.addEventListener('DOMContentLoaded', () => {
    const validateBtn = document.getElementById('validate-idea-btn');
    const ideaInput = document.getElementById('idea-input');
    const resultsContainer = document.getElementById('validator-results');
    const loader = document.getElementById('loader');
    if (validateBtn && ideaInput && resultsContainer && loader) {
        validateBtn.addEventListener('click', async () => {
            const ideaText = ideaInput.value.trim();
            if (ideaText.length < 10) {
                resultsContainer.innerHTML = '<p class="text-amber-400">Please provide a more detailed description of your idea.</p>';
                return;
            }
            validateBtn.disabled = true;
            validateBtn.innerHTML = '✨ Analyzing...';
            loader.classList.remove('hidden');
            resultsContainer.innerHTML = '';
            const prompt = 
                `Act as an experienced startup consultant giving a high-level, encouraging analysis.
                Analyze the following business idea. Your response should be formatted with these exact headings:
                ### Potential Strengths
                - A bullet point list of 2-3 key advantages or positive aspects.
                ### Potential Challenges
                - A bullet point list of 2-3 potential hurdles, risks, or questions to consider.
                ### Suggested Target Audience
                - A brief description of the ideal first customers or user segment.
                ### Actionable Next Steps
                - A bullet point list of 3 concrete, simple steps the founder can take to start validating the idea *this week*.
                Here is the idea: "${ideaText}"`;
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            const apiKey = "ur api key";
            const apiUrl = `customize`;
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`);
                }
                const result = await response.json();
                if (result.candidates && result.candidates.length > 0) {
                    let analysisText = result.candidates[0].content.parts[0].text;
                    let html = analysisText
                        .replace(/### (.*)/g, '<h3>$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/^[\*\-] (.*)/gm, '<p class="pl-4 relative before:content-[\'•\'] before:absolute before:left-0">$1</p>');
                    resultsContainer.innerHTML = html;
                } else {
                    throw new Error("Received an invalid response from the AI.");
                }
            } catch (error) {
                console.error("Error validating idea:", error);
                resultsContainer.innerHTML = '<p class="text-red-400">Sorry, we couldn\'t analyze your idea at this time. Please try again later.</p>';
            } finally {
                validateBtn.disabled = false;
                validateBtn.innerHTML = '✨ Validate My Idea';
                loader.classList.add('hidden');
            }
        });
    }
});
```
