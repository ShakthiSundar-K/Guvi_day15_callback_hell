let div = document.getElementById("root")
let flag = document.getElementById("img")
//div.innerHTML="<h1>HI</h1>"

let n=10

// callback_hell
setTimeout(()=>{
    div.innerHTML=`<h1>${n--}</h1>`
    setTimeout(() => {
       div.innerHTML=`<h1>${n--}</h1>` 
       setTimeout(() => {
        div.innerHTML=`<h1>${n--}</h1>`
        setTimeout(() => {
            div.innerHTML=`<h1>${n--}</h1>`
            setTimeout(() => {
                div.innerHTML=`<h1>${n--}</h1>`
                setTimeout(() => {
                    div.innerHTML=`<h1>${n--}</h1>`
                    setTimeout(() => {
                        div.innerHTML=`<h1>${n--}</h1>`
                        setTimeout(() => {
                            div.innerHTML=`<h1>${n--}</h1>`
                            setTimeout(() => {
                                div.innerHTML=`<h1>${n--}</h1>`
                                setTimeout(() => {
                                    div.innerHTML=`<h1>${n--}</h1>`
                                    setTimeout(() => {
                                        div.innerHTML="<h1>HAPPY INDEPENDENCE DAY"
                                       setTimeout(() => {
                                         flag.style.display="block"
                                       }, 500);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
       }, 1000);
    }, 1000);
},1000)

