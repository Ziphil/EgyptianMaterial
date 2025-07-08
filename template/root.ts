//

import {CustomTemplateManager} from "../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("main", "", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("main", (self) => {
    self.appendChild(transformer.apply(element, "main"));
  });
  return self;
});

export default manager;