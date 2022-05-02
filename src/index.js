// #!/usr/bin/env node

import sade from "sade"
import { getLyrics } from "./utils.js"
import { writeFile } from "node:fs/promises"

sade("extract-lyrics <mp3-path> <file-path>")
	.action(main)
	.parse(process.argv)

async function main ( mp3Path, filePath ) {
	console.log("mp3Path", mp3Path)
	console.log("filePath", filePath)

	const lyrics = await getLyrics(mp3Path)
	console.log({ lyrics })

	await writeFile(filePath, lyrics || "")
}
