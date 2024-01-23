import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { getPokemonDetails, getPokemons } from './api';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';
import './App.css';
import { setPokemons } from './actions';


function App() {

    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            const pokemonsDetailed = await Promise.all(pokemonsRes.map(p => getPokemonDetails(p)));

            dispatch(setPokemons(pokemonsDetailed));
        }

        fetchPokemons();
    }, []);

    return (
        <div className="App">
            <Col span = { 4 } offset = { 10 }>
                <img src = {logo} alt = 'Pokedux' />
            </Col>
            <Col span = { 8 } offset = { 8 }>
                <Searcher />
            </Col>
            <PokemonList pokemons = { pokemons }/>
        </div>
    );
}

export default App;
