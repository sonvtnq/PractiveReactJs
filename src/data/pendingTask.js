const task = [
    'task1',
    'task2',
    'task3',
]

const pendingTask=[
    {
        title:'You have '+ task.length + ' pending tasks',
        list: [...task],
        footer: 'View all tasks',
    },
]

export default pendingTask