'use babel';

import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'five-move:previousFive': () => this.previousFive(),
      'five-move:previousFiveSelect': () => this.previousFiveSelect(),
      'five-move:nextFive': () => this.nextFive(),
      'five-move:nextFiveSelect': () => this.nextFiveSelect(),
    }));
  },

  deactivate() {
  },

  serialize() {
  },

  previousFive() {
    atom.workspace.getActiveTextEditor().moveUp(this._moveCount());
  },

  previousFiveSelect() {
    atom.workspace.getActiveTextEditor().getLastSelection().selectUp(this._moveCount());
  },

  nextFive() {
    atom.workspace.getActiveTextEditor().moveDown(this._moveCount());
  },

  nextFiveSelect() {
    atom.workspace.getActiveTextEditor().getLastSelection().selectDown(this._moveCount());
  },

  _moveCount() {
    return 5;
  }
};
