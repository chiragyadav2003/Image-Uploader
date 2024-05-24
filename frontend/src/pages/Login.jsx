import { Auth } from "../components/Auth/Auth.jsx";
import { Quote } from "../components/Quote.jsx";

export const Login = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="login" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    )
}