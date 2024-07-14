#!/bin/env node;
import inquirer from "inquirer";
console.log("🏵️🏵️  Wellcome to Sobia Furqan's TODO LIST APP  🏵️🏵️");
let condition = true;
let todos = [];
async function runTodoApp() {
    while (condition) {
        const todoQuestions = await inquirer.prompt([
            {
                name: "firstQuestion",
                type: "input",
                message: "🏵️   What would you like to add  in your todo list  🏵️?",
            },
            {
                name: "secondQuestion",
                type: "confirm",
                message: "🏵️   Would you like to add more in your todos or want to exit from todos?  🏵️",
                default: false,
            },
        ]);
        todos.push(todoQuestions.firstQuestion);
        console.log(todos);
        condition = todoQuestions.secondQuestion;
        console.log("🏵️   your todos add successfully ☝️   see your updated todos list🏵️  ");
    }
}
runTodoApp();
