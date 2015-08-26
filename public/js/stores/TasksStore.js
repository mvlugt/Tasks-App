var AppDispatcher = require('./dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TasksConstants = require('./constants/TasksConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _tasks = {};

function setTasks(tasks) {
	_tasks = tasks;
};

var TasksStore = assign({}, EventEmitter.prototype, {

	getTasks: function () {
        return _tasks;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

TasksStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {

		case TasksConstants.LOAD_DATA:
			setTasks(action.data);
			break;

		default:
			return true;
			break;
	}

	TasksStore.emitChange();

	return true;

});

module.exports = TasksStore;