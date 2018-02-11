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
db.company.update({name: "XXX"}, {"$set": {sex: 0,age: 28}})

print("[updateDatabase] This uodate database is successful")