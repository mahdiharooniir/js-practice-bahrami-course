const users = [
    {
        id: 1,
        firstName: "مهدی",
        lastName: "هارونی",
        age: 28,
        gender: "مرد"
    },
    {
        id: 2,
        firstName: "اصغر",
        lastName: "رضوی",
        age: 40,
        gender: "مرد"
    },
    {
        id: 3,
        firstName: "مهسا",
        lastName: "بهرامی",
        age: 15,
        gender: "زن"
    },
    {
        id: 4,
        firstName: "الهه",
        lastName: "خسروی",
        age: 34,
        gender: "زن"
    },
    {
        id: 5,
        firstName: "مهدی",
        lastName: "محمدی",
        age: 27,
        gender: "مرد"
    },
    {
        id: 5,
        firstName: "امیر",
        lastName: "ارجمند",
        age: 47,
        gender: "مرد"
    },
]

const userContainer = document.querySelector('#userContainer');
const filterInput = document.querySelector('#filterInput')
const filterBtn = document.querySelector('#filterBtn');

window.onload = function () {
    userContainer.innerHTML = generateUsersElement(users) ;
}


function generateUsersElement(users) {
    let str = '';
    users.forEach(user => str += `
        <div class="shadow-sm shadow-sky-300 rounded-lg p-4 text-md bg-sky-50">
            <p class = "text-gray-800">نام: ${user.firstName}</p>
            <p class = "text-gray-800">نام خانوادگی: ${user.lastName}</p>
            <p class = "text-gray-800">سن: ${user.age}</p>
            <p class = "text-gray-800">جنسیت : ${user.gender}</p>
        </div>
        `);
        return str;
}

filterBtn.onclick = function() {
    const filteredUsers = users.filter(function(user) {
        return user.firstName.includes(filterInput.value)
    })
    if (filteredUsers.length > 0) {
        userContainer.innerHTML = generateUsersElement(filteredUsers)
    } else {
        userContainer.innerHTML = "<h4> کاربر یافت نشد </h4"
    }
}


