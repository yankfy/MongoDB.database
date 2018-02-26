// findAndModify功能

// db.runCommand()

// false表示未查找到不增加 true表示所有的都增加

// db.company.update({sex:1},{$set:{money:'1000'}},false,true)

// var resultMessage = db.runCommand({getLastError:1})

// if(resultMessage.updateExisting){
//     // 如果操作成功
// }else{
//     // 如果操作失败
// }

// printjson(resultMessage)

// findAndModify
var myModify = {
    findAndModify: "company",
    query:{name:"Pony"},
    update:{$set:{age:38}},
    // new:true,
    fileds:"age"
}

var resultMessage = db.runCommand(myModify)

printjson(resultMessage)