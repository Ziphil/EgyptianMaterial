//

import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("h1", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const index = element.searchXpath("preceding-sibling::h1").length;
  const alphabet = String.fromCharCode(65 + index);
  self.appendElement("div", (self) => {
    self.addClassName("heading");
    self.setBlockType("text", "text");
    self.appendElement("span", (self) => {
      self.addClassName("heading-number");
      self.appendTextNode(alphabet + ".");
    });
    self.appendElement("h3", (self) => {
      self.addClassName("heading-text");
      self.appendChild(transformer.apply(element, "section"));
    });
  });
  return self;
});

export default manager;