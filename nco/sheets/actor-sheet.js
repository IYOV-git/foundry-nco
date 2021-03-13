import * as Dice from "../dice.js";

export class ActorSheetNCO extends ActorSheet {
  constructor(...args) {
    super(...args);
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["nco", "sheet", "actor", "character"],
      template: "systems/nco/sheets/actor-sheet.html",
      width: 720,
      height: 680,
      resizable: true,
    });
  }

  getData() {
    const data = super.getData();

    return data;
  }

  activateListeners(html) {
    if (this.actor.owner) {
      html.find(".button-roll").click((e) => this._onTheCheck(e));
    }
    super.activateListeners(html);
  }

  _onTheCheck(event) {
    event.preventDefault();
    Dice.theCheck(4, 4);
  }
}
