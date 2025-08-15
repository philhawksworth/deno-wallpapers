export async function preBuild() {

// generate a data object from all the crocs images
const imagesDir = `src/wallpapers`;
const files = [];
for await (const file of Deno.readDir(imagesDir)) {
  files.push({
    // make the name titlecase and replace - with space
    "name": file.name
  });
}

await Deno.writeTextFile("src/_data/wallpapers.json", JSON.stringify(files, null, 2));
return "Data generated";
}