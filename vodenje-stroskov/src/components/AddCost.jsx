import React, { useState } from 'react';

const AddCost = ({ onAdd }) => {
    const [naziv, setNaziv] = useState('');
    const [znesek, setZnesek] = useState('');
    const [datum, setDatum] = useState('');
    const [kategorija, setKategorija] = useState('');
    const [oseba, setOseba] = useState('');
    const [nacinPlacila, setNacinPlacila] = useState('');
    const [komentar, setKomentar] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCost = {
            naziv,
            znesek,
            datum,
            kategorija,
            oseba,
            nacinPlacila,
            komentar
        };
        onAdd(newCost);
        setNaziv('');
        setZnesek('');
        setDatum('');
        setKategorija('');
        setOseba('');
        setNacinPlacila('');
        setKomentar('');

        const strosek = {
            naziv: naziv,
            znesek: znesek,
            datum: datum,
            kategorija: kategorija,
            oseba: oseba,
            nacinPlacila: nacinPlacila,
            komentar: komentar
        };

        try {
            const response = await fetch('http://localhost:3000/stroski/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(strosek),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="naziv">Naziv:</label>
                <input id="naziv" type="text" value={naziv} onChange={(e) => setNaziv(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="znesek">Znesek:</label>
                <input id="znesek" type="number" value={znesek} onChange={(e) => setZnesek(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="datum">Datum:</label>
                <input id="datum" type="date" value={datum} onChange={(e) => setDatum(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="kategorija">Kategorija:</label>
                <input id="kategorija" type="text" value={kategorija} onChange={(e) => setKategorija(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="oseba">Oseba:</label>
                <input id="oseba" type="text" value={oseba} onChange={(e) => setOseba(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="nacinPlacila">Način Plačila:</label>
                <input id="nacinPlacila" type="text" value={nacinPlacila} onChange={(e) => setNacinPlacila(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="komentar">Komentar:</label>
                <textarea id="komentar" value={komentar} onChange={(e) => setKomentar(e.target.value)} />
            </div>
            <button type="submit">Dodaj Strošek</button>
        </form>
    );
};

export default AddCost;
