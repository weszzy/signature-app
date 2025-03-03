import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignatureEditor from './components/SignatureEditor';
import SignatureList from './components/SignatureList';
import './styles/App.css';

function App() {
  const [signatures, setSignatures] = useState([]);
  const [newSignature, setNewSignature] = useState({ text: '', style: 'cursive', thickness: 2 });

  useEffect(() => {
    fetchSignatures();
  }, []);

  const fetchSignatures = async () => {
    const response = await axios.get('http://localhost:3000/api/signatures');
    setSignatures(response.data);
  };

  const saveSignature = async () => {
    await axios.post('http://localhost:3000/api/signatures', newSignature);
    fetchSignatures();
  };

  return (
    <div className="App">
      <h1>Editor de Assinaturas</h1>
      <SignatureEditor
        newSignature={newSignature}
        setNewSignature={setNewSignature}
        saveSignature={saveSignature}
      />
      <SignatureList signatures={signatures} />
    </div>
  );
}

export default App;