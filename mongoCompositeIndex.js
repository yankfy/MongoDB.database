var startTime = (new Date()).getTime()

// 复合索引
var db = connect("company")

// db.randomInfo.ensureIndex({randNum0:1})

// db.randomInfo.getIndexes()

var rs = db.randomInfo.find({
    username:"9undefinedpsv2",
    randNum0:62433
})

rs.forEach(el => {
    printjson(el);
});

var runTime = (new Date()).getTime() - startTime

print("this run time" + runTime + "ms")