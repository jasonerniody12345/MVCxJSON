const fs = require("fs")

module.exports = {
    getAllStudent () {

        fs.readFile("./assets/data.json", (err, data) => {

            var storage = []
            var DataServer = JSON.parse(data)

            if (err) {
                console.log(err)
            }
            else {
                for (var i = 0; i < DataServer.students.length; i++){
                    storage.push(DataServer.students[i].name)
                }
            console.log(storage)
            }
        })
    },

    getAllMale() {

        fs.readFile("./assets/data.json", (err, data) => {

            var storage = []
            var DataServer = JSON.parse(data)

            if (err){
                console.log(err)
            }
            else {
                for (var i = 0; i < DataServer.students.length; i++){
                    if (DataServer.students[i].gender === "male")
                    storage.push(DataServer.students[i].name)
                }
            }
            console.log(storage)
        })   
    },

    getAllVirgin() {
        fs.readFile("./assets/data.json", (err, data) => {

            var storage = []
            var DataServer = JSON.parse(data)

            if (err){
                console.log(err)
            }
            else {
                for (var i = 0; 1 < DataServer.students.length; i++) {
                    if (DataServer.students[i].isVirgin === "true")
                    storage.push(DataServer.students[i].name)
                }
            }
            // console.log(DataServer.students[i].isVirgin)
            console.log(storage)
        })
    },

    getEldest(){
        fs.readFile("./assets/data.json", (err, data) => {

            var storage = []
            var DataServer = JSON.parse(data)

            if (err){
                console.log(err)
            }
            else {
                for (var i = 0; i < DataServer.students.length; i++){
                    if (DataServer.students[i].age >= 43)
                    storage.push(DataServer.students[i].name)
                    storage.sort()
                }
            }
            console.log(storage)
        })
    }
}