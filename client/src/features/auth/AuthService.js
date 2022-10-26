import axios from "axios";

const REGISTER_URL = "http://localhost:3000/api/users/signup"
const LOGIN_URL = "http://localhost:3000/api/users/login"
// const ACTIVATE_URL = "http://localhost:3000/api/users/activate"

//Register admins
const register = async (adminInfo) => {
    const config = {
        headers: {
            "Content-Type":"application"
        }
    }

    const response = await axios.post(REGISTER_URL, adminInfo, config)
    return response.data;
}

//admin login
const login = async (adminInfo) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    };

    const response = await axios.post(LOGIN_URL, adminInfo, config)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}

//logout admin
const logout = () => {
    localStorage.removeItem("user")
}

const authService = { register, login, logout };
export default authService;