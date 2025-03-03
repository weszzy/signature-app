import React from 'react';

function SignatureList({ signatures }) {
    return (
        <div className="list">
            <h2>Assinaturas Salvas</h2>
            <ul>
                {signatures.map((user) => (
                    <li key={user.id}>
                        <strong>{user.text}</strong> - {user.style} (Espessura: {user.thickness})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SignatureList;