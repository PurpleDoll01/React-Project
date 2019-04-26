import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

function mapStateToProps(state) {
  return {
    guitarras: state.guitarras,
  }
}

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" class="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          this.props.guitarras.map((guitarras, index) => {
            return (
              <article class="guitarra" key={index}>
                <CSSTransitionGroup
                transitionName="flicker"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                  <img class="guitarra-image"
                  key={guitarras.image}
                  src={guitarras.image}
                  alt={guitarras.alt}
                  width="350"/>
                </CSSTransitionGroup>
                <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                  transitionLeave={false}
                >
                  <div class="contenedor-guitarra" key={guitarras.name}>
                  <h3 class="guitarra-name">{guitarras.name}</h3>
                  <ol>
                    {guitarras.features.map((feature, index) => {
                      return (
                        <li key={index}>{feature}</li>
                      )
                    })}
                  </ol>
                  </div>
                </CSSTransitionGroup>
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

export default connect(mapStateToProps) (Guitarras);
