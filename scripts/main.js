//Import Data from Another JS File
import { pageInfo, whatido,creatorskills,memelist,socmedia,hometown,currentlyBased,personalInformation,jobexppost } from './data.js';
const unshuffled = memelist;
let cskills = creatorskills;

const loadDefaultItems = () => {

    for (let item in currentlyBased)
    {
        const tmp = currentlyBased[item];
        insertValues(tmp);
    }
    for (let item in personalInformation)
    {
        const tmp = personalInformation[item];
        insertValues(tmp);
    }
    for (let item in hometown)
    {
        const tmp = hometown[item];
        insertValues(tmp);
    }

    for(let item in socmedia)
    {
        const tmp = socmedia[item];
        insertValues(tmp);
    }
    const generateMemeButton = document.getElementById('btnGenerateMeme');
    generateMemeButton.addEventListener('click',clickGenerateMeme);

    const itemLink = document.getElementsByClassName('nav-list-menu');
    for(let i=0; i < itemLink.length; i++) {
            itemLink[i].addEventListener('click',function() {showDiv(this.getAttribute('data-value'));});
      
    }

    let imgcardcontainer = document.getElementById('img-card-container');
    for(let item in cskills){

        const content = `
        <div class="imgcard">
        <div style="height:200px">
                                        <img src="images/skills/${cskills[item][1]}" class="cardimgcontainer" style="width:${cskills[item][3]};height:${cskills[item][4]};" alt="Avatar">
                                        </div>
                                        <div class="cardcontainer">
                                          <h4 style="font-size:12px;"><b>${cskills[item][0]}</b></h4> 
                                          
                                        </div>
                                      </div>
        `;
        imgcardcontainer.innerHTML += content;
    }

    // <p>${cskills[item][2]}</p> 

}


//---------------------------------------------------------------------------------------------------


const generateMeme = (function () {

	//Function to Shuffle Array and returns first image
	let shuffleMeme = function (array) {
        let shuffled = array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        return shuffled[0];
	};
    
	const location = "images/memes/";
	// Public
	let getImageSrc = function () {
       let imageUrl = location+shuffleMeme(unshuffled);
 		return imageUrl;
	};

 	return {
		getImageSrc: getImageSrc
 	};
})();

let clickGenerateMeme = () => {
    
    let img = document.getElementById('memecontainer');
    img.setAttribute('src',generateMeme.getImageSrc());
}

const insertValues = (obj) => {
   
    const elementid= obj.id;
    const elementType = obj.etyp;

    if(obj != undefined && obj != null){
        if(elementType != undefined && elementType != null)
        {
            if(elementType == "text"){
                let tempText = null;
                tempText = document.getElementById(elementid);
                tempText.innerHTML = obj.description;
            }
            else if(elementType == "photo")
            {
                let tempPhoto = null; 
                tempPhoto = document.getElementById(elementid);
                tempPhoto.setAttribute('alt',obj.description);
                tempPhoto.setAttribute('src',obj.url);
            }
            else if(elementType == "link")
            {
                let templink = null
                templink = document.getElementById(elementid);
                templink.textContent =  obj.description;
                templink.setAttribute('href',obj.url);
            }
        }
    }
};

const navlink =  document.getElementsByClassName('div-column-container');
         function showDiv(dataImg) {
            for(let i = 0; i < navlink.length; i++)
            {
                if(navlink[i].id == dataImg)
                {
                    let header = dataImg;
                    if(navlink[i].id == "skills")
                    {
                        header = "ABOUT ME";
                    }

                    navlink[i].setAttribute('style','display: block');//= 'show-container';
                    let bodyHeader = document.getElementById('bodyHeader');
                    bodyHeader.innerHTML = header;
                }
                else {
                    navlink[i].setAttribute('style','display: none') //= 'hide-container ';
                }
            }
            
        }

        const ul = document.querySelector('.jelist');
        for (let i = 0; i < jobexppost.length; i++) {
            const jobeexp = jobexppost[i]; 
            const li = document.createElement('li');
            const subUl = document.createElement('ul');
            subUl.setAttribute('style','list-style:none;');
            ul.appendChild(li);
            li.appendChild(subUl);
            
            for(const key in jobeexp) {
              const val = jobeexp[key];
              const subLi = document.createElement('li');
              
              let loopkey = `${key}`;
              if(loopkey == "location")
              {
                subLi.setAttribute('style','margin-left:20px;');
              }
              else 
              {
                subLi.setAttribute('style','font-weight:bolder');
              }
              //subLi.innerHTML = `${key} - ${val}`;
              subLi.innerHTML = `${val}`;
              subUl.appendChild(subLi);
            }
            const br = document.createElement('br');
            li.appendChild(br);
          }


loadDefaultItems();
let ulwhatido = document.getElementById('wido');
for(let i = 0; i < whatido.length;i++)
{
    const listitem = document.createElement('li');
    listitem.innerHTML = whatido[i].toString();
    ulwhatido.appendChild(listitem);
}
