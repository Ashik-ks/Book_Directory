async function AddBook(){
     window.location.href = `index.html`


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
        console.log("error : ",error)
       }
    
}

async function GetData(){
    try {
        let response = await fetch('/submit');
        console.log("response : ", response);

        let display = await response.json();
        console.log("display : ", display);

        let parsed_display = display.data;
        console.log("parsed_display : ",parsed_display);

        let datacontainer = document.getElementById('datacontainer');

        let rows='';

        for(i=0;i<parsed_display.length;i++){
            let id = parsed_display._id
            rows = rows + `
            <div class="container  d-flex-row lh-lg pb-3 pt-3 shadow p-3 mb-5 bg-body rounded">
                  <div id = "imageid" class ="pe-3" ><img  src ="${parsed_display[i].image} "class = "datacontainerimg"></div>
                   <div id = "titleid" class ="pe-3 fs-2 fw-bold namediv">${parsed_display[i].name}</div>
                    <div id = "titleid" class ="pe-3 fs-2 fw-bold namediv">${parsed_display[i].description}</div>
                    <div class="mt-3 "><button class = "ps-2 pe-2 fs-5 twobtn" onclick="handleClick('${id}')">view more</button></div>
                    
                  </div>
            `
            datacontainer.innerHTML=rows
        }
    } catch (error) {
        
    }
}

function handleClick(id){
    window.location.href = `singleview.html?id=${id}`
}

async function GetSingleData(){
    let location = window.location;
    console.log("location", location);

    let querystring = location.search;
    console.log("querystring", querystring);


    let urlParams = new URLSearchParams(querystring);
    console.log("url", urlParams);

    let id = urlParams.get("id");
    console.log("id ", id, typeof (id));

    try {
        let response = await fetch(`/submit/${id}`);
        console.log("response : ",response)

        let parsed_response = await response.json();
        console.log("parsed_response : ",parsed_response);

        // let parsed_data = parsed_response.data;
        // console.log("parsed_data : ",parsed_data)

        let datacontainer = document.getElementById('datacontainer');
        console.log("datacontainer : ",datacontainer)

        // let rows = `
        // <div class="container  d-flex-row lh-lg pb-3 pt-3 shadow p-3 mb-5 bg-body rounded">
        //           <div id = "imageid" class ="pe-3" ><img  src ="${parsed_data.image} "class = "datacontainerimg"></div>
        //            <div id = "titleid" class ="pe-3 fs-2 fw-bold namediv">${parsed_data.name}</div>
        //             <div id = "titleid" class ="pe-3 fs-2 fw-bold namediv">${parsed_data.description}</div>                    
        //           </div>
        // `
        // datacontainer.innerHTML = rows

    } catch (error) {
        console.log("error : ",error);
    }
}