import React, { Component } from 'react';
import PictureUnicorn from "./assets/unicornio.svg"
import "./css/estilo.css";
export class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column-66">
                        <h1 className="large-font"><b>ARTIGOS E WORKSHOPS</b></h1>
                        <p className="description-x">
                            Em breve temos pesquisas e artigos feitos pelos membros da comunidade CC GIRL, com conteudos de estudo, 
                            como aplicações, apresentações, teses e novidade de Workshops ofertados.
                        </p>
                    </div>


                    <div className="column-33">
                        <img src={PictureUnicorn} className="App-logoUnicornio" alt="" />
                    </div>
                </div>


            </div>
        )
    }
};

export default Blog;