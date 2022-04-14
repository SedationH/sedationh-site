const fs = require("fs/promises")

const fixLinkFromObsidianFormat = (needFixFilePath) => {
  fs.readFile(needFixFilePath, "utf8").then((data) => {
    const result = data.replace(/!\[\[(.*)\]\]/g, (_, v) => {
      return `![${v}](./attachments/${encodeURI(v)})`
    })

    fs.writeFile(needFixFilePath, result)
  })
}

module.exports = fixLinkFromObsidianFormat
