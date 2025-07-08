//

import {BaseDocument, BaseDocumentFragment, BaseElement, BaseText} from "@zenml/zenml";


export class CustomElement extends BaseElement<CustomDocument, CustomDocumentFragment, CustomElement, CustomText> {

  public addClassName(className: string): void {
    const currentClassName = this.attributes.get("class");
    const nextClassName = (currentClassName) ? currentClassName + " " + className : className;
    this.attributes.set("class", nextClassName);
  }

  public setBlockType(topBlockType: string, bottomBlockType: string): void {
    this.addClassName("block");
    this.setAttribute("data-top-block-type", topBlockType);
    this.setAttribute("data-bottom-block-type", bottomBlockType);
  }

}


export class CustomDocument extends BaseDocument<CustomDocument, CustomDocumentFragment, CustomElement, CustomText> {

  protected prepareDocumentFragment(): CustomDocumentFragment {
    return new CustomDocumentFragment(this);
  }

  protected prepareElement(tagName: string): CustomElement {
    return new CustomElement(this, tagName);
  }

  protected prepareTextNode(content: string): CustomText {
    return new CustomText(this, content);
  }

}


export class CustomDocumentFragment extends BaseDocumentFragment<CustomDocument, CustomDocumentFragment, CustomElement, CustomText> {

}


export class CustomText extends BaseText<CustomDocument, CustomDocumentFragment, CustomElement, CustomText> {

}