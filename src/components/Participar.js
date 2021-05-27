import React, {Component} from 'react';
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTelegram,
    faTwitter,
    faInstagramSquare,
    faMedium
  } from "@fortawesome/free-brands-svg-icons";
export class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <h1 className="large-font-partion"><b>Para participar ...</b></h1>
                        <p className="description-partion"> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.     <br/> [LINK AQUI]
                        </p>
                    </div>
                    
                    <div className="social-container">
                        <h3 className="titule-follow">Social Follow</h3>
                        <a target="_blank" rel="noreferrer" href="https://medium.com/ccgirluffs"
                            className="medium social">
                            <FontAwesomeIcon icon={faMedium} size="2x" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://t.me/joinchat/cpPFcgD4h05lZDU5"
                            className="telegram social">
                            <FontAwesomeIcon icon={faTelegram} size="2x" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.twitter.com/ccgirluffs" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ccgirluffs"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;