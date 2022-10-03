import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import Pagination from './components/Pagination/Pagination'

function App() {
  const [pokemonData,setpokemonData] = useState([]);
  const [nextUrl,setnextUrl] = useState('');
  const [prevUrl,setprevUrl] = useState('');
  const [loading,setloading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(()=>{
    const fetchData = async() => {
      let res = await getAllPokemon(initialUrl);
      setnextUrl(res.next);
      setprevUrl(res.previous);
     let pokemon = await loadingPokemon(res.results);
     console.log(pokemon);
      setloading(false);
    }
    fetchData();
  },[])
  
  const loadingPokemon = async (data)=> {
    let _pokemonData = await Promise.all(
      data.map(async pokemon =>{
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    })
    );
   setpokemonData(_pokemonData);
  }
  const next = async ()=> {
    setloading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setnextUrl(data.next);
    setprevUrl(data.previous);
    setloading(false);

  }
  const prev = async ()=> {
    if(!prevUrl ) {
      return;
    }
    setloading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setnextUrl(data.next);
    setprevUrl(data.previous);
    setloading(false);

  }


  return (
    <div className="App">
      {loading ? <h1>Loading..!</h1>:(
        <>
        <Navbar/>
        <Pagination prevUrl={prev}   />
        <Pagination nextUrl={next} />

        <div className="grid-container">
          {pokemonData?.map((pokemon,i)=>{
              return <Card key={i} pokemon={pokemon} />
          }
          )}
        </div>
        <Pagination prevUrl={prev}   />
        <Pagination nextUrl={next} />
        </> 
        )
    
      }
    </div>
  );
}

export default App;
