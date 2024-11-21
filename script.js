let object = {
    name: "Cars 2",
    year: "2015",
    mc: "McQueen"
}

let objectJson = JSON.stringify(object)
console.log(objectJson)


let newObjectJson = JSON.parse(objectJson)
console.log(newObjectJson)


fetch("./book.json")

.then(Response => {
    if (!Response.ok) {
        console.log('Помилка завантаження JSON файлу');
    }
    return Response.json();
})

.then(element => {
    try {
        let parseBook = JSON.parse(JSON.stringify(element))
        console.log(parseBook)
    }
    catch (error) {
        console.log(error)
    }
})


fetch("./stalker.json")

.then(Response => {
    if (!Response.ok) {
        console.log('Помилка завантаження JSON файлу');
    }
    return Response.json();
})


.then(object => {
    console.log(object)
    let box = document.querySelector('.box')
    let h2 = document.createElement('h2')
    h2.textContent = object.title
    h2.className = 'title'
    let place = document.createElement('h3')
    place.textContent = object.place
    place.className = 'place'
    let img = document.createElement('img')
    img.src = object.image
    img.className = 'img'
    let price = document.createElement('p')
    price.textContent = object.price
    price.className = 'price'
    box.append(h2, place, img, price)
})

.catch(error => {
    console.log(error)
})

/* ------ Students ------ */

fetch('./students.json')

.then(Response => {
    if (!Response.ok) {
        console.log('Помилка завантаження JSON файлу');
    }
    return Response.json();
})


.then(students => {
    console.log(students)
    let inputName = document.querySelector('.input-name')
    inputName.addEventListener('input', function () {
        students.name = inputName.value
        console.log(students)
    })
    let inputSurName = document.querySelector('.input-surname')
    inputSurName.addEventListener('input', function () {
        students.surname = inputSurName.value
        console.log(students)
    })
    let inputAge = document.querySelector('.input-age ')
    inputAge.addEventListener('input', function () {
        students.age = inputAge.value
        console.log(students)
    })
    let inputCourse = document.querySelector('.input-course')
    inputCourse.addEventListener('input', function () {
        students.course = inputCourse.value
        console.log(students)
    })
    let inputFaculity = document.querySelector('.input-faculty')
    inputFaculity.addEventListener('input', function () {
        students.faculty = inputFaculity.value
        console.log(students)
    })
    let inputList = document.querySelector('.input-list')
    inputName.addEventListener('input', function () {
        students.listOfCourses = inputList.value
        console.log(students)
    })
})