import React from 'react';
import { Container, Hero, Heading, Columns } from "react-bulma-components/full";

    class CompBanner extends React.Component {
    

    render() {
    return (
        <div className="mt-2">
        <Container>
            
            <Hero color="primary" gradient>
                <Columns>
                    <Columns.Column size={6}>
                <Hero.Body>
                    <Heading size={1}><span className="is-italic has-text-weight-light">Seu projeto está pronto!</span></Heading>
                    <Heading subtitle size={5}>
                        <span className="has-text-weight-light">Nossos especialistas finalizaram a motantagem e publicação do seu projeto.</span>
                    </Heading>
                    <a href="https://google.com/" className="button is-outlined is-white">Clique aqui e veja como ficou.</a>
                </Hero.Body>
                </Columns.Column>
                </Columns>
            </Hero>

        </Container>
        </div>
    );
  }
}


export default CompBanner;