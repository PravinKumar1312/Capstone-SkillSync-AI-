import React, { useState } from 'react';
import axios from 'axios';

function Assessment() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const submitPrompt = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/api/assess', { prompt });
      setResponse(res.data.feedback);
    } catch (error) {
      setResponse('Error contacting server.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Skill Assessment</h2>
      <textarea
        placeholder="Describe your skill or type your question..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <button onClick={submitPrompt} disabled={loading}>Submit</button>
      {loading ? <p>Loading...</p> : <p>{response}</p>}
    </div>
  );
}

export default Assessment;
