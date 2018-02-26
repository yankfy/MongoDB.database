// 数组查询
// 这个写法表示完全匹配
db.workmate.find({interest:["画画"]
},{
    name:1,
    interest:1,
    age:1,
    _id:0
})

// 把中括号去掉是模糊匹配
db.workmate.find({interest:"画画"
},{
    name:1,
    interest:1,
    age:1,
    _id:0
})

// 查询修饰符 $all && $or || 都会
db.workmate.find({interest:
    {$all:["看电影",'看书']}
},{
    name:1,
    interest:1,
    age:1,
    _id:0
})


// $in 或者
db.workmate.find({interest:
    {$in:["看电影",'看书']}
},{
    name:1,
    interest:1,
    age:1,
    _id:0
})

// $size 查询数量
db.workmate.find({interest:
    {$size:3}
},{
    name:1,
    interest:1,
    age:1,
    _id:0
})

// 查看第一项
// $slice 后面数字表示显示几项 负数表示从后开始显示
db.workmate.find({interest:
    {$size:3}
},{
    name:1,
    interest:{$slice:3},
    age:1,
    _id:0
})