const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

/*const msg = getNotes();
console.log(msg);
console.log(chalk.red("Success!"));
console.log(chalk.green.bold.inverse("Hello"))
console.log(validator.isEmail(`gauravsodia@gmail.com`));

const command = process.argv[2];
if(command == 'add'){
    console.log("Adding Notes");
}else if(command =='remove'){
    console.log("Remove Note!");
}
*/
yargs.version('1.1.0')
yargs.command({
command: 'add',
describe: 'Add a new note',
builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body:{
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    }
},
handler: function (argv) {
console.log('Title', +argv.title);
console.log('Body' + argv.body);
}
})

yargs.command({
    command: 'remove',
    describe: 'Remove a exisitong note',
    handler: function() {
        console.log('Removing an existing note.')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a command',
    handler: function() {
        console.log('asdfghjkl;lkjhgfd')
    }
})

yargs.command({
    command: 'list',
    describe: 'Show a list',
    handler: function(){
        console.log(`qwertyasdfg`)
    }
})

console.log(process.argv);
console.log(yargs.argv);
//console.log(process.argv);