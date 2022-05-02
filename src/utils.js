import * as mm from "music-metadata"

export async function getLyrics ( path ) {
	const { native } = await mm.parseFile(path)

	const meta = native["ID3v2.4"]
	if (!meta) return null

	const lyrics = meta.find(({ id }) => id == "USLT")
	if (lyrics) {
		const { text } = lyrics.value
		return text
	}

	const wrongUSLT = meta.find(({ id }) => /USLT/.test(id))
	if (wrongUSLT) {
		const text = wrongUSLT.value
		return text
	}

	const wrongUnsynced = meta.find(({ id }) => /unsyncedlyrics/i.test(id))
	if (wrongUnsynced) {
		const text = wrongUnsynced.value
		return text
	}

	const wrong = meta.find(({ id }) => /lyrics-eng/i.test(id))
	if (wrong) {
		const text = wrong.value
		return text
	}

	const wrongL = meta.find(({ id }) => /lyrics/i.test(id))
	if (wrongL) {
		const text = wrongL.value
		return text
	}

	return null
}
