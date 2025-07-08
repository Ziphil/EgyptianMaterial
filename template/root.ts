//

import {CustomTemplateManager} from "../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("main", "", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("main", (self) => {
    self.addClassName("main");
    self.appendChild(transformer.apply(element, "main"));
  });
  return self;
});

manager.registerElementRule("title", "main", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = (element.parentNode as Element).getAttribute("num");
  self.appendElement("div", (self) => {
    self.addClassName("main-title");
    self.appendElement("span", (self) => {
      self.addClassName("main-title-number");
      self.appendTextNode(number);
    });
    self.appendElement("h1", (self) => {
      self.addClassName("main-title-text");
      self.appendChild(transformer.apply(element, "main"));
    });
  });
  return self;
});

export default manager;