export async function preBuild() {

// generate a data object from all the crocs images
const imagesDir = `src/wallpapers`;
const files = [];

function bytesToSize(bytes: number, seperator = "") {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes == 0) return 'n/a'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10)
  if (i === 0) return `${bytes}${seperator}${sizes[i]}`
  return `${(bytes / (1024 ** i)).toFixed(1)}${seperator}${sizes[i]}`
}

for await (const file of Deno.readDir(imagesDir)) {
  const { size } = await Deno.stat(`${imagesDir}/${file.name}`);
  files.push({
      // make the name titlecase and replace - with space
      "name": file.name,
      "size": bytesToSize(size)
    });
  }


await Deno.writeTextFile("src/_data/wallpapers.json", JSON.stringify(files, null, 2));
return "Data generated";
}