// 等于修饰符
db.company.find({
    "skill.skillOne": "HTML+CSS"
}, {
    name: true,
    "skill.skillOne": true,
    _id: false
});

db.company.find({
    "skill.skillOne": "HTML+CSS"
}, {
    name: 1,
    "skill.skillOne": 1,
    _id: 0
});

// 不等修饰符
db.company.find({
    "age": {
        // 大于等于26
        $lte: 26,
        // 小于等于25
        $gte: 25
    }
}, {
    name: 1,
    "skill.skillOne": 1,
    age:1,
    _id: 0
});

// 查找日期
var startDate = new Date('01/01/2018')
db.company.find({
    regeditTime:{$lt:startDate}
},{
    name:1,
    "skill.skillOne":1,
    regeditTime:1
})