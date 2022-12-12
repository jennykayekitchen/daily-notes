/*
    Define a variable named `notes` and assign a value of an empty array
*/
// const notes = [];

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

// const newNote = {
//     id: 1,
//     text: "Review all my old code before asking for help or looking at hints.",
//     author: "Jenny Kitchen",
//     date: "11/8/22",
//     topics: ["reminder", "help", "hint", "thinking"]
// };

// notes.push(newNote);

// const newNote2 = {
//     id: 2,
//     text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
//     author: "Jenny Kitchen",
//     date: "11/8/22",
//     topics: ["thinking", "problem solving"]
// };

// notes.push(newNote2);

// const newNote3 = {
//     id: 3,
//     text: "Need to have all my code backed up to Github by the end of the week.",
//     author: "Jenny Kitchen",
//     date: "11/8/22",
//     topics: ["professional", "github"]
// };

// notes.push(newNote3);

// for (note of notes) {
//     console.log(note.text)
// }

// console.log("*** All Note Topics ***")
// for (note of notes) {
//     for (const topic of note.topics) {
//     console.log(topic)
//     }
// }

// let totalTopics = 0

// for (note of notes) {
//    totalTopics = totalTopics + note.topics.length
// }

// let average = totalTopics / notes.length
// console.log("*** Average Topics Per Note ***");
// console.log(average);

// let filteredNotes = []
// const criteria = "thinking"

// for (note of notes) {
//     if (note.topics.includes(criteria)){
//         filteredNotes.push(note)
//     }
// }
// console.log(filteredNotes)

/*
    Since the string has to be built up in parts - in both
    the outer loop and the inner loop - start off with a
    variable that has an initial value of an empty string.
*/
// sections = ""
// for (const note of notes) {
//     sections += "<article>";
//     sections += note.text;
//     sections += "\n";

//         for (topics of note.topics) {
//             section = `<section>${topics}</section>\n`
//             sections += section
//         }
//     sections += `</acticle>\n`
// }
// console.log("***  Note Articles  ***");
// console.log(sections);

const age1 = calcAge1(1986);

function calcAge1(birthyear) {
    return 2021 - birthyear;
}


//Function expression
const age2 = calcAge2(1986);

const calcAge2 = function(birthyear) {
    return 2021 - birthyear;
}

console.log(age1, age2);