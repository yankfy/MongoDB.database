var startTime = (new Date()).getTime()

var db = connect("company")

var result = db.randomInfo.find({
    username: "fydqundefined7d"
})

result.forEach(el => {
    printjson(el);
});

var runTime = (new Date()).getTime() - startTime

print("this run time" + runTime + "ms")

// 建立索引值查询 提升200倍性能 只运行一次
// db.randomInfo.ensureIndex({username:1})