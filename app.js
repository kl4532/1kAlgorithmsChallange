fetch("challanges.json")
  .then(response => response.json())
  .then(json => {
    console.log(json);
    let html="";
    let bgcolor;
    let odd = true;
    json.challenges.map(o=>{
      fetch(o.link)
        .then(response => response.text())
        .then(code => {
          code = String(code).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          odd ? bgcolor="bg-dark" : bgcolor="bg-secondary";
          odd ? odd = false : odd = true;
          html += `<div class="row ${bgcolor} text-light"><div class="col-2">${o.id}</div><div class="col-4">${o.title}</div><div class="col-2"><font color="${o.kyu>=7 ? "white" : o.kyu<7 && o.kyu>4 ? "yellow" : "red"}">${o.kyu}</font></div><div data-toggle="collapse" href="#collapse${o.id}" role="button" aria-expanded="false" aria-controls="collapseExample" class="col-4 code-drop">&lt;/&gt;</div></div><div class="row collapse" id="collapse${o.id}"> <div class="col card card-body"> <pre class="prettyprint"> <code class="language-javascript" >${code}</code> </pre></div></div>`;
          document.getElementById("bdy").innerHTML=html;
        })
    })
  });