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
    radioBtn.type = 'radio';
    radioBtn.id = location.name;
    radioBtn.name = 'LocationComponent';
    if (location.selected) radioBtn.checked = true;
    radioBtn.onchange = (e) => {
        e.preventDefault();
        controller.selectLocation(location);
        console.log(controller.jobLocations)
    }

    let label = document.createElement('label');
    label.textContent = location.name;
    label.htmlFor = location.name;

    let li = document.createElement('li');
    li.appendChild(radioBtn);
    li.appendChild(label);

    return li;
}
controller.selectLocation = location => {
    let existentLocation = document.querySelector(`[name="LocationComponent"][id="${location.name}"]`);
    if (existentLocation) {
        let selectedLocation = document.querySelector('[name="LocationComponent"]:checked');
        if (selectedLocation) selectedLocation.checked = false;

        controller.jobLocations = controller.jobLocations.map(l => {
            if (l.name === location.name) l.selected = true;
            else l.selected = false;
            return l;
        })
        existentLocation.checked = true;
    }
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
    let label = document.createElement('label');
    label.textContent = job.title;

    let li = document.createElement('li');
    li.setAttribute("data-component", "job");
    li.setAttribute("data-id", job.id);
    li.appendChild(label);

    return li;
}

//Search
controller.getFilters = () => {
    let filters = {};
    filters.search = document.querySelector('[data-component="text-search"]').value;

    let locationName = document.querySelector('[data-component="location-search"]').value;
    if (locationName === '') locationName = controller.getSelectedLocation().name;

    filters.location = locationName;

    filters.fullTime = document.querySelector('[data-component="fulltime-check"]').checked;

    return filters;
}
controller.search = async () => {
    let jobs = await positionsService.filter(controller.getFilters());

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