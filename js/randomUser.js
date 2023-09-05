const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = (user) => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
    // console.log(user.results[0].name.first);

    const bodyContainer = document.getElementById('main-body');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${user.results[0].picture.large}" alt="">
    <h4>City: ${user.results[0].location.city}</h4>
    <h4>Country: ${user.results[0].location.coordinates.country}</h4>
    <h4>Street: ${user.results[0].location.street.number + ' , ' + user.results[0].location.street.name
        }</h4>
    `
    bodyContainer.appendChild(div);
}

loadUser();