//

import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("section", "main", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("section", (self) => {
    self.addClassName("section");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("title", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = element.parentNode!.searchXpath("preceding-sibling::section[title]").length + 1;
  self.appendElement("div", (self) => {
    self.addClassName("section-title");
    self.appendElement("span", (self) => {
      self.addClassName("section-title-number");
      self.appendTextNode(number.toString());
    });
    self.appendElement("h2", (self) => {
      self.addClassName("section-title-text");
      self.appendChild(transformer.apply(element, "section"));
    });
  });
  return self;
});

export default manager;