export const initialState = {
    users: [],
    isLoggedin: (localStorage.getItem("isAuth") && localStorage.getItem("isAuth") === true) ? localStorage.getItem("isAuth") : false,
    loggedInUser: localStorage.getItem("loggedUser")
};