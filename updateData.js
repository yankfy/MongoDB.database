var db = connect("company")
// 错误的更新方法
// db.company.update({name:"XXX"},{sex:"2"})
// 正确的更新方法
// let workMate3 = {
//     name: "XXX",
//     age: 16,
//     sex: 2,
//     job: "UI",
//     skill: {
//         skillOne: "PhotoShop",
//         skillTwo: "Sketch",
//     },
//     regeditTime: new Date()
// }
// db.company.update({name:"XXX"},workMate3)

// $set 更新
// db.company.update({name: "XXX"}, {"$set": {sex: 0,age: 28}})

// $push更新
// db.company.update({name:"XXX"},{$push:{interest:"draw"}})

// db.company.update({name:"Pony"},{$push:{"skill.skillFour":'react'}})

// $ne 有则不添加 没有则添加
// db.company.update({name:"Pony",interest:{$ne:'photoshop'}},{$push:{interest:"Internet"}})

// $addToSet 更简化的添加 有则添加 无则不添加
// db.company.update({name:"Pony"},{$addToSet:{interest:"Read"}})

// $each 批量修改器
// var newInterests = ['Sing','Dance','Code']
// db.company.update({name:"Pony"},{$addToSet:{interest:{$each:newInterests}}})

// $pop 删除修改器 
// 1 从末端进行删除
// -1 从开始位置进行删除
db.company.update({name:"Pony"},{$pop:{interest:1}})

// 数组定位修改 非应答式操作
db.company.update({name:"Pony"},{$set:{"interest.1":"README"}})

print("[updateDatabase] This uodate database is successful")