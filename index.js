fetch("challanges.json")
  .then(response => response.json())
  .then(json => {
    console.log(json);
    let html="";
    json.challenges.map(object=>{
        html += `<tr><th scope="row">${object.id}</th><td>${object.title}</td><td>${object.kyu}</td><td><a href="${object.link}" target="_blank" class="link ">&lt;/&gt;</a></td>`
    })
    document.getElementById("bdy").innerHTML=html;
  });