// Task 16 = More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["talat", "rimsha", "shumaila", "noureen"];
console.log("great news! we found a bigger table");
guest_list.unshift("sadaf");
guest_list.splice(Math.floor(guest_list.length / 2), 0, "Ali");
guest_list.push("areeb");
guest_list.forEach(guest => {
    console.log(`dear ${guest} you all are invited`);
});
export {};
