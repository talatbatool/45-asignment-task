// Task 17 = Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// have an empty list at the end of your program.
let guest_list = ["talat", "shumaila", "rimsha", "noureen", "Ali", "Areeb"]; // i make a new original list 
console.log("Sorry! the new dinner table won't arrive in time for the dinner, so we can't invite more than two guests"); // statement
while (guest_list.length > 2) {
    let removedGuests = guest_list.pop(); // removing the guests more than two
    if (removedGuests !== undefined) {
        console.log(`Sorry ${removedGuests}  we can't invite you for dinner at this time`);
    }
    ; // message guests letting them know that thy are not invited
}
guest_list.forEach(guest => {
    console.log(`Dear ${guest} you are still invited for dinner`);
});
guest_list.splice(0, guest_list.length);
console.log("updated list of guest:", guest_list);
export {};
