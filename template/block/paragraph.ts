//

import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("p", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const size = element.getAttribute("size");
  self.appendElement("p", (self) => {
    self.addClassName("paragraph");
    self.setBlockType("text", "text");
    if (size) {
      self.setAttribute("data-size", size);
    }
    self.appendChild(transformer.apply());
  });
  return self;
});

export default manager;