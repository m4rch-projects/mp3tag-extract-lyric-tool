# mp3tag-extract-lyric-tool

## use

1. download and install [node.js](https://nodejs.org/en/download/), make sure to check "add to path" while installing
2. go to [the releases](https://github.com/m4rch-projects/mp3tag-extract-lyric-tool/releases/)
3. download the newest release
4. unzip and put the path into a directory, where you can find it
5. open mp3tag and add a new tool and give it a name
6. add the path to the *index.bat* file into the path section
7. add two arguments: the first one being the the path of the mp3 file, `"%_path%"`, the second one being the path to the text file where you want to have the lyrics, for example `"%_folderpath%%_filename%.txt"`
8. **done!**

## build yourself

1. git clone this repo
2. install all dependencies using npm or yarn or pnpm
3. use the command `npm run bundle` (or `yarn run` or `pnpm run`) to bundle
4. **done!**
