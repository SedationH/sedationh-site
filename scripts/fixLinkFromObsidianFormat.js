const fs = require("fs/promises")
const path = require("path")

const inputPath = process.argv[2]
if (!inputPath) {
  console.error("请输入文件位置")
  throw Error()
}

const needFixFilePath = path.join(process.cwd(), process.argv[2])

fs.readFile(needFixFilePath, "utf8").then((data) => {
  const result = data.replace(/!\[\[(.*)\]\]/g, (_, v) => {
    return `![${v}](./attachments/${encodeURI(v)})`
  })

  fs.writeFile(needFixFilePath, result)
})
