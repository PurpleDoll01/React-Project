import React, { Component } from 'react';
import logoWhite from '../images/invie-white.png';

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="contenedor">
          <div class="contacto">
            <img src={logoWhite} alt="logotipo blanco"/>
            <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
            <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
          </div>
          <htmlForm class="htmlFormulario">
            <div class="col1">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" required id="nombre" name="nombre"/>
              <label htmlFor="email">E-mail</label>
              <input type="email" required id="email" name="email"/>
              <div class="sexo">
                <label htmlFor="mujer">
                  <input type="radio" id="mujer" defaultChecked name="sexo" value="mujer" /> mujer
                </label>
                <label htmlFor="hombre">
                  <input type="radio" id="hombre" name="sexo" value="hombre" /> hombre
                </label>
              </div>
              <div class="intereses">
                <label htmlFor="cotizacion">
                  <input type="checkbox" defaultChecked id="cotizacion" name="intereses" value="cotizacion" /> Cotización
                </label>
                <label htmlFor="reclamos">
                  <input type="checkbox" id="reclamos" name="intereses" value="reclamos" /> Reclamos
                </label>
                <label htmlFor="comentarios">
                  <input type="checkbox" id="comentarios" name="intereses" value="comantarios" /> Comentarios
                </label>
                <label htmlFor="otros">
                  <input type="checkbox" id="otros" name="intereses" value="otros" /> Otros
                </label>
              </div>
            </div>
            <div class="col2">
              <label htmlFor="comentarios">Comentarios</label>
              <textarea name="comantarios" id="comentarios" cols="30" rows="7"></textarea>
              <input type="submit" value="Enviar" class="button"/>
            </div>
          </htmlForm>
        </div>
      </footer>
    )
  }
}

export default Footer;
