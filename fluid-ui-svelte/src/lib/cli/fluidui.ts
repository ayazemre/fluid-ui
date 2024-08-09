#! /usr/bin/env node
import { fetchComponent } from "./modules/fetchComponent.js";
import { validateArgs } from "./modules/validateArgs.js";

console.log(process.argv);

switch (process.argv[2]) {
    case "add":
        const areArgsValid = validateArgs(process.argv, "add");
        console.log(areArgsValid);
        const response = fetchComponent(process.argv[3], process.argv[4]);
        break;
    default:
        console.log("Dibby dobbdy");
        break;
}