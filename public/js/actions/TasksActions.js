var AppDispatcher = require('./dispatcher/AppDispatcher');
var TasksConstants = require('./constants/TasksConstants');
var Api = require('./services/Api');

var TaskActions = {

	receiveTasks : function() {
		Api
			.get('/API/Tasks')
			.then(function(data) {
				AppDispatcher.handleAction({
					actionType: TasksConstants.LOAD_DATA,
					data: data
				});
			});
	},
	addTask : function(data) {
		AppDispatcher.handleAction({
			actionType: TasksConstants.TASK_ADD,
			data: data
		})
	},
	deleteTask : function(data) {
		AppDispatcher.handleAction({
			actionType: TasksConstants.TASK_REMOVE,
			data: data
		})
	}
};

module.exports = TaskActions;