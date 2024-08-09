import { writeFile, writeFileSync } from "fs";

export async function fetchComponent(componentID: string, targetPath: string) {
    const response = await fetch("https://fluidui.frostium.io/api/component/" + componentID);
    const data = await response.arrayBuffer();
    writeFileSync(targetPath, Buffer.from(data));
    console.log("Added component to given path.");
}