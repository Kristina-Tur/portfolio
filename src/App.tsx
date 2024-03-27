import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from './layout/sectoins/main/Main';
import {Skills} from './layout/sectoins/skills/Skills';
import {Projects} from './layout/sectoins/projects/Projects';
import React from 'react';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
