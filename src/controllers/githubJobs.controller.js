import positionsService from '../services/githubJobs/positions.service.js';
import Location from '../models/location.js';

//Global vars
let controller = {};
controller.jobLocations = [
    new Location({ name: 'London', selected: false }),
    new Location({ name: 'Amsterdam', selected: false }),
    new Location({ name: 'New York', selected: true }),
    new Location({ name: 'Berlin', selected: false })
];
controller.searchFilters = {};
controller.jobs = [];

//Init
controller.init = async () => {
    controller.initLocations();
}

//Locations
controller.initLocations = () => {
    if (controller.jobLocations && controller.jobLocations.length > 0) {
        let jobLocations = document.querySelector('[data-component="job-locations"]');
        let htmlLocations = controller.jobLocations.map(location => controller.makeLocationComponent(location));

        htmlLocations.forEach(location => jobLocations.appendChild(location))
    }
}
controller.makeLocationComponent = location => {

    let radioBtn = document.createElement('input');
    radioBtn.classList = 'mr-3 form-radio h-5 w-5';
    radioBtn.type = 'checkbox';
    radioBtn.id = location.name;
    radioBtn.name = 'LocationComponent';
    if (location.selected) radioBtn.checked = true;
    radioBtn.onchange = (e) => {
        e.preventDefault();
        controller.handleChangeLocation(location);
    }

    let label = document.createElement('label');
    label.textContent = location.name;
    label.htmlFor = location.name;

    let li = document.createElement('li');
    li.classList = 'my-2 flex items-center font-medium';
    li.appendChild(radioBtn);
    li.appendChild(label);

    return li;
}
controller.handleChangeLocation = location => {

    let locations = document.querySelectorAll('[name="LocationComponent"]');
    locations.forEach(lComponent => {
        if (lComponent.id === location.name) {
            controller.jobLocations = controller.jobLocations.map(l => {
                if (l.name === location.name) l.selected = lComponent.checked || false;
                else l.selected = false;
                return l;
            })
        }
        else {
            lComponent.checked = false
        }
    });
}
controller.getSelectedLocation = () => controller.jobLocations.find(location => location.selected);

controller.addLocation = location => {
    if (location) {
        let jobLocations = document.querySelector('[data-component="job-locations"]');
        let htmlLocation = controller.makeLocationComponent(location);
        jobLocations.appendChild(htmlLocation);
        controller.jobLocations.push(new Location(location));
    }

}
//Jobs
controller.renderJobs = () => {
    let jobList = document.querySelector('[data-component="job-list"]');
    if (jobList) {

        let actualJobs = document.querySelectorAll('[data-component="job"]');
        actualJobs.forEach(job => {
            if (!controller.jobs.some(j => j.id === job.id)) job.remove();
        })

        controller.jobs.forEach(job => {
            if (!document.querySelector(`[data-component="job"][data-id="${job.id}"]`)) {
                jobList.appendChild(controller.makeJobComponent(job))
            }
        });
    }

}
controller.makeJobComponent = job => {
    let imgDiv = document.createElement('div');
    imgDiv.classList = 'w-28 h-28 flex justify-center p-1';

    if (job.companyLogo) {
        let img = document.createElement('img');
        img.classList = 'object-contain  rounded';
        img.src = job.companyLogo;
        imgDiv.appendChild(img);
    }

    let company = document.createElement('strong');
    company.classList = 'my-3';
    company.textContent = job.company;

    let jobTitle = document.createElement('h5');
    jobTitle.classList = 'text-base mt-2 mb-4';
    jobTitle.textContent = job.title;

    let jobType = document.createElement('span');
    jobType.classList = 'rounded px-2 py-1 mt-2 border-solid border-blue-900 border-2 text-xs font-bold';
    jobType.textContent = job.type;

    let locationIcon = document.createElement('i');
    locationIcon.classList = 'material-icons mr-1';
    locationIcon.textContent = 'public';

    let location = document.createElement('span');
    location.classList = 'text-gray-400 flex items-center my-4 mr-4 text-xs';
    location.appendChild(locationIcon);
    location.append(job.location);

    let clockIcon = document.createElement('i');
    clockIcon.classList = 'material-icons mr-1';
    clockIcon.textContent = 'access_time';

    let createdAt = document.createElement('span');
    createdAt.classList = 'text-gray-400 flex items-center my-4 mr-4 text-xs';
    createdAt.appendChild(clockIcon);
    createdAt.append(job.createdAtToString);

    let divInfoAbout = document.createElement('div');
    divInfoAbout.classList = 'flex justify-end';
    divInfoAbout.appendChild(location);
    divInfoAbout.appendChild(createdAt);

    let infoDiv = document.createElement('div');
    infoDiv.classList = 'text-xs w-3/4 lg:w-11/12 pl-2';
    infoDiv.appendChild(company);
    infoDiv.appendChild(jobTitle);
    infoDiv.appendChild(jobType);
    infoDiv.appendChild(divInfoAbout);

    let link = document.createElement('a');
    link.href = `/public/job/?id=${job.id}`;
    link.classList = 'flex overflow-hidden';
    link.appendChild(imgDiv);
    link.appendChild(infoDiv);

    let li = document.createElement('li');
    li.classList = 'bg-white rounded shadow-lg p-2 my-6';
    li.setAttribute("data-component", "job");
    li.setAttribute("data-id", job.id);
    li.appendChild(link);

    return li;
}

//Search
controller.getFilters = () => {
    let filters = {};
    filters.search = document.querySelector('[data-component="text-search"]').value;

    let locationName = document.querySelector('[data-component="location-search"]').value;
    if (locationName === '') locationName = controller.getSelectedLocation()?.name;

    filters.location = locationName;

    filters.full_time = document.querySelector('[data-component="fulltime-check"]').checked;

    return filters;
}
controller.search = async () => {
    let jobs = await positionsService.filter(controller.getFilters());

    if (!jobs) jobs = [];
    if (jobs) {
        controller.jobs = jobs;
        controller.renderJobs(jobs);
    }
}

//Events
document.querySelector('[data-component="form-search"]').onsubmit = evt => {
    evt.preventDefault();
    controller.search();
};
window.onload = controller.init;

export default controller;