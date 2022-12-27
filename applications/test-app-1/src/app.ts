import { autoinject } from 'aurelia-framework';
import { Utils } from "@test-packages/package-1";
import { SomeStuff } from 'someStuff';

@autoinject
export class App {

  constructor(private someStuff: SomeStuff) {

  }

  //public message = "basic working";
  public message = `yarn 2! workspaces ${Utils.add(5, 7)}  --- ${this.someStuff.showIt()}`;
}
