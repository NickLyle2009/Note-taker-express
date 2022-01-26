const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);

class Notes{
//read, write, get, post method

readNotes(){
return readFromFile('db/db.json', 'utf8');
};

writeNotes(data){
    return writeFromFile('db/db.json', JSON.stringify(data))

};

getNotes(){
    //GET FROM DB.JSON. RETURN OBJECT
//CALL READNOTES FUNCITON, MAKE EMPTY ARRAY, CONCACT NOTES INTO NEW ARRAY, TRY-parsenotes is something, error AND CATCH FUNCTION-
this.readNotes()
};
addNotes(data){
    const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };
//PASS THrOUGH NOTES, title and text in it. create new note with unique id, return
// call get note suse writenotes function to make new set of notes .then function 
};


}

module.export = Notes;