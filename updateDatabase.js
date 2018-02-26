var workMate11 = {
    name: "Pony",
    age: 18,
    sex: 1,
    job: "前端",
    skill: {
        skillOne: "HTML+CSS",
        skillTwo: "Javascript",
        skillThree: "Node"
    },
    regeditTime: new Date()
}

var workMate12 = {
    name: "YYY",
    age: 20,
    sex: 1,
    job: "后端",
    skill: {
        skillOne: "PHP",
        skillTwo: "Javascript"
    },
    regeditTime: new Date()
}

var workMate13 = {
    name: "XXX",
    age: 16,
    sex: 0,
    job: "UI",
    skill: {
        skillOne: "PhotoShop",
        skillTwo: "Sketch",
    },
    regeditTime: new Date()
}
var workMate4 = {
    name: 'XiaoWang',
    age: 25,
    sex: 1,
    job: 'UI',
    skill: {
        skillOne: 'PhotoShop',
        skillTwo: 'UI',
        skillThree: 'PPT'
    },
    regeditTime: new Date(),
    interest: []
}
var workMate5 = {
    name: 'LiangPeng',
    age: 28,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaScript',
    },
    regeditTime: new Date(),
    interest: []
}
var workMate6 = {
    name: 'HouFei',
    age: 25,
    sex: 0,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaScript',
    },
    regeditTime: new Date(),
    interest: []
}
var workMate7 = {
    name: 'LiuYan',
    age: 35,
    sex: 0,
    job: '美工',
    skill: {
        skillOne: 'PhotoShop',
        skillTwo: 'CAD',
    },
    regeditTime: new Date(),
    interest: []
}
var workMate8 = {
    name: 'DingLu',
    age: 20,
    sex: 0,
    job: '美工',
    skill: {
        skillOne: 'PhotoShop',
        skillTwo: 'CAD',
    },
    regeditTime: new Date(),
    interest: []
}
var workMate9 = {
    name: 'JiaPeng',
    age: 29,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaScript',
        skillThree: 'PHP'
    },
    regeditTime: new Date(),
    interest: []
}
var workMate10 = {
    name: 'LiJia',
    age: 26,
    sex: 0,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaScript',
        skillThree: 'PHP'
    },
    regeditTime: new Date(),
    interest: []
}

var db = connect("company")

var workMateArr = [workMate11, workMate12, workMate13, workMate4, workMate5, workMate6, workMate7, workMate8, workMate9, workMate10];

db.company.insert(workMateArr)

print("[updateDatabase] This insert database is successful")