let workMate1 = {
    name:"Pony",
    age:18,
    sex:1,
    job:"前端",
    skill:{
        skillOne:"HTML+CSS",
        skillTwo:"Javascript",
        skillThree:"Node"
    },
    regeditTime:new Date()
}

let workMate2 = {
    name:"YYY",
    age:20,
    sex:1,
    job:"后端",
    skill:{
        skillOne:"PHP",
        skillTwo:"Javascript"
    },
    regeditTime:new Date()
}

let workMate3 = {
    name:"XXX",
    age:16,
    sex:0,
    job:"UI",
    skill:{
        skillOne:"PhotoShop",
        skillTwo:"Sketch",
    },
    regeditTime:new Date()
}

var db = connect("company")

let workMateArr = [workMate1,workMate2,workMate3]

db.company.insert(workMateArr)

print("[updateDatabase] This insert database is successful")