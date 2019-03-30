import {loginGoogle} from './controller/controlles-firebase.js'

const acceder = document.getElementById('acceder');

acceder.addEventListener(() => {
    loginGoogle();
})