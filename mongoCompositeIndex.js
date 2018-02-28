var startTime = (new Date()).getTime()

// 复合索引
var db = connect("company")

// db.randomInfo.ensureIndex({randNum0:1})

// db.randomInfo.getIndexes()

// hint 最先索引查询顺序
var rs = db.randomInfo.find({
    username: "9undefinedpsv2",
    randNum0: 62433
}).hint({
    randNum0: 1
})

rs.forEach(el => {
    printjson(el);
});

var runTime = (new Date()).getTime() - startTime

print("this run time" + runTime + "ms")

// 删除索引数据 注意是内容
// db.randomInfo.dropIndex('randNum0_1')