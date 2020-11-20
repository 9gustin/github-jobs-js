import positionsService from '../services/githubJobs/positions.service.js';

let controller = {};
controller.job = undefined;

//init
controller.init = () => {
    let url = new URLSearchParams(window.location.search);
    let jobId = url.get('id');

    if(jobId) controller.initJob(jobId);
}

//Job
controller.initJob = async id => {
    let job = await positionsService.getById(id);

    if(job){
        controller.job = job;
        controller.drawJob();
    }
    else alert('Job not found! :(')
}
controller.drawJob = () => {
    if(controller?.job){
        let htmlComponents = document.querySelectorAll('[data-component]');

        htmlComponents.forEach(field => {
            let propName = field.getAttribute('data-component');

            if(controller.job[propName] && controller.job[propName]!=='') {
                typeof field.value && (field.value = controller.job[propName]);
                typeof field.src && (field.src = controller.job[propName]);
                typeof field.textContent && (field.innerHTML+= controller.job[propName]);
            }
        })
    }
}

//events
window.onload = controller.init;

export default controller;