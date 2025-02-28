import { useEffect, useState } from 'react';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

function App() {
    const [data, setData] = useState([]); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const json = await response.json();
                setData(json.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Pokémon</h1>
            <ul className="mt-4">
                {data.map((pokemon, index) => (
                    <li key={index} className="text-lg">
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
