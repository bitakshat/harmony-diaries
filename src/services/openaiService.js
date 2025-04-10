export const getSongSuggestion = async (prompt) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: `You are a mood-based music recommender. 
                            Based on the user's mood ratings, suggest ONE song that emotionally fits the moment. 
                            Alternate between Hindi and English songs for variety. Avoid repeating any previous suggestions. 
                            Always return only the song title and artist.`,
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                max_tokens: 100,
            })

        });

        if (!response.ok) {
            throw new Error('Failed to get response from OpenAI');
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error('OpenAI fetch error:', error);
        throw error;
    }
};
