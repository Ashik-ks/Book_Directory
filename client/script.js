
async function UserView(){
    try {
        let User_response = await fetch('/submit');
        console.log("User_response : ", User_response);

        let Parsed_User_response = await User_response.json();
        console.log("Parsed_User_response : ", Parsed_User_response);

        let Parsed_User_response_data = Parsed_User_response.data;
        console.log("Parsed_User_response_data : ", Parsed_User_response_data);

        let indexcontainer = document.getElementById('indexcontainer');

        let rows = '';

        for (i = 0; i < Parsed_User_response_data.length; i++) {
            let id = Parsed_User_response_data[i]._id;
            rows = rows + `
            <div class="container  d-flex-row lh-lg pb-3 pt-3 shadow p-3 mb-5 bg-body rounded" onclick="handleClickUser('${id}')">
                  <div class ="pe-3" ><img  src ="${Parsed_User_response_data[i].image} "class = "indexcontainerimg"></div>
                   <div class ="pe-3 fs-2 fw-bold ">${Parsed_User_response_data[i].name}</div>
                    <div class ="pe-3 fs-2 fw-bold ">${Parsed_User_response_data[i].offer}</div>
                    <div class ="pe-3 fs-2 fw-bold ">${Parsed_User_response_data[i].author}</div>
                  </div>
            `
            indexcontainer.innerHTML = rows
        }
    } catch (error) {
        console.log("error : ", error)
    }
}

function handleClickUser(id) {
    window.location.href = `UserSingleView.html?id=${id}`
}

async function UserSingleData() {
    let location = window.location;
    console.log("location", location);

    let querystring = location.search;
    console.log("querystring", querystring);


    let urlParams = new URLSearchParams(querystring);
    console.log("url", urlParams);

    let id = urlParams.get("id");
    console.log("id ", id, typeof (id));

    try {
        let User_single_response =  await fetch(`/submit/${id}`,{
            method : "get",
        });
        console.log("User_single_response : ", User_single_response)

        let User_parsed_single_response = await User_single_response.json();
        console.log("User_parsed_single_response : ", User_parsed_single_response);

        let User_parsed_single_data = User_parsed_single_response.data;
        console.log("User_parsed_single_data : ", User_parsed_single_data)

        let rows = `
        <div class="container  lh-lg  pb-3 pt-3 shadow p-3 mb-5 bg-body rounded mt-3 mt-5">
          <div id = "imageid1" class="text-center" ><img  src ="${User_parsed_single_data.image} "class = "User_single_datacontainer"></div>
                     <div  class = "mt-3 fw-bold fs-1">Name : ${User_parsed_single_data.name}</div>
                      <div  class="fst-normal fs-3">Publisher : ${User_parsed_single_data.publisher}</div>
                     <div class="fst-normal fs-3">Price : ${User_parsed_single_data.price}</div>
                     <div  class="fst-normal fs-3">Category : ${User_parsed_single_data.category}</div>
                     <div  class="fst-normal fs-3">Author : ${User_parsed_single_data.author}</div>
                     <div  class="fst-normal fs-3">Description : ${User_parsed_single_data.description}</div>
                     <div  class="fst-normal fs-3">Offer : ${User_parsed_single_data.offer}</div>
                     </div>
           </div>
        `
        document.getElementById('User_single_datacontainer').innerHTML = rows;

    } catch (error) {
        console.log("error : ", error);
    }
}

async function AddBook(event) {

    window.location.href = `index.html`
    event.preventDefault();
    let name = document.getElementById('name').value;
    console.log("name : ", name);
    let category = document.getElementById('category').value;
    console.log("category : ", category);
    let publisher = document.getElementById('publisher').value;
    console.log("publisher : ", publisher);
    let author = document.getElementById('author').value;
    console.log("author : ", author);
    let description = document.getElementById('description').value;
    console.log("description : ", description);
    let price = document.getElementById('price').value;
    console.log("price : ", price);
    let offer = document.getElementById('offer').value;
    console.log("offer : ", offer);
    let image = document.getElementById('image').value;
    console.log("image : ", image);

    let Datas = {
        name,
        category,
        publisher,
        author,
        description,
        price,
        offer,
        image,
    }

    let str_Datas = JSON.stringify(Datas);
    console.log("str_Datas: ", str_Datas);

    try {
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
            alert("User Created Successfully");
            return;
        } else {
            alert("something went wrong");
        }

    } catch (error) {
        console.log("error : ", error)
    }

}

async function GetData() {
    try {
        let response = await fetch('/submit');
        console.log("response : ", response);

        let display = await response.json();
        console.log("display : ", display);

        let parsed_display = display.data;
        console.log("parsed_display : ", parsed_display);

        let datacontainer = document.getElementById('datacontainer');

        let rows = '';

        for (i = 0; i < parsed_display.length; i++) {
            let id = parsed_display[i]._id
            rows = rows + `
        <div class="container lh-lg pb-3 pt-3 shadow-none p-3 mb-5 bg-light rounded-pill" onclick="handleClick('${id}')">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col text-center"><img  src ="${parsed_display[i].image} "class = "datacontainerimg"></div>
                <div class="col fs-5 fw-bold text-center">${parsed_display[i].name}</div>
                <div class="col fs-5 fw-bold text-center">${parsed_display[i].author}</div>
                <div class="col fs-5 fw-bold text-center">${parsed_display[i].publisher}</div>
                <div class="col text-center"><img src="./images/icons8-delete-30.png" alt="deleteimg" id= "deleteimg" onclick="handleClickDelete('${id}')"></div>
                <div class="mt-3 "><button class = "ps-2 pe-2 fs-5 twobtn" onclick="handleClickEdit('${id}')">Edit</button></div>
            </div>
                    
                  </div>
            `
            datacontainer.innerHTML = rows
        }
    } catch (error) {

    }
}

function handleClickEdit(id) {
    window.location.href = `Update.html?id=${id}`;
    console.log("id : ", id)
}

async function Currentdata(){
    let params = new URLSearchParams(window.location.search);
    console.log("params", params);

    let id = params.get('id')
    console.log("id from update data", id);


    let name = document.getElementById('name');
    let category = document.getElementById('category');
    let author = document.getElementById('author');
    let price = document.getElementById('price');
    let image = document.getElementById('image');
    let publisher = document.getElementById('publisher');
    let description = document.getElementById('description');
    let offer = document.getElementById('offer');


    try {
        let form_response = await fetch(`/submit/${id}`);
        let form_parse_data = await form_response.json();
        let data = form_parse_data.data

        name.value = data.name
        category.value = data.category
        author.value = data.author
        price.value = data.price
        image.value = data.image
        publisher.value = data.publisher
        description.value = data.description
        offer.value = data.offer
    } catch (error) {
        image
        console.log("error : ", error)
    }
}

async function UpdateBook() {
    let name = document.getElementById('name').value;
    console.log("name : ", name);
    let category = document.getElementById('category').value;
    console.log("category : ", category);
    let publisher = document.getElementById('publisher').value;
    console.log("publisher : ", publisher);
    let author = document.getElementById('author').value;
    console.log("author : ", author);
    let description = document.getElementById('description').value;
    console.log("description : ", description);
    let price = document.getElementById('price').value;
    console.log("price : ", price);
    let offer = document.getElementById('offer').value;
    console.log("offer : ", offer);
    let image = document.getElementById('image').value;
    console.log("image : ", image);

    let UpdateDatas = {
        name,
        category,
        publisher,
        author,
        description,
        price,
        offer,
        image,
    }
    let Str_UpdateData = JSON.stringify(UpdateDatas);
    console.log("Str_UpdateData", Str_UpdateData);

    let params = new URLSearchParams(window.location.search);
    console.log("params", params);

    let id = params.get('id')
    console.log("id from update data", id);


    try {
        let Update_response = await fetch(`/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: Str_UpdateData

        })
        let parsed_Update_response = await Update_response.json();
        console.log('parsed_Update_response', parsed_Update_response);

        window.location.href = `index.html?id=${id}`

        if (parsed_Update_response) {
            alert("Data Updated Successfully")
        }

    } catch (error) {
        console.log("error", error);
    }

}

async function handleClickDelete(id) {

    let params = new URLSearchParams(window.location.search);
    console.log("params", params);

    try {
        let Delete_response = await fetch(`/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            },
        })
        let parsed_Delete_response = await Delete_response.json();
        console.log("parsed_response : ", parsed_Delete_response);

        window.location.href = `admin.html?id=${id}`
    } catch (error) {
        console.log("error : ", error);
    }
}





// function handleClick(id) {
//     window.location.href = `singleview.html?id=${id}`
// }

// async function GetSingleData() {
//     let location = window.location;
//     console.log("location", location);

//     let querystring = location.search;
//     console.log("querystring", querystring);


//     let urlParams = new URLSearchParams(querystring);
//     console.log("url", urlParams);

//     let id = urlParams.get("id");
//     console.log("id ", id, typeof (id));

//     try {
//         let single_response = await fetch(`/submit/${id}`);
//         console.log("single_response : ", single_response)

//         let parsed_single_response = await single_response.json();
//         console.log("parsed_single_response : ", parsed_single_response);

//         let parsed_single_data = parsed_single_response.data;
//         console.log("parsed_single_data : ", parsed_single_data)

//         let rows = `
//         <div class="container  lh-lg  pb-3 pt-3 shadow p-3 mb-5 bg-body rounded mt-3 mt-5">
//           <div id = "imageid1" class="text-center" ><img  src ="${parsed_single_data.image} "class = "single_datacontainerimg"></div>
//                       <div  class = "mt-3 fw-bold fs-1">Name : ${parsed_single_data.name}</div>
//                       <div  class="fst-normal fs-3">Publisher : ${parsed_single_data.publisher}</div>
//                      <div class="fst-normal fs-3">Price : ${parsed_single_data.price}</div>
//                      <div  class="fst-normal fs-3">Category : ${parsed_single_data.category}</div>
//                      <div  class="fst-normal fs-3">Author : ${parsed_single_data.author}</div>
//                      <div  class="fst-normal fs-3">Description : ${parsed_single_data.description}</div>
//                      <div  class="fst-normal fs-3">Offer : ${parsed_single_data.offer}</div>
                     
//                      </div>
//            </div>
//         `
//         document.getElementById('single_datacontainer').innerHTML = rows;

//     } catch (error) {
//         console.log("error : ", error);
//     }
// }