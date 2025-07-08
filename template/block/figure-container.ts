//

import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("side", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("figure", (self) => {
    self.addClassName("figure-container");
    self.setBlockType("bordered", "bordered");
    self.appendChild(transformer.apply(element, "section", {contained: true}));
  });
  return self;
});

export default manager;