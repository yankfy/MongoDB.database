let userName = 'Pony'
let timeStamp = Date.parse(new Date())
let jsonDatabase = {"loginName":userName,"loginTime":timeStamp}

var db = connect("log") // use log 此处这个db用var

db.log.insert(jsonDatabase)

print("[demo]:log print success")