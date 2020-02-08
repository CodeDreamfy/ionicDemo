// import  createHistory from 'history/createBrowserHistory';
const createHistory = require('history').createBrowserHistory;

// A singleton history object for easy API navigation
const history = createHistory();
export default history;
