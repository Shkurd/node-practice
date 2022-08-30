
//Основные примеры работы с NODE.JS

const path = require('path')
const fs = require('fs')

const hello = require('./hello')
hello()

console.log("Файл работет")
// console.log("globalThis", globalThis)

setTimeout(() => {
    console.log("Привет, Антон")
}, 2000)

// console.log(__dirname)
// console.log(__filename)
// console.log(process)

console.log("parse", path.parse(__filename))

// чтение данных из файла
fs.readFile('./text.txt', 'utf-8',(err, data)=>{
    if (err) {
        throw err
    }

    console.log('data', data)
})

// запись данных в файл (с перезаписью имеющегося там)
fs.writeFile('./text2.txt', 'data for file text2', (err)=>{
    if (err) {
        throw err
    }

})

// создание папки
fs.mkdirSync('./files', (err)=>{
    if (err) {
        throw err
    }

})

// запись данных в файл (с перезаписью имеющегося там)
if (!fs.existsSync('./files/text3.txt')) { // проверка на наличие файла

    fs.writeFileSync('./files/text3.txt', 'data for file text3', (err)=>{
        if (err) {
            throw err
        }
    })
}


// удаление файла в папке
setTimeout(()=>{
    if (fs.existsSync('./files/text3.txt')) { // проверка на наличие файла

        fs.unlink('./files/text3.txt', (err)=>{
            if (err) {
                throw err
            }
        })
    }
}, 3000)

// удаление папки (и содержимого там, если есть)
setTimeout(()=>{

    fs.rmdir('./files/', (err)=>{
        if (err) {
            throw err
        }
    })

}, 4000)