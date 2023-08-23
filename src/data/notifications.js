const notify=[
    'Notify1',
    'Notify2',
    'Notify3',
    'Notify4',
]
const server=[
    {
        title:'CPU USAGE',
        process:0.25,
        detail:'348 Process. 1/4 Cores.'
    },
    {
        title:'Memory USAGE',
        process:0.73,
        detail:'11444GB/16348MB'
    },
    {
        title:'SSD 1 USAGE',
        process:0.92,
        detail:'243GB/256GB'
    },
]
const notifications=[
    {
        title:'You have '+ notify.length + ' notifications',
        list: [...notify]
    },
    {
        title:'Server',
        list: [...server]   
    }
]

export default notifications