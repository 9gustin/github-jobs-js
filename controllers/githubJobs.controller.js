import positionsService from '../services/githubJobs/positions.service.js';
import Location from '../models/location.js';

//Global vars
let controller = {};
controller.jobLocations = [
    new Location({name: 'London'}),
    new Location({name: 'Amsterdam'}),
    new Location({name: 'New York'}),
    new Location({name: 'Berlin'})
];

//Init
controller.init = async () => {
    // let r = await positionsService.filter({full_time:true, location:'sf'});
    // console.log(r);

    // let r1 = await positionsService.getById(r[0].id);
    // console.log(r1);
    controller.initLocations();
}

//Locations
controller.initLocations = () => {
    if(controller.jobLocations && controller.jobLocations.length > 0){
        let jobLocations = document.querySelector('[data-component="job-locations"]');
        let htmlLocations = controller.jobLocations.map(location => controller.makeLocationComponent(location));

        htmlLocations.forEach(location => jobLocations.appendChild(location))
    } 
}
controller.makeLocationComponent = location => {
    let checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.id = location.name;
    checkbox.name = 'LocationComponent';

    let label = document.createElement('label');
    label.textContent = location.name;
    label.htmlFor = location.name;

    let li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(label);
    
    return li;
}

window.onload = controller.init;

export default controller;