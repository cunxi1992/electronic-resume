/*
data
 */
var bio = {
    "name": "ChaoQun Zhang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "138-****-5662",
        "email": "cunxi1992@gmail.com",
        "github": "长腿叔叔",
        "WeChat": "cunxi1990",
        "location": "ShenZhen"
    },
    "welcomeMessage": "To be you wanna to be.",
    "skills": ["product", "html", "CSS","js"],
    "biopic": "images/Me.jpeg"
};

var education = {
    "schools": [{
        "name": "Anhui University of Finance and Economics",
        "location": "BengBu AnHui China",
        "degree": "Undergraduate",
        "majors": "Information and Computing Science",
        "dates": "2012",
        "url": "http://www.aufe.edu.cn/"
    }],
    "onlineCourses": [{
            "title": "Font-End-Development",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.Udacity.com"
        },
        {
            "title": "Font-End-Development",
            "school": "Udacity",
            "dates": "2016",
            "url": "http://www.Udacity.com"
        }
    ]
};


var work = {
    "jobs": [{
        "employer": "Shenzhen Yongjia Tiancheng Technology Development Co., Ltd.",
        "location": "ShenZhen",
        "title": "Product Manager",
        "dates": "March 2017 - So far",
        "description":"Participate in product planning, development, on-line and maintenance of OA project."
    }] //only one job
};


var projects = {
    "projects": [{
        "title": "International Hotel",
        "dates": "2016",
        "description": "International hotel product design and development.",
        "images": ["images/First Page.png","images/Second Page.png"]
    }] // only one projects
};


/*
using:
1. for loop
2. function
3. encapsulation
4. map
 */

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName); // because name is in front of role

    var formattedmobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", this.contacts.location);
   	$("#topContacts, #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation); // put information in the contacts and footer at the same time

    var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
    $("#topContacts").after(formattedPic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(formattedMsg);

    $("#header").append(HTMLskillsStart);
    for (var myskills = 0; myskills < this.skills.length; myskills++) {
        var formattedSkill = HTMLskills.replace("%data%", this.skills[myskills]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

work.display = function() {
    for (var job = 0; job < this.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription); // making sure it locats in the last data line
    }
};

work.display();

projects.display = function(){
    for (var project = 0; project < this.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for(var image = 0; image < this.projects[project].images.length; image++){
	        var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
	        $(".project-entry:last").append(formattedImage);
    	}
    }
};

projects.display();

education.display = function(){
    for (var school = 0; school < this.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
        var formattedNameDegree = formattedName+formattedDegree; // another way of combine data
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < this.onlineCourses.length; onlineCourse++) {
        $(".online-entry").after(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
        var formattedDatesedu = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
        var formattedTitleSchool = formattedTitle+formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDatesedu);
        $(".education-entry:last").append(formattedURL);
    }
};

education.display();

$("#mapDiv").append(googleMap);












