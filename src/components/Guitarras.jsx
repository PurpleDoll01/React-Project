import React, { Component } from 'react';

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" class="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          this.props.guitarras.map((guitarras, index) => {
            return (
              <article class="guitarra" key={index}>
                <img class="guitarra-image" src={guitarras.image}  alt={guitarras.alt} width="350"/>
                <div class="contenedor-guitarra">
                  <h3 class="guitarra-name">{guitarras.name}</h3>
                  <ol>
                    {guitarras.features.map((feature, index) => {
                      return (
                        <li key={index}>{feature}</li>
                      )
                    })}
                  </ol>
                </div>
              </article>
            )
          })
        }
        <div class="video-demo-contenedor">
          <div class="video-demo">
            <div class="video-responsive-contenedor">
              <iframe class="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Guitarras;
