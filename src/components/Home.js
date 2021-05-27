import React, { Component } from 'react';

import techStudent from "./../assets/undraw_adventure_map_hnin.svg";
import "./css/style.css";


export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column-66">
                        <h1 className="large-font"><b>GRUPO DE ESTUDOS CC GIRLS</b></h1>
                        <p className="description-x"> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        </p>
                    </div>

                    <div className="column-33">
                        <img src={techStudent} className="App-logo" alt="" />
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                             <h2>Métodos</h2>
                                <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                   ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                                   ut aliquip ex ea commodo consequat.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                                <h2>Objetivos</h2>

                                <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                   ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                                   ut aliquip ex ea commodo consequat.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">

                            <div className="card-container">
                                <h2>Linhas de Pesquisa</h2>

                                <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                   ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                                   ut aliquip ex ea commodo consequat.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default Home;