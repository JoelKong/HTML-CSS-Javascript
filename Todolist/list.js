const list = [];
let command = prompt("What would you like to do?").toLowerCase();



while (command !== "quit" && command !== "q") {
    if (command === "new") {
        const todo = prompt("Enter new todo");
        list.push(todo);
        console.log(`${todo} added to list`);
    }
    else if (command === "list") {
        console.log("**********");
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("**********");
    }
    else if (command === "delete") {
        const remove = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(remove) && remove <= list.length - 1) {
            const deleted = list.splice(remove, 1);
            console.log(`Deleted ${deleted[0]}`);
        }
        else {
            console.log("Unknown Index");
        }
    }
    command = prompt("What would you like to do?").toLowerCase();

}

console.log("Quitting the App!");

