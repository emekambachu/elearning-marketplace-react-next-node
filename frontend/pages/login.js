import {useState, useContext} from "react";
import axios from 'axios';
import {toast} from "react-toastify";
import {SyncOutlined} from "@ant-design/icons";
import Link from "next/link";
import {Context} from '../context';
import {useRouter} from "next/router";

const Login = () => {
    // Data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // State
    const {state, dispatch} = useContext(Context);

    // Router
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table({email, password});
        try {
            setLoading(true);
            // const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
            //     email,
            //     password
            // });
            const {data} = await axios.post(`/api/login`, {
                email,
                password
            });

            // Dispatch the payload using state
            dispatch({
                type: "LOGIN",
                payload: data
            });

            // Save in local storage
            window.localStorage.setItem("user", JSON.stringify(data));

            // Redirect
            router.push("/");

            console.log("Login Response", data);
            toast.success("Login Successful");

        }catch (err){
            toast.error(err.response.data);
        }
        setLoading(false);
    };

    return (
        <>
            <h1 className={"jumbotron text-center bg-primary square"}>Login</h1>
            <div className={"container col-md-4 offset-md-4"}>
                <form onSubmit={handleSubmit}>
                    <input type="email"
                           className={"form-control mb-4 p-4"}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder={"Enter Email"}
                           required
                    />

                    <input type="password"
                           className={"form-control mb-4 p-4"}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder={"Enter Password"}
                           required
                    />

                    <button type={"submit"}
                            className={"btn btn-block btn-primary"}
                            disabled={!email || !password}
                    >
                        {loading ? <SyncOutlined spin /> : 'Submit'}
                    </button>
                </form>

                <p className={"text-center p-3"}>
                    Not registered?
                    <Link
                        className={"text-primary ml-1"}
                        href="/register"> Register
                    </Link>
                </p>

            </div>
        </>
    );
}

export default Login;