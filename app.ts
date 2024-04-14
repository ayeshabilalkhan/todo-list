#! /usr/bin/env node

import inquirer from "inquirer";

// inquirer  done
// array     done
// function  done
// operators done

// array
let todos : string[] = [];


//  function
async function createTodo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        });
        

        if (ans.select == "Add"){
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });

            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        

        if(ans.select == "Update"){
    let updateTodo = await inquirer.prompt({
        type:"list",
        message: "Update items in the list",
        name: "todo",
        choices: todos.map(item => item)
    });

    let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
    });
    
    let newTodo = todos.filter(val =>val !== updateTodo.todo);
    todos = [...newTodo,addTodo.todo];
    console.log(todos);
        }
    

        if(ans.select == "View"){
            console.log("*** TO DO LIST ***");
            console.log(" * * * * * * * * * ");
            todos.forEach(todo => console.log(todo));
        }
    
        
            if(ans.select == "Delete"){
            let deleteTodo = await inquirer.prompt({
                type:"list",
                message: "Update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            todos = todos.filter(val =>val !== deleteTodo.todo);
            console.log("Item deleted!");
            console.log("Updated Todos:");
            todos.forEach(todo => console.log(todo));
        }


// Exit option added
        if(ans.select == "Exit"){
            console.log("Thank you for using the ToDo program. Exiting...");
            return;
        }

    } while(true)
    
}
createTodo(todos);
