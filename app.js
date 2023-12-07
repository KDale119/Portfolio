// sticky for navbar
function someThing() {

    fetch("./page1.json")
    .then(response => response.json())
    .then(result => {
       // document.getElementById('home').innerHTML = result.navbarOpts[0].opt1
       for (let opt of result.navbarOpts) {
        let h3 = document.createElement('h3')
        h3.className = opt.opt1
        h3.innerHTML = opt.opt1
        document.getElementById('navbarOpts').appendChild(h3);
        }

        // unsure on links??? Ask 
    })











    fetch("./page2.json")
    .then(response => response.json())
    .then(result => {
        let section = document.getElementById('jobHistory');
        for (let sect of result.jobHistory) {
            let outDiv = document.createElement('div')

            let titleDiv = document.createElement('div')

            titleDiv.className = "jobtitle"

            titleDiv.innerHTML = sect.job

            let ul = document.createElement('ul')

            ul.className = "jobdesc";

            // this is where i loop
            let li = document.createElement('li')
            li.className = "li";
            li.innerHTML = sect.jobDuties
            ul.appendChild(li);
            outDiv.appendChild(ul);
            
            section.appendChild(titleDiv);
            section.appendChild(outDiv)
        }
        
        let div = document.getElementById('head')
        for (let dv of result.Header) {

            let h4 = document.createElement('h4');
            h4.className = "exp";
            h4.innerHTML = dv.heading;
            div.appendChild(h4)
        } //doesnt work???
    })












    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
       for (let btns of result.buttons) {
        let button = document.createElement('button')
        button.className = btns;
        button.innerHTML = btns.title;
        document.getElementById('buttons').appendChild(button);
         /// works but looks weird
        }

        let div = document.getElementById('div')   
        for (let para of result.blog) {
            let p = document.createElement('p')
            p.className = "paragraph";
            p.innerHTML = para.paragraph; 
            div.appendChild(p);
            //works but no line breaks
        }
    })











    fetch("./page4.json")
    .then(response => response.json())
    .then(result => {
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