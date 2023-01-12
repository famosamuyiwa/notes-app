const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()
    debugger
    notes.forEach(note => {
        console.log(chalk.blue.bold("Title: " + note.title + "\n"))
    })
}

const readNote = (title)=>{
        const notes = loadNotes()
        const note = notes.find(note => note.title === title)

        if(note){
            console.log(chalk.bold.blue(note.title))
            console.log(note.body)
        }
        else{
            console.log(chalk.red("No note exists with that Title."))
        }
}

const getNotes = (title,body) => {
}

const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title )
    if (!duplicateNote){
        notes.push({
            title : title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bold.green("Note added!"))
    }
    else{
        console.log(chalk.bold.red("Title already exists!"))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const note = notes.find( note =>(note.title === title))

    if(note){
        notes.splice(notes.indexOf(note), 1)
        console.log(chalk.green.bold("Note has been removed!"))
    }
    else{
        console.log(chalk.red.bold("Title not found!"))
    }
    saveNotes(notes)
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes, null, 4)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNote : readNote 
}