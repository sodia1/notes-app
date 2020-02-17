const fs = require('fs');

const getNotes  = function(){
    return `Your notes...`;
}

const addNotes = (title, body) {
    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    })
}

const loadNotes = () => {
    try{const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);}
    catch(e){
        return  []
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
};
