// 分页
// 每页显示两个
// 年龄从小到大

db.workmate.find({},{name:1,age:1,_id:0}).limit(2).skip(0).sort({age:1})

// 查询大型数据 $where 存在风险 对数据库压力增大 尽量少用 这个修饰符
db.workmate.find({$where:"this.age>30"},{name:1,age:1,_id:0})