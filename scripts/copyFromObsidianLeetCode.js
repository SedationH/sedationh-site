const fs = require("fs/promises")
const path = require("path")
const fixLinkFromObsidianFormat = require("./fixLinkFromObsidianFormat")

const obsidianLeetCodePath = "/Users/sedationh/obsidian/SedationH/LeetCode"
const siteLeetCodePath = path.join(__dirname, "../docs/LeetCode-1")

fs.cp(obsidianLeetCodePath, siteLeetCodePath, { recursive: true }).then(() => {
  fs.readdir(siteLeetCodePath).then((filenames) => {
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .forEach((filename) => {
        fixLinkFromObsidianFormat(path.join(siteLeetCodePath, filename))
      })
  })
})
