//

import {convertExtendedMdcToUnicode} from "hieroglyph-utils";
import {CustomTemplateManager} from "../../generator/transformer";


const manager = new CustomTemplateManager();

manager.registerElementRule("hrs", "page", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("hieroglyph-sentence");
    self.appendElement("span", (self) => {
      self.addClassName("hierojax");
      self.setAttribute("data-type", "svg");
      self.setAttribute("data-separated", "true");
      if (element.hasAttribute("rtl")) {
        self.setAttribute("data-dir", "hrl");
      }
      self.appendTextNode(convertExtendedMdcToUnicode(element.textContent ?? ""));
    });
  });
  return self;
});

manager.registerElementRule("hr", "page", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("hieroglyph");
    self.appendElement("span", (self) => {
      self.addClassName("hierojax");
      self.setAttribute("data-type", "svg");
      self.setAttribute("data-separated", "true");
      if (element.hasAttribute("rtl")) {
        self.setAttribute("data-dir", "hrl");
      }
      self.appendTextNode(convertExtendedMdcToUnicode(element.textContent ?? ""));
    });
  });
  return self;
});

export default manager;