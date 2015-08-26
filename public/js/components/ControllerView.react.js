var React = require('react');
var TasksStore = require('./stores/TasksStore');
var MainSection = require('./components/MainSection.react');

function getTasks() {
	return {
		allTasks: TasksStore.getTasks();
	};
};

var TasksApp = React.createClass({
	getInitialState: function() {
		return getTasks();
	},

	componentDidMount: function() {
		TasksStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		TasksStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
			<div>
				{this.state.allTasks}
			</div>
		);
	},

	_onChange: function() {
		this.setState(getTasks());
	}

});

module.exports = TasksApp;