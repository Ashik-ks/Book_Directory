
async function UserView(){
    try {
        let User_response = await fetch('/submit');
        console.log("User_response : ", User_response);

        let Parsed_User_response = await User_response.json();
        console.log("Parsed_User_response : ", Parsed_User_response);

        let Parsed_User_response_data = Parsed_User_response.data;
        console.log("Parsed_User_response_data : ", Parsed_User_response_data);

        let indexcontainer = document.getElementById('indexcontainer');
        // let indexcontainer1 = document.getElementById('indexcontainer1');

        let rows = '';
        // let rows1 = '';

        // let arr = ["NEW RELEASES", "ROMANCE", "SPORTS","FANTASY","SUMMER READING"] 

        for (i = 0; i < Parsed_User_response_data.length; i++) {
            let id = Parsed_User_response_data[i]._id;
            rows = rows + `
            <div class="container d-flex-row lh-lg pb-3 pt-3 shadow p-3 mb-5 bg-body rounded  position-relative" onclick="handleClickUser('${id}')">
                  <div class ="text-center" ><img  src ="${Parsed_User_response_data[i].image} "class = "indexcontainerimg"></div>
                   <div class ="text-center mt-3  indexcontainertext">${Parsed_User_response_data[i].name}</div>
                    <div class ="text-center indexcontainertext">${Parsed_User_response_data[i].author}</div>
                    <div class ="text-center indexcontainertext ">${Parsed_User_response_data[i].price}</div>
                    <div class ="offer position-absolute top-0 start-1">${Parsed_User_response_data[i].offer}off</div>
                  </div>
            `
            indexcontainer.innerHTML = rows
        }
        // let item = Parsed_User_response_data[i];
        // if (!arr.includes(item.category)) {
        //     rows1 += `
        //             <div class="container lh-lg pb-3 pt-3 shadow-none mb-5 bg-light rounded" onclick="handleClick('${item._id}')">
        //                 <div id="imageid"><img src="${item.image}" class="datacontainerimg"></div>
        //                 <div class="d-flex justify-content-between">
        //                     <div id="titleid" class="fs-4 fw-bold d-inline mt-1">${item.name}</div>
        //                     <div id="titleid" class="fs-5 fw-bold d-inline mt-2">${item.price}</div>
        //                 </div>
        //             </div>
        //         `;
        // }
        // indexcontainer1.innerHTML = rows1;
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
        <div class="container lh-lg  pb-3 pt-3 shadow p-3 mb-5 bg-body rounded mt-3 mt-5">
        <div class="row ">
            <div class="col"><div id = "imageid1" class="text-center" ><img  src ="${User_parsed_single_data.image} "class = "User_single_datacontainer"></div></div>
            <div class="col text-center"><div  class = "mt-3 fw-bold fs-2">${User_parsed_single_data.name}</div>
            <div  class="fw-bold fs-4 ">Publisher : ${User_parsed_single_data.publisher}</div>
           <div class="fw-bold fs-4 ">Price : ${User_parsed_single_data.price}</div>
           <div  class="fw-bold fs-4 ">Category : ${User_parsed_single_data.category}</div>
           <div  class="fw-bold fs-4 ">Author : ${User_parsed_single_data.author}</div>
           <div  class="fw-bold fs-4">Offer : ${User_parsed_single_data.offer}</div></div>
        </div>
        <div class="row mt-5">
            <div  class="descriptiontext"> ${User_parsed_single_data.description}</div>
        </div>
    </div>
        `
        document.getElementById('User_single_datacontainer').innerHTML = rows;

        let User_single_response1 = await fetch(`/submit`);
        console.log("User_single_response1 : ", User_single_response1);

        let User_parsed_single_response1 = await User_single_response1.json();
        console.log("User_parsed_single_response1 : ", User_parsed_single_response1);

        let data1 = User_parsed_single_response1.data;
        console.log("data1 : ", data1);
        //  console.log("message1.category : ",message1.category)

        let rows1 = ''
        let User_single_datacontainer1 = document.getElementById('User_single_datacontainer1');
        for (i = 0; i < data1.length; i++) {
            if (data1[i].category === User_parsed_single_data.category) {
                rows1 = rows1 + ` 
                 
           <div class="container d-flex-row lh-lg pb-3 pt-3 shadow p-3 mb-5 bg-body rounded  position-relative" onclick="handleClickUser('${id}')">
                  <div class ="text-center" ><img  src ="${data1[i].image} "class = "single_datacontainer1img"></div>
                   <div class ="text-center mt-3  indexcontainertext">${data1[i].name}</div>
                    <div class ="text-center indexcontainertext">${data1[i].author}</div>
                    <div class ="text-center indexcontainertext ">${data1[i].price}</div>
                    <div class ="offer position-absolute top-0 start-1">${data1[i].offer}</div>
                  </div>
            
             `
            }

            User_single_datacontainer1.innerHTML = rows1;
        }



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
            alert("Book Added Successfully");
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
                <div class="col text-center"><button class = "ps-2 pe-2 fs-5 editbtn" onclick="handleClickEdit('${id}')">Edit</button></div>
                <div class="col text-center"><img src="./images/icons8-delete-30.png" alt="deleteimg" id= "deleteimg" onclick="handleClickDelete('${id}')"></div>
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

        window.location.href = `index.html?id=${id}`

        if(parsed_Delete_response){
            alert("Book Deleted Successfully")
        }else{
            alert("Book Not Deleted")
        }
    } catch (error) {
        console.log("error : ", error);
    }
}

function Newrelease(){
    window.location.href = `CategoryPage.html`
}


async function getnewrelease(){
    try {
        let User_response = await fetch('/submit');
        console.log("User_response : ", User_response);

        let Parsed_User_response = await User_response.json();
        console.log("Parsed_User_response : ", Parsed_User_response);

        let Parsed_User_response_data = Parsed_User_response.data;
        console.log("Parsed_User_response_data : ", Parsed_User_response_data);

        let categorycontainer = document.getElementById('categorycontainer');
        // let indexcontainer1 = document.getElementById('indexcontainer1');

        let rows = '';

        for (i =Parsed_User_response_data.length-1 ; i > Parsed_User_response_data.length-8; i--) {
            let id = Parsed_User_response_data[i]._id;
            rows = rows + `
            <div class="container d-flex-row lh-lg pb-3 pt-3 shadow p-3 mb-5 bg-body rounded  position-relative" onclick="handleClickUser('${id}')">
                  <div class ="text-center" ><img  src ="${Parsed_User_response_data[i].image} "class = "indexcontainerimg"></div>
                   <div class ="text-center mt-3  indexcontainertext">${Parsed_User_response_data[i].name}</div>
                    <div class ="text-center indexcontainertext">${Parsed_User_response_data[i].author}</div>
                    <div class ="text-center indexcontainertext ">${Parsed_User_response_data[i].price}</div>
                    <div class ="offer position-absolute top-0 start-1">${Parsed_User_response_data[i].offer}off</div>
                  </div>
            `
            categorycontainer.innerHTML = rows
        }
        
    } catch (error) {
        console.log("error : ", error)
    }
}
