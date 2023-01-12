// const validator = require('validator')
const notesUtil = require('./notes.js')

const chalk = require('chalk')
const yargs = require('yargs')


// console.log(chalk.blue.bold.inverse("Success!"))
// console.log(yargs.argv)
// console.log(getNotes())

// console.log(validator.isEmail('andrewexample.com'))

yargs.command({
    command: "add",
    describe: "Add note",
    builder: {
        title : {
            describe: "title of item",
            demandOptions: true,
            type: 'string'
        },
        body : {
            describe: "body of item",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notesUtil.addNotes(argv.title,argv.body)
    }
})

yargs.command({
        command : 'list',
        describe: 'List notes',
        handler(){
            notesUtil.listNotes()
        }
})

yargs.command({
        command: 'read',
        describe: 'Read notes',
        handler(){
            console.log('Reading items...')
        }
})

yargs.command({
    command: "remove",
    describe: "remove note" ,
    builder: {
        title: {
            describe : "title of notes",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.removeNotes(argv.title)
    }
})


yargs.command({
    command : "read",
    describe: "Read from notes",
    builder: {
        title: {
            describe: "title of note you want to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.readNote(argv.title)
    }
})

yargs.parse()