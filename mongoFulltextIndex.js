// 全文索引
db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// db.info.ensureIndex({contextInfo:'text'})

// 查找
db.info.find({$text:{$search:"day -PlayGame"}}) // and or

// 减号表示 非 不出现
// \ 转义符 查找多个词

db.info.find({$text:{$search:"\"love life\" work"}})