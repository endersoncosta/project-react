import React from "react";
import { Columns, Container, Button } from "react-bulma-components/full";
import {} from "react-dnd"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class CompBlocagem extends React.Component {
  render() {
    return (
      <Container>
        <div className="mt-2">
          <Columns>
            <Columns.Column size={4}>
              <Accordion allowZeroExpanded={true} className="card">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Blocos de Apresentação
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is free will real or just an illusion?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </Columns.Column>
          </Columns>
        </div>
      </Container>
    );
  }
}

export default CompBlocagem;
