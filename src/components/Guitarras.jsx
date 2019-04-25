import React, { Component } from 'react';
import acustica from '../images/invie-acustica.png';
import classic from '../images/invie-classic.png';

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" class="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        <div class="video-demo-contenedor">
          <div class="video-demo">
            <div class="video-responsive-contenedor">
              <iframe class="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <article class="guitarra">
          <img class="derecha" src={acustica}  alt="Guitarra Invie Acustica" width="350"/>
          <div class="contenedor-guitarra-a">
            <h3 class="title-b">Invie Acustica</h3>
            <ol>
              <li>Estilo vintage</li>
              <li>Madera pura</li>
              <li>Incluye estuche invisible de aluminio</li>
            </ol>
          </div>
        </article>
        <article class="guitarra b">
          <img class="izquierda" src={classic} alt="Guitarra Invie Classic" width="350"/>
          <div class="contenedor-guitarra-b">
            <h3 class="title-b">Invie Classic</h3>
            <ol>
              <li>Estilo vintage</li>
              <li>Liviana</li>
              <li>Inicia tu camino como Rockstar</li>
            </ol>
          </div>
        </article>
      </section>
    )
  }
}

export default Guitarras;
