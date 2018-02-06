let startTime = (new Date()).getTime()

// 循环插入
// for (let i = 0; i < 1000; i++) {
//     db.log.insert({
//         "num": i
//     })
// }

// 批量插入
let numArr = []
for (let i = 0; i < 1000; i++) {
    numArr.push({
        "num": i
    })
}
db.log.insert(numArr)

let runTime = (new Date()).getTime() - startTime

print("[batchInsert] This run " + runTime + "ms")