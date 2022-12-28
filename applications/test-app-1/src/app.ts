import { autoinject } from 'aurelia-framework';
import { Utils } from "@packages/dep1";
import { SomeStuff } from 'someStuff';

@autoinject
export class App {
  constructor(private someStuff: SomeStuff) {

  }

  num1 = 5;
  num2 = 7;

  public message = `yarn 2! workspaces ${this.num1} + ${this.num2} = ${Utils.add(5, 7)} --- Name from another package ${this.someStuff.showIt()}`;
}
