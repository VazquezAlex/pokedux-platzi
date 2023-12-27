import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { getPokemons } from './api';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';
import './App.css';
import { setPokemons as setPokemonsActions } from './actions';


function App({ pokemons, setPokemons }) {

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            setPokemons(pokemonsRes);
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

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
    setPokemons: (values) => dispatch(setPokemonsActions(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
