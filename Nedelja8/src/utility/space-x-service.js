const SPACEX_API = 'https://api.spacexdata.com/v3';
const LAUNCHES_PAST = '/launches/past'
const LAUNCHES_UPCOMING = '/launches/upcoming'
const roadster = '/roadster'
const info = '/info'


export function getPastLaunches() {
    return fetch(`${SPACEX_API}${LAUNCHES_PAST}`).then(res => res.json());
}

export function getUpcomingLaunches() {
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`).then(res => res.json());
}
export function getRoadster() {

    return fetch(`${SPACEX_API}${roadster}`).then(res => res.json());

} 
export function getInfo() {

    return fetch(`${SPACEX_API}${roadster}`).then(res => res.json());
}