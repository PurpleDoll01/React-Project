import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Heart from './Heart.jsx';

function mapStateToProps(state) {
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}


class Portada extends Component {
  renderHeart() {
    const hearts = new Array(100).fill({})
    return(
      hearts.map((element, index) => {
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + 0 + "px",
          animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 + "ms"
        }
        return (
          <Heart key={index} style={style}/>
        )
      })
    )
  }
  render() {
    return (
      <section id="portada" class={this.props.isAnimated && `portada background ${this.props.isAnimated}` || 'portada background'}>
        <header id="header" class="header contenedor">
          <figure class="logotipo">
            <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
          </figure>
          <span class="burguer-button icon-menu" id="burguer-button"></span>
          <nav class="menu" id="menu">
            <ul>
            {this.props.menu.map((item) => {
              return (
                <li>
                <a href={item.href}>{item.title}</a>
                </li>
              )
            })}
            </ul>
          </nav>
        </header>
        <CSSTransitionGroup
          transitionName="animationInOut"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          {
            !this.props.isAnimated &&
            <div class="contenedor" key="portada">
            <h1 class="titulo">Guitarras <span>invie</span>sibles</h1>
            <h3 class="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
            <a class="button" href="#guitarras">Conoce mas</a>
            </div>
          }
        </CSSTransitionGroup>
        {
          this.props.isAnimated &&
          this.renderHeart()
        }
      </section>
    )
  }
}

export default connect(mapStateToProps)(Portada);
