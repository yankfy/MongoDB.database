// 用户的创建和管理

db.createUser({
    user: "Pony",
    pwd: "123456",
    customData: {
        name: "破泥",
        email: "yankfy@qq.com",
        age: 18
    },
    roles: [{
        role:"readWrite",
        db:"company"
    }, 'read']
})

// 查找用户
db.system.users.find()

// 删除用户
db.system.users.remove({user:"Pony"})

// 用户鉴权
db.auth("Pony","123456") // 返回1 鉴权成功 返回0 鉴权失败

// 