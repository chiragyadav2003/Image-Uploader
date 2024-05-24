import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from "../../axiosConfig.js";


export const Auth = ({ type }) => {

    const [postInputs, setPostInputs] = useState({
        email: "",
        password: ""
    })
    const [cookies] = useCookies(['token']);
    const navigate = useNavigate()

    async function sendRequest() {
        try {
            const response = await axios.post(`/api/auth/${type === "signup" ? "signup" : "login"}`, postInputs)
            navigate("/dashboard")
        } catch (error) {
            //TODO: alert user at request failed
            console.log("request sent error :", error)
        }
    }

    return <div className="h-screen flex flex-col justify-center ">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
            <div>
                <div className=" flex flex-col items-center px-10 ">
                    <div className=" font-bold text-4xl mb-4">
                        Welcome to PicPlaza
                    </div>
                    <div className=" font-semibold text-sm text-slate-500">
                        {type === "signup" ? "Already have an account?" : "Don't have an account ?"}
                        <Link
                            className="pl-2 underline "
                            to={type === "signup" ? "/login" : "/signup"}
                        >{type === "signup" ? "Login" : "Signup"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8">

                    {/* {
                        type === "signup" ? <LabelledInput
                            label="Username"
                            placeholder="Enter your username"
                            onChange={(e) => { setPostInputs((prevState) => ({ ...prevState, name: e.target.value })) }
                                //*destructure prevState and update name here
                            } /> : null
                    } */}

                    <LabelledInput
                        label="Email"
                        placeholder="johndoe@gmail.com"
                        onChange={(e) => { setPostInputs((prevState) => ({ ...prevState, email: e.target.value })) }
                        } />
                    <LabelledInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => { setPostInputs((prevState) => ({ ...prevState, password: e.target.value })) }
                        } />
                    <button type="button" onClick={sendRequest} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 mt-8">{type === "signup" ? "Sign Up" : "Log In"}
                    </button>

                </div>
            </div>
        </div>
    </div>
}

function LabelledInput({ label, placeholder, type, onChange }) {
    return (
        <div className="pb-6">
            <label htmlFor={label} className="block mb-2 text-base font-semibold">{label}</label>
            <input onChange={onChange} type={type || "text"} id={label} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>)

}