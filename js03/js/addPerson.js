let personList = []

const addPerson = (pname, age) => {
    personList.push({name: pname, age: age});
}

document.getElementById('add_btn').addEventListener('click', function() {
    let elepname = document.getElementById('pname');
    let eleage = document.getElementById('age');
    let pname = elepname.value;
    let age = Number(eleage.value);
    addPerson(pname, age);

    elepname.value = '';
    eleage.value = '';
});

document.getElementById('show_btn').addEventListener('click', function() {
    // document.getElementById('result').innerHTML = null;
    // let num = 1;
    // for(a of personList) {
    //     document.getElementById('result').innerHTML += `${num} ${a.name}, ${a.age} <br>`;
    //     num++;
    // }
    let liList = personList.map((item) => `<li>${item.name}, ${item.age}`);
    document.getElementById('result').innerHTML = liList;
    console.log(liList);
});