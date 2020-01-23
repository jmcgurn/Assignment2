fetch("/todo").then(function (todo) {
    todo.json().then(function (todojson) {
        console.log(todojson);
        for (i = 0; i < 10; i++) {
            let id = document.createElement("p");
            id.innerText = "id = " + todojson[i].id;
            document.body.appendChild(id);

            let title = document.createElement("p");
            title.innerText = "title = " + todojson[i].title;
            document.body.appendChild(title);
            
            let br = document.createElement("br");
            document.body.appendChild(br);
        }
    });
})