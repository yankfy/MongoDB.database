// 生成随机数
function getRandomNumber(min, max) {
    let range = max - min
    let rand = Math.random()
    return (min + Math.round(rand * range))
}

// console.log(getRandomNumber(10000, 99999))

// 生成随机名字
function getRandomUserName(min, max) {
    let tempStringArray = '123456789qwertyuiopasdfghjklzxcvbnm'.split("")
    let outputText = ''
    for (let i = 1; i < getRandomNumber(min, max); i++) {
        outputText = outputText + tempStringArray[getRandomNumber(0, tempStringArray.length)]
    }
    return outputText
}

// console.log(getRandomUserName(7, 16))

var startTime = (new Date()).getTime()

// 连接数据库 空数组之前 一定要先连接数据库操作
var db = connect('company')

// 插入之前先删除
db.randomInfo.drop()

var tempInfo = []

for (let i = 0; i < 2000000; i++) {
    tempInfo.push({
        username: getRandomUserName(7, 16),
        regeditTime: new Date(),
        randNum0: getRandomNumber(10000, 99999),
        randNum1: getRandomNumber(10000, 99999),
        randNum2: getRandomNumber(10000, 99999),
        randNum3: getRandomNumber(10000, 99999),
        randNum4: getRandomNumber(10000, 99999),
        randNum5: getRandomNumber(10000, 99999),
        randNum6: getRandomNumber(10000, 99999),
        randNum7: getRandomNumber(10000, 99999),
        randNum8: getRandomNumber(10000, 99999),
        randNum9: getRandomNumber(10000, 99999)
    })
}

// 批量插入
db.randomInfo.insert(tempInfo)

// 结束时间
var endTime = (new Date()).getTime() - startTime

print("Insert 2000000" + endTime + "ms")