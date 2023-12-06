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
    })

    fetch("./page3.json")
    .then(response => response.json())
    .then(result => {
       for (let btns of result.buttons) {
        let button = document.createElement('button')
        button.className = btns;
        button.innerHTML = btns.title;
        document.getElementById('buttons').appendChild(button);
        console.log(button) /// this shows but not in live server
        }
    })

    fetch("./page4.json")
    .then(response => response.json())
    .then(result => {
       
    })

}