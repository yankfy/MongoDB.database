// 多条件查询
// $in 一个key多个value
db.company.find({age:{$in:[26,33]}},{
    name:1,
    "skill.skillOne":1,
    age:1,
    _id:0
})

// $nin 不包含在内 查询其他结果
db.company.find({age:{$nin:[26,33]}},{
    name:1,
    "skill.skillOne":1,
    age:1,
    _id:0
})

// $or 或者
db.company.find({$or:[{age:{$gte:30}},{"skill.skillThree":"PHP"}]},{
    name:1,
    "skill.skillThree":1,
    age:1,
    _id:0
})

// $nor 不是这个区间的

// $not 除了查询信息之外的信息
db.company.find({age:{$not:{$gte:20,$lte:30}}},{
    name:1,
    "skill.skillThree":1,
    age:1,
    _id:0
})