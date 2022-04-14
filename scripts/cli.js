const path = require("path")
const fixLinkFromObsidianFormat = require("./fixLinkFromObsidianFormat")

const inputPath = process.argv[2]
if (!inputPath) {
  console.error("请输入文件位置")
  throw Error()
}

const needFixFilePath = path.join(process.cwd(), process.argv[2])

fixLinkFromObsidianFormat(needFixFilePath)
