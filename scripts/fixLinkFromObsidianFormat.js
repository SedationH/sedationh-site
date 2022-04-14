const fs = require("fs/promises")

const fixLinkFromObsidianFormat = (needFixFilePath, destFixedFilePath) => {
  fs.readFile(needFixFilePath, "utf8").then((data) => {
    // 图片修复
    let result = data.replace(/!\[\[(.*)\]\]/g, (_, v) => {
      return `![${v}](./attachments/${encodeURI(v)})`
    })

    // URL 修复
    result = result.replace(/\[\[(.*)\]\]/g, (_, v) => {
      return `[${v}](./${encodeURI(v)}.md)`
    })
    fs.writeFile(destFixedFilePath || needFixFilePath, result)
  })
}

module.exports = fixLinkFromObsidianFormat
