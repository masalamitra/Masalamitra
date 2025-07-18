import { useState } from 'react';
import { askAI } from '../utils/openai';

function Chatbot() {
  const [msg, setMsg] = useState('');
  const [res, setRes] = useState('');

  const send = async () => {
    const reply = await askAI(msg);
    setRes(reply);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-md w-64">
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Ask</button>
      <p>{res}</p>
    </div>
  );
}

export default Chatbot;
