/** Cargar un fichero JSON */
window.onload = () => {



    let buscar = document.querySelector(".sort");



    let lista = document.querySelector("#usuarios");
    let btn1 = document.querySelector("#uno");
    let btn2 = document.querySelector("#dos");
    let numPage = 1;


    cargarDatos(`https://reqres.in/api/users?page=${numPage}`);

    btn1.addEventListener("click", () => {
        numPage = 1;
        cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
    })


    btn2.addEventListener("click", () => {
        numPage = 2;
        cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
    })

    buscar.addEventListener("click", () => {
        let search = document.querySelector("#search");
        let identificador = search.value;
        cargarDatos(`https://reqres.in/api/users/${identificador}`);
    })

    function cargarDatos(url) {


        fetch(url)
            .then(res => res.json())
            .then(res => {

                let data = res.data;

                //Importante hacer un console log para ver si llegan los datos
                lista.innerHTML = "";

                if (Array.isArray(data)) {

                    // data.sort((a, b) => a.first_name.localeCompare(b.first_name));
                    data.forEach((user) => {
                        let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
                        let item = `<li class="user">
                            <img src="${avatar}" alt="${user.first_name} "/>
                            <span class="name">${user.first_name}</span>
                            <span class="surname"> ${user.last_name} </span>

                    </li>`;
                        lista.innerHTML += item;
                    });
                } else {


                    let avatar = `https://source.boringavatars.com/bauhaus/50/${data.first_name}%20${data.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
                    let item = `<li class="user">
                            <img src="${avatar}" alt="${data.first_name} "/>
                            <span class="name">${data.first_name}</span>
                            <span class="surname"> ${data.last_name} </span>

                    </li>`;
                    lista.innerHTML += item;

                }

            })
            // .then(() => {
            //     let monkeyList = new List('test-list', {
            //         valueNames: ['name', 'surname']
            //     });
            // });

    };

}

