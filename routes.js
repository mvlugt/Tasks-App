module.exports = function(app) {
	
	var Tasks = require('./models/Tasks.js');

	app.get('/API/Tasks', function(req, res) {
		console.log('TASKS - GET - PROCESSED');
		Tasks.find(function(err, tasksReturned) {
			if(err)
				res.send(err);
			//action request here?
			res.json(tasksReturned);
		});
	});

	app.post('/API/Tasks', function(req, res) {
		console.log('TASKS - POST - PROCESSED');
		Tasks.create({
			task : req.body.task,
			done: false
		}, function(err, task) {
			if(err)
				res.send(err);
			Tasks.find(function(err, tasksReturned) {
				if(err)
					res.send(err);
				res.json(tasksReturned);
			});
		});
	});

	app.delete('/API/Tasks/:tasks_id', function(req, res) {
		console.log('TASKS - DELETE - PROCESSED');
		Tasks.remove({
			_id : req.params.tasks_id
		}, function(err, tasks) {
			if(err)
				res.send(err);
			Tasks.find(function(err, tasksReturned) {
				if(err)
					res.send(err);
				res.json(tasksReturned);
			});
		});
	});
};