// Task 21 = They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
let studentsObjects = [
    {
        name: "talat",
        rollNo: 1234,
        age: 25,
        city: "karachi",
        center: "GIAIC"
    },
    {
        name: "saleem",
        rollNo: 2233,
        age: 30,
        city: "karachi",
        center: "GIAIC"
    }
];
for (let i = 0; i < studentsObjects.length; i++) {
    console.log(studentsObjects[i].name);
    console.log(studentsObjects[i].rollNo);
    console.log(studentsObjects[i].age);
    console.log(studentsObjects[i].city);
    console.log(studentsObjects[i].center);
    console.log("_____________\n");
}
export {};
