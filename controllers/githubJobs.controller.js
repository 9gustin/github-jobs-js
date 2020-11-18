import positionsService from '../services/githubJobs/positions.service.js';

let controller = {};

controller.iniciar = async () => {
    let r = await positionsService.filter({full_time:true, location:'sf'});
    console.log(r);

    let r1 = await positionsService.getById(r[0].id);
    console.log(r1);
}

window.onload = controller.iniciar;

export default controller;