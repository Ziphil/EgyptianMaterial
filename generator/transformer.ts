//

import {BaseTransformer, LightTransformer, NodeLikeOf, TemplateManager} from "@zenml/zenml";
import dotjs from "dot";
import TEMPLATE_HTML from "../template/template.html";
import type {CustomDocument} from "./dom";


export class CustomTransformer extends BaseTransformer<CustomDocument, CustomTransformerEnvironments, SlideTransformerVariables> {

  private template: (...args: Array<any>) => string;

  public constructor(implementation: () => CustomDocument) {
    super(implementation);
    this.template = dotjs.template(TEMPLATE_HTML, {...dotjs.templateSettings, strip: false});
  }

  protected stringify(document: CustomDocument): string {
    const view = {
      environments: this.environments,
      variables: this.variables,
      document
    };
    const output = this.template(view);
    return output;
  }

  protected resetEnvironments(initialEnvironments?: Partial<CustomTransformerEnvironments>): void {
    this.environments = {...initialEnvironments};
  }

  protected resetVariables(initialVariables?: Partial<SlideTransformerVariables>): void {
    this.variables = {slideSize: 0, ...initialVariables};
  }

}


export class CustomTemplateManager extends TemplateManager<CustomDocument, CustomTransformerEnvironments, SlideTransformerVariables> {

}


export type CustomLightTransformer = LightTransformer<CustomDocument, CustomTransformerEnvironments, SlideTransformerVariables>;

export type CustomTransformerEnvironments = {
};
export type SlideTransformerVariables = {
  title?: string,
  headerNode?: NodeLikeOf<CustomDocument>,
  slideSize: number
};