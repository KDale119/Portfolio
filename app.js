// sticky for navbar
function someThing() {

    fetch("./page1.json")
    .then(response => response.json())
    .then(result => {
       // document.getElementById('home').innerHTML = result.navbarOpts[0].opt1
       for (let opt of result.navbarOpts) {
        let h3 = document.createElement('h3')
        h3.className = "opt.opt1"
        h3.innerHTML = opt.opt1
        document.getElementById('navbarOpts').appendChild(h3);
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
        for(let sect of result.links) {
            let outerDiv = document.createElement('div');
            let i = document.createElement('i')
            i.className = sect.icons, "icons";
            section.appendChild(outerDiv);
            outerDiv.appendChild(i);
        }// styling not present wont work????


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
            h4.className = "blogs"
            h4.innerHTML = head.heading;
            hDiv.appendChild(h4);
        }//Blogs Header has styling

        let imgDiv = document.getElementById('img')
        for(let div of result.blog) {
            let img = document.createElement("img");
            img.className = "journeyimg"
            img.setAttribute('src', div.img);
            imgDiv.appendChild(img);
        } //coding journey IMG- works needs styling

        let btnsDiv = document.getElementById("buttons");
       for(let btns of result.buttons){
        let btn = document.createElement('button')
        btn.className = "btns";
        btn.innerHTML = btns.title;
        btnsDiv.appendChild(btn);
       }//blog buttons- need styling cant figure out
       
       let pDiv = document.getElementById('div')
       for(let p of result.blog){
        let para = document.createElement('p')
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
        }// resume PDF- styled but weird line- ask travis

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