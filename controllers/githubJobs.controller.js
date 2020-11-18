import positionsService from '../services/githubJobs/positions.service.js';
import Location from '../models/location.js';

//Global vars
let controller = {};
controller.jobLocations = [
    new Location({name: 'London', selected: false}),
    new Location({name: 'Amsterdam', selected: false}),
    new Location({name: 'New York', selected: true}),
    new Location({name: 'Berlin', selected: false})
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
    let radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.id = location.name;
    radioBtn.name = 'LocationComponent';
    if(location.selected) radioBtn.checked = true;
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
    if(existentLocation){
        let selectedLocation = document.querySelector('[name="LocationComponent"]:checked');
        if(selectedLocation) selectedLocation.checked = false;
        
        controller.jobLocations = controller.jobLocations.map(l => {
            if(l.name === location.name) l.selected = true;
            else l.selected = false;
            return l;
        })
        existentLocation.checked = true;
    }
}
controller.addLocation = location => {
    if(location){
        let jobLocations = document.querySelector('[data-component="job-locations"]');
        let htmlLocation = controller.makeLocationComponent(location);
        jobLocations.appendChild(htmlLocation);
        controller.jobLocations.push(new Location(location));
    }

}

window.onload = controller.init;

export default controller;