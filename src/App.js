import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import './App.css';
import axios from 'axios';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel;

    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => {
      cancel()
    }
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <div className="App">
      <Container className="mx-auto d-flex flex-column align-items-center mt-4">
        <p>API: <a href="https://pokeapi.co/">https://pokeapi.co/</a></p>
        {loading ? 'Loading...' : (
          <div>
            <PokemonList pokemon={pokemon} />
            <Pagination
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
          </div>

        )}
      </Container>
    </div>
  );
}

export default App;
