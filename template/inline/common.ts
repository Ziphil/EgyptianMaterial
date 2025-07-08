//

import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("x", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("sans");
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule("xn", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("sans");
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule("i", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("var", (self) => {
    self.addClassName("italic");
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule("sc", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("smallcaps");
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule(["sup", "sub"], true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName(element.tagName);
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule("k", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("japanese");
    self.appendChild(transformer.apply());
  });
  return self;
});

export default manager;