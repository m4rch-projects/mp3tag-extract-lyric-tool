import { copyFile, mkdir, rm, writeFile } from "node:fs/promises"
import $7z from "7zip-min"
import cpr from "cpr"
import { promisify } from "node:util"
import { existsSync } from "node:fs"

const copyFolder = promisify(cpr)

async function main () {
	const pkg = {
		name: "mp3tag-extract-lyric-tool",
		version: "0.1.0",
		author: "m4rch",
		license: "AGPL-3.0-only",
		main: "index.js",
		type: "commonjs",
		private: true
	}
	await writeFile("dist/package.json", JSON.stringify(pkg, null, "\t") + "\n")
	await copyFile("LICENSE", "dist/LICENSE")
	await copyFile("scripts/index.bat", "dist/index.bat")

	await copyFolder("dist", "extract-lyrics")

	if (existsSync("release")) await rm("release", { recursive: true })
	await mkdir("release")

	await compress("extract-lyrics", "release/extract-lyrics.zip")
	await compress("extract-lyrics", "release/extract-lyrics.7z")

	await rm("extract-lyrics", { recursive: true })
}

function compress ( path, zipPath, ...args ) {
	return new Promise(( resolve, reject ) => (
		$7z.cmd([
			"a", ...args,
			zipPath,
			path
		], ( error ) => error ? reject(error) : resolve())
	))
}

main()
