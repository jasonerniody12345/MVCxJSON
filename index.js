
var input = process.argv.slice(2)
var controller = require ("./controller")

if (input[0] === "names") {
    controller.getAllStudent()
}
else if (input[0] === "males") {
    controller.getAllMale()
}
else if (input[0] === "virgins") {
    controller.getAllVirgin()
}
else if (input[0] === "eldest") {
    controller.getEldest()
}

// getAllStudentName ["jason", "eltim", "jono"]
// getAllMale ["jason", "eltim", "justin"]
// getAllVirgin ["eltim", "justin"]
// getEldest "jono" 