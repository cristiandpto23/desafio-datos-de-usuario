(async () => {
    // direccion api
    const url = 'https://randomuser.me/api/?results=10';
    // adonde irán los users en el html (DOM manipulation)
    const userList = document.getElementById('user-data');

    try {
        const response = await fetch(url);
        const data = await response.json();

        // recorremos los elementos (usuarios) y se muestran en formato html
        data.results.forEach(user => {
            const userHtml = `
                <p>
                    <img src="${user.picture.large}"><br>
                    ${user.name.first} ${user.name.last}<br>
                    ${user.email}<br>
                    ${user.phone}<br>
                </p>
            `;
            // el cual se suma al total de usuarios en el html
            userList.innerHTML += userHtml;
        });
    } catch (e) {
        // en caso de error, se muestra esto en el html 
        userList.innerHTML = `<p>Ocurrió un error. Lo lamento, no podemos cargar los usuarios :'(</p>`;
        // en caso de error, se muestra esto en la consola
        console.error('Ground Control to Mayor Tom:', e);
    }
})()