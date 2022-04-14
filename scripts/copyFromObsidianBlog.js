const fs = require("fs/promises")
const path = require("path")
const fixLinkFromObsidianFormat = require("./fixLinkFromObsidianFormat")

const obsidianLeetCodePath = "/Users/sedationh/obsidian/SedationH/Public/Blog"
const siteLeetCodePath = path.join(__dirname, "../blog")

fs.cp(obsidianLeetCodePath, siteLeetCodePath, { recursive: true }).then(() => {
  fs.readdir(siteLeetCodePath).then((filenames) => {
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .forEach((filename) => {
        fixLinkFromObsidianFormat(path.join(siteLeetCodePath, filename))
      })
  })
})
