import React from "react";
import { Accordion, AccordionItem } from "./components/Accordion";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem title="AccordionItem1">
          Lorem ipsum dolor sit amet
        </AccordionItem>
        <AccordionItem title="AccordionItem2">
          adipisci sit earum molestiae doloribus quisquam esse quaerat
        </AccordionItem>
        <AccordionItem title="AccordionItem3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsam
          numquam quis, possimus at aspernatur quia, adipisci sit earum
          molestiae doloribus quisquam esse quaerat nulla facilis sunt beatae
          tempora laudantium.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
