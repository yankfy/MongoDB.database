// 如何在文本中运行查询语句

// hasNext

var db = connect("company")

var result = db.workmate.find()

// while (result.hasNext()) {
//     printjson(result.next())
// }

// 两种方式 forEach 更为优雅
result.forEach(res => {
    printjson(res)
});