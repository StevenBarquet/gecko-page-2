/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Componentes
import NavbarCont from 'Cont/Navbar/NavbarCont';
import Home from 'Comp/Home';
import ImageExample from 'Comp/ImageExample';

class AppContainer extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <BrowserRouter>
        <NavbarCont />
        <Route exact path="/" component={Home} />
        <Route exact path="/tareas" component={ImageExample} />
        <a
          className="whats-icon"
          target="_blank"
          href="https://web.whatsapp.com/send?phone=5215533700670&amp;text=howard.servehttp.com:3000/%0A%0AHola,%20me%20gustaría%20obtener%20más%20información."
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/icon_only_new_inverted.png?469"
            alt="whatsapp"
            width="54px"
          />
        </a>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
