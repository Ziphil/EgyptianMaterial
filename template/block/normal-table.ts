//

import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("table", "section", (transformer, document, element, scope, args) => {
  const self = document.createDocumentFragment();
  self.appendElement("table", (self) => {
    self.addClassName("normal-table");
    self.appendChild(transformer.apply(element, "section.table"));
  });
  if (!args?.contained) {
    const innerSelf = self;
    const containerSelf = document.createDocumentFragment();
    containerSelf.appendElement("figure", (self) => {
      self.addClassName("figure-container");
      self.setBlockType("bordered", "bordered");
      self.appendChild(innerSelf);
    });
    return containerSelf;
  } else {
    return self;
  }
});

manager.registerElementRule("caption", "section.table", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("caption", (self) => {
    self.addClassName("normal-table-caption");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("tr", "section.table", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("tr", (self) => {
    self.appendChild(transformer.apply(element, "section.table.tr"));
  });
  return self;
});

manager.registerElementRule(["th", "td"], "section.table.tr", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement(element.tagName, (self) => {
    if (element.hasAttribute("row")) {
      self.setAttribute("rowspan", element.getAttribute("row"));
    }
    if (element.hasAttribute("col")) {
      self.setAttribute("colspan", element.getAttribute("col"));
    }
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;