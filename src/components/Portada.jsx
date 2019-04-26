import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    logo: state.logoPortada,
    menu: state.menu
  }
}


class Portada extends Component {
  render() {
    return (
      <section id="portada" class="portada background">
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
        <div class="contenedor">
          <h1 class="titulo">Guitarras <span>invie</span>sibles</h1>
          <h3 class="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
          <a class="button" href="#guitarras">Conoce mas</a>
        </div>
      </section>
    )
  }
}

export default connect(mapStateToProps)(Portada);
