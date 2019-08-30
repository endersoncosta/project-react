import React from "react";
import {
  Columns,
  Container,
  Heading,
  Media,
  Image,
  Content,
  Card,
  Button
} from "react-bulma-components/full";

class CompProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const projects = [];
    
    //define formato que cada projeto será apresentado
    Object(this.props.args).forEach(project => {
      projects.push(   
       <Columns.Column size={4}>
         <Card>
           <Card.Header>
             <Card.Header.Title>{project.tipoSite}</Card.Header.Title>
           </Card.Header>
           <Card.Content>
             <Media>
               <Media.Item renderAs="figure" position="left">
                 <Image
                   renderAs="p"
                   size={64}
                   alt="64x64"
                   src="http://bulma.io/images/placeholders/128x128.png"
                 />
               </Media.Item>
               <Media.Item>
                 <Heading size={4}>{project.nomeSite}</Heading>
                 <Heading subtitle size={6}>
                   <span className="has-text-primary has-text-weight-bold">{project.statusSite}</span><br />
                   
               <span className="is-size-7">Ultima atualização:</span><span className="is-size-7 has-text-weight-semibold"> 10/05/2019</span>
                 </Heading>
               </Media.Item>
             </Media>
             <Content>
               Este projeto está sendo construído por nossa equipe técnica, para assegurar que todo o site tenha a melhor performance. 
             </Content>
           </Card.Content>
           <Card.Footer>
             <Button className="is-radiusless"
               color={"primary"}
               outlined={false}
               rounded={false}
               fullwidth={true}>
                 Detalhes
                 </Button>
           </Card.Footer>
         </Card>
       </Columns.Column>
      );
     console.log(project)
    });

    return (
      <Container>
        <div className="mt-2">
        <Columns>
      
          {projects}

        </Columns>
        </div>
      </Container>
    );
  }
}

export default CompProjects;
