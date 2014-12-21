var AppDispatcher = require('../dispatcher/AppDispatcher');
var DictConstants = require('../constants/DictConstants');
var assign = require('object-assign');

var _open_portals = {};

/**
 * Create an entry for a portal
 */
function create() {
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    open: false,
  };
}

/**
 * Toggle a portal entry open/closed
 */
function toggle(id) {
  _todos[id].open = !_todos[id].open;
}

/**
 * Set a portal entry's open/closed state
 */
function set(id, state) {
  _todos[id].open = state;
}


var DictStore = {

  todoAppCallback: null,

  /**
   * Tests whether all the remaining TODO items are marked as completed.
   * @return {boolean}
   */
  areAllComplete: function() {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _todos;
  },

  emitChange: function() {
    this.todoAppCallback();
  },

  /**
   * Not related to AppDispatcher.register()
   * @param {function} callback
   */
  registerChangeListener: function(callback) {
    this.todoAppCallback = callback;
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function() {
    this.todoAppCallback = null;
  }
};

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case DictConstants.DICT_INIT:
      var num_portals = action.number;
      for (var i = 0; i < num_portals; i++) {
        create()
      }
      break;

    case DictConstants.DICT_OPEN_PORTAL:
      set(action.id, true);
      break;

    case DictConstants.DICT_CLOSE_PORTAL:
      set(action.id, false);
      break;

    case DictConstants.DICT_CLOSE_ALL:
      for (var id in _todos) {
          set(id, false);
      }
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  DictStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = DictStore;
