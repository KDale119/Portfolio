// sticky for navbar
let blogPosition = 0;


function someThing() {
    randomPic();

    fetch("./page1.json")
    .then(response => response.json())
    .then(result => {
       // document.getElementById('home').innerHTML = result.navbarOpts[0].opt1
       for (let opt of result.navbarOpts) {
        let link = document.createElement('a')
        link.setAttribute('href', opt.link)
        let h3 = document.createElement('h3')
        h3.className = opt.opt1
        h3.innerHTML = opt.opt1
        document.getElementById('navbarOpts').appendChild(link);
        link.appendChild(h3);


        
        }//         NAVBAR
        
        let header = document.getElementById('header');
        for(let head of result.Heading) {
            let h1 = document.createElement("h1")
            h1.className = "header";
            h1.innerHTML = head.header;
            header.appendChild(h1);
        }// my name

        let hPara = document.getElementById('h-paragraph');
        for(let head of result.Heading) {
            let p = document.createElement("p")
            p.className = "h-paragraph";
            p.innerHTML = head.qualities;
            hPara.appendChild(p);
        }// qualities


        

        let section = document.getElementById('icons');
        let div = document.createElement('div')
        
        for(let sect of result.links) {
            let link = document.createElement('a')
            link.className = 'a'
            link.setAttribute('href', sect.link)
            let i = document.createElement('i')
            i.className = sect.icons, "icons";
            section.appendChild(div);
            div.appendChild(link);
            link.appendChild(i)
        }// works


    })


    fetch("./page2.json")
    .then(response => response.json())
    .then(result => {
        
        let headr = document.getElementById('head');
        for(let head of result.Header) {
            let h4 = document.createElement("h4")
            
            h4.innerHTML = head.heading;
            headr.appendChild(h4);
        }// experience heading

        let section = document.getElementById('jobHistory');
        for (let sect of result.jobHistory) {
            let outDiv = document.createElement('div')

            let titleDiv = document.createElement('div')

            titleDiv.className = "jobtitle"

            titleDiv.innerHTML = sect.job

            let ul = document.createElement('ul')

            ul.className = "jobdesc";

            // this is where i would loop but found work around ask travis still after turning in
            let li = document.createElement('li')
            li.className = "li";
            li.innerHTML = sect.jobDuties
            ul.appendChild(li);
            outDiv.appendChild(ul);
            
            section.appendChild(titleDiv);
            section.appendChild(outDiv)
        }
        
    })

    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {

        let hDiv = document.getElementById('m-section');
        for(let head of result.Header) {
            let h4 = document.createElement("h4")
            h4.id = 'blogs'
            h4.className = "blogs"
            h4.innerHTML = head.heading;
            hDiv.appendChild(h4);
        }//Blogs Header has styling

        let imgDiv = document.getElementById('imgDiv')
        for(let div of result.blog) {
            let img = document.createElement("img");
            img.id = "img";
            img.className = "journeyimg"
            img.setAttribute('src', div.img);
            imgDiv.appendChild(img);
        } //coding journey IMG- works needs styling

    //     let btnsDiv = document.getElementById("buttons");
    //    for(let btns of result.buttons){
    //     let btn = document.createElement('button')
    //     btn.className = "btns";
    //     btn.id = btns.id
    //     btn.innerHTML = btns.title;
    //     btnsDiv.appendChild(btn);
    //    }//blog buttons- need styling cant figure out
       
       let pDiv = document.getElementById('div')
       for(let p of result.blog){
        let para = document.createElement('p')
        para.id = "blogP";
        para.className = "paragraph"
        para.innerHTML = p.paragraph
        pDiv.appendChild(para);
       }// Coding journey paragraph works needs styling   
    })

    fetch("./page4.json")
    .then(response => response.json())
    .then(result => {

        let headerDiv = document.getElementById('resume-s')
        for(let head of result.Header) {
            let h4 = document.createElement('h4')
            h4.id = 'resume'
            h4.className = "resume-s";
            h4.innerHTML = head.heading;
            headerDiv.appendChild(h4);
        }// Resume Header

        let resumeDiv = document.getElementById('resumeview')
        for(let resume of result.pdfResume){
            let iframe = document.createElement('iframe')
            iframe.className = "adobepdf";
            iframe.setAttribute('src', resume.source);
            resumeDiv.appendChild(iframe);
        }// resume PDF

        let ftr = document.getElementById('footer')
       for( let foot of result.Footer) {
        let p1 = document.createElement('p')
        p1.className = "p1";
        p1.innerHTML = foot.creator;

        let p2 = document.createElement('p');
        p2.className = "p2";
        p2.innerHTML = foot.contactInfo;

        let p3 = document.createElement('p');
        p3.className = "p3";
        p3.innerHTML = foot.copyright; 
        ftr.appendChild(p3)
        ftr.appendChild(p2)
        ftr.appendChild(p1)

        //works & looks "okay"
       }
    })
}


function randomPic(event) {
    fetch('https://dog.ceo/api/breeds/image/random', {method: "GET"})
    .then(response => response.json())
    .then(result => 
        {
            if (event) {
                event.preventDefault();
            }
            let pic = document.getElementById('pic')
            pic.setAttribute('src', result.message);   
        })
    }

    function noClick(event) {
        event.preventDefault();
    }







// mobile ham menu
function hamMenu() {
    let hamMenu = document.querySelector('.ham-menu')
    let offScreenMenu = document.querySelector('.offScreen')
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
}

function rightArrow(){
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        if(blogPosition <= 5) {
            let newPic = result.buttons[++blogPosition].img
            let img = document.getElementById('img');
            img.setAttribute('src', newPic)
            
            let newBlog = result.buttons[blogPosition].desc
            let paragraph = document.getElementById('blogP')
            paragraph.innerHTML = newBlog;

            let change = document.getElementById('rightArrow')
            if (blogPosition > 0){
                change.style.color = "black"
                change.style.border = " solid black 2px"
            } // else if(blogPosition == 5) {
            //     change.style.color = "gray"
            //     change.style.border = " solid gray 2px"
            // } 

            if(blogPosition > 0) {
                let change = document.getElementById('leftArrow')
                change.style.color = "black"
                change.style.border = " solid black 2px"
            }
            console.log(blogPosition)
        }
    })
}

function leftArrow(){
    if(blogPosition >= 0) {
        fetch("./page3.json")
        .then(response => response.json())
        .then(result => {
            let newPic = result.buttons[--blogPosition].img
            let img = document.getElementById('img');
            img.setAttribute('src', newPic)
        
            let newBlog = result.buttons[blogPosition].desc
            let paragraph = document.getElementById('blogP')
            paragraph.innerHTML = newBlog;
        
            if(blogPosition == 0) {
            let change = document.getElementById('leftArrow')
            change.style.color = "gray"
            change.style.border = " solid gray 2px"
            }
            console.log(blogPosition)
        }
    )}
}

// let journey = document.getElementById('journey');
// function journeyBtn() {
//     fetch("./page3.json")
//     .then(response => response.json())
//     .then(result => {
//         let img = document.getElementById('img');
//         img.setAttribute('src', results.buttons[0].img)
            
        
//         let paragraph = document.getElementById('blogP')
//         paragraph.innerHTML = result.buttons[0].desc;
//     })
// }
// if(journey) {
//     journey.addEventListener("click", journeyBtn())
// }

//                                 EVENT LISTENERS FOR BLOG BUTTONS 
let journey = document.getElementById('journey');
function journeyBtn() {
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        let img = document.getElementById('img');
        img.setAttribute('src', result.buttons[0].img)
        let paragraph = document.getElementById('blogP')
        paragraph.innerHTML = result.buttons[0].desc;    
    })
}
let coffee = document.getElementById('coffee');
function coffeeBtn() {
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        let img = document.getElementById('img');
        img.setAttribute('src', result.buttons[1].img)
        let paragraph = document.getElementById('blogP')
        paragraph.innerHTML = result.buttons[1].desc;    
    })
}
let plants = document.getElementById('plants');
function plantsBtn() {
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        let img = document.getElementById('img');
        img.setAttribute('src', result.buttons[2].img)
        let paragraph = document.getElementById('blogP')
        paragraph.innerHTML = result.buttons[2].desc;    
    })
}
let learning = document.getElementById('learning');
function learningBtn() {
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        let img = document.getElementById('img');
        img.setAttribute('src', result.buttons[3].img)
        let paragraph = document.getElementById('blogP')
        paragraph.innerHTML = result.buttons[3].desc;    
    })
}
let reading = document.getElementById('reading');
function readingBtn() {
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        let img = document.getElementById('img');
        img.setAttribute('src', result.buttons[4].img)
        let paragraph = document.getElementById('blogP')
        paragraph.innerHTML = result.buttons[4].desc;    
    })
}
let wfh = document.getElementById('wfh');
function wfhBtn() {
    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
        let img = document.getElementById('img');
        img.setAttribute('src', result.buttons[5].img)
        let paragraph = document.getElementById('blogP')
        paragraph.innerHTML = result.buttons[5].desc;    
    })
}







// let journey = document.getElementById('journey');
// journey.addEventListener('click', function(){
//     fetch("./page3.json")
//     .then(response => response.json())
//     .then(result => {
//         let img = document.getElementById('img');
//         img.setAttribute('src', results.buttons[0].img)
            
        
//         let paragraph = document.getElementById('blogP')
//         paragraph.innerHTML = result.buttons[0].desc;
//     })
// });

