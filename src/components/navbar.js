import React from 'react';
import { Navbar, Container } from "react-bulma-components/full";

    class CompNavbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {open: false};
    }

    render() {
    return (
      <Navbar
        color={"light"}
        fixed={"top"}
        active={this.state.open}
      >
          <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger
            active={this.state.open}
            onClick={() => {
                this.setState({open: !this.state.open})
            }}
          />
        </Navbar.Brand>
        <Navbar.Menu active={this.state.open}>
          {/*<Navbar.Container>
            <Navbar.Item href="#">Second</Navbar.Item>
          </Navbar.Container>*/}
          <Navbar.Container position="end">
            <Navbar.Item href="#">Entrar</Navbar.Item>
            <Navbar.Item href="#">Cadastrar</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
        </Container>
      </Navbar>
    );
  }
}


export default CompNavbar;