import React from 'react';

function SignatureEditor({ newSignature, setNewSignature, saveSignature }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSignature({ ...newSignature, [name]: value });
    };

    return (
        <div className="editor">
            <input
                type="text"
                name="text"
                placeholder="Digite seu nome"
                value={newSignature.text}
                onChange={handleChange}
            />
            <select name="style" value={newSignature.style} onChange={handleChange}>
                <option value="cursive">Cursiva</option>
                <option value="traditional">Tradicional</option>
            </select>
            <input
                type="number"
                name="thickness"
                placeholder="Espessura"
                value={newSignature.thickness}
                onChange={handleChange}
            />
            <button onClick={saveSignature}>Salvar Assinatura</button>
        </div>
    );
}

export default SignatureEditor;