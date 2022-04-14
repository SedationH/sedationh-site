const path = require("path")
const fixLinkFromObsidianFormat = require("./fixLinkFromObsidianFormat")

const inputPath = process.argv[2]
let destPath = process.argv[3]
const cwd = process.cwd()
if (!inputPath) {
  console.error("请输入文件位置")
  throw Error()
}

const needFixFilePath = path.join(cwd, inputPath)

if (destPath) {
  destPath = path.join(cwd, destPath)
}

fixLinkFromObsidianFormat(needFixFilePath, destPath)
