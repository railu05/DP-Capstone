const pageInfo = {
    "PageTitle":"",
    "PageHeader":"Welcome",
    "Stacks_tab": "Stacks",
    "Projects_tab":"Projects"
};

const whatido = ["DEVELOP & BUILD WEB APPLICATION BASE ON THE CLIENT'S / COMPANY'S BUSINESS REQUIREMENTS.",
                "DIGITALIZED AND AUTOMATE MANUAL PROCESS & WORKFLOW OF THE CLIENT / COMPANY."];

let creatorskills = {
    "aspnet":["ASP.Net / C# (WebForms, Core)","aspnetc.png","Intermediate","200px","100px"],
    "mssql":["Microsoft SQL Server (MSSQL)","mssql.png","Intermediate","200px","130px"],
    "mssrs":["Microsoft SQL Reporting Services (MSSRS)","mssrs.png","Intermediate","200px","80px"],
    "tsql":["Transact SQL (T-SQL)","tsql.jpg","Intermediate","200px","150px"],
    "mspp":["Microsoft Power Platforms (PowerApps/Model-driven Apps, Power Automate)","ppf.jpg","Intermediate","200px","100px"],
    "dtvrs":["Microsoft Dataverse","dtaverse.jpg","Beginner","150px","150px"],
    "msd365":["Microsoft Dynamics 365 CRM","msd365.png","Beginner","150px","150px"],
    "angular":["Angular / Angular JS","angular.png","Beginner","190px","140px"],
    "btstrap":["BootStrap","bootstrap.png","Intermediate","200px","200px"],
    "jvscrpt":["Javascript","javascript.png","Beginner","200px","200px"],
    "html":["HTML","html.png","Intermediate","200px","200px"],
    "css":["CSS","css.png","Intermediate","200px","200px"],

   
   
}


 let jobexppost = [
                    {"position":"Software Engineer (Current)","location":"Dubai, United Ararb Emirates"},
                    {"position":"IT Support Officer","location":"Dubai, United Ararb Emirates"},
                    {"position":"Sr. Developer / Analyst","location":"Davao City, Philippines"},
                    {"position":"Software Developer & Support Staff","location":"Davao City, Philippines"},
                    {"position":"Programmer / Technical Support","location":"Davao City, Philippines"},
                    {"position":"Jr. ASP.Net Developer","location":"Davao City, Philippines"},


                   ]



let personalInformation = {
    "name":
    {
        "id":"ctrName",
        "etyp":"text",
        "description":"Cezar Ryan Umbana"
    },
"imageUrl":
    {
      "id":"profPic",
      "etyp":"photo",
      "url":"./images/cezar.jpg",
      "description":"Cezar Ryan Umbana" 
    },
"jobTitle":
    {
        "id":"ctrJob",
        "etyp":"text",
        "description":"Developer"
    },
    "email":
    {
    "id":"email",
    "etyp":"text",
    "description":"CEZARYAN05@YAHOO.COM" 
    },
    "educ":
        {
        "id":"educ",
        "etyp":"text",
        "description":"BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY" 
        },
    "lang":
    {
    "id":"language",
    "etyp":"text",
    "description":"ENGLISH, TAGALOG, CEBUANO" 
    },
    "nat":
        {
        "id":"natnlty",
        "etyp":"text",
        "description":"FILIPINO" 
        },
        
    "curres":
    {
        "id":"currres",
        "etyp":"text",
        "description":"DUBAI, UNITED ARAB EMIRATES" 
    }
};
let currentlyBased =  { 
    "currentAddress":
        {
            "id":"currentAddress",
            "etyp":"text",
            "description":"Dubai, United Arab Emirates"
        },
    "currentlyBasedImgUrl":
        {
          "id":"caPhoto",
          "etyp":"photo",
          "url":"./images/uae.png",
          "description":"Dubai, United Arab Emirates"  
        },
  "mobileno":
        {
            "id":"currentAddressNo",
            "etyp":"text",
            "description":"+971 562 123 179"
        }
};

let hometown = {   
    "address":
    {
        "id":"homeAddress",
        "etyp":"text",
        "description":"Davao City Philippines"
    },
    "homeTownImgUrl":
    {
        "id":"haPhoto",
        "etyp":"photo",
        "url":"./images/ph.png",
        "description":"Davao, Philippines"  
      },
    
    "mobileno":
    {
        "id":"homeAddressNo",
        "etyp":"text",
        "description":"+639 052 464 738"

    }
};

let socmedia =
 //   "socmedia":
    {  
       "link":{
            "id":"linkeIndLink",
            "etyp":"link",
            "description":"LinkedIn Profile",
            "url":"https://www.linkedin.com/in/czarryanumbana/"
       } ,
       "logo":
       {
           "id":"linkedinbadge",
           "etyp":"photo",
           "url":"./images/LI-logo.png",
           "description":"LinkedIn - Cezar Ryan Umbana"  
         },
       
    };


let memelist = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg'];

export {pageInfo,whatido, creatorskills,memelist,socmedia,hometown,currentlyBased,personalInformation,jobexppost};

