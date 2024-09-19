async function AddBook(event){
     window.location.href = `index.html`
    event.preventDefault();

    let name = document.getElementById('name').value ;
    console.log("name : ",name);
    let publisher = document.getElementById('publisher').value ;
    console.log("publisher : ",publisher);
    let author = document.getElementById('author').value ;
    console.log("author : ",author);
    let description = document.getElementById('description').value ;
    console.log("description : ",description);
    let price = document.getElementById('price').value ;
    console.log("price : ",price);
    let releasedate = document.getElementById('releasedate').value ;
    console.log("releasedate : ",releasedate);
    let image = document.getElementById('image').value ;
    console.log("image : ",image);

    let Datas = {
        name,
        publisher,
        author,
        description,
        price,
        releasedate,
        image,
    } 

    let str_Datas = JSON.stringify(Datas);
    console.log("str_Datas: ",str_Datas);

        let response = await fetch('/submit', {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: str_Datas,
        });
        console.log("response : ", response);
    
        let parsed_response = await response.text();
        console.log("parsed_response : ", parsed_response)
    
        if (parsed_response) {
            alert(parsed_response);
            return;
        } else {
            alert("something went wrong");
        }
    
}