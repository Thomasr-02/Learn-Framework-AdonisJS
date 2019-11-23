'use strict'

class TaskController {
    index({view}) {
        const task= [
           {title: 'Task one', body: 'This task one'},
           {title: 'Task two', body: 'This task two'},
        ] 
        return view.render('task',{
            title: 'Your tasks',
            tasks: task
        })
    }
}

module.exports = TaskController
