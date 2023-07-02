import {useState, useEffect, useContext} from "react";

import {Menu} from "antd";
import {
    AppstoreOutlined,
    LoginOutlined,
    UserAddOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import {Context} from "../context";

import Link from "next/link";
import axios from "axios";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

const {Item} = Menu;
const TopNav = () => {

    const router = useRouter();

    // State Management
    const [current, setCurrent] = useState("");
    const {state, dispatch} = useContext(Context);

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
        console.log(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    // Logout State
    const logout = async () => {
        dispatch({
            type: "LOGOUT"
        });
        window.localStorage.removeItem("user");
        const {data} = await axios.get("/api/logout");
        toast(data.message);
        await router.push("/login");
    };

    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item key="/"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}
            >
                <Link href="/">
                    Home
                </Link>
            </Item>

            <Item key="/login"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<LoginOutlined/>}>
                <Link href="/login">
                    Login
                </Link>
            </Item>

            <Item key="/register"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<UserAddOutlined/>}>
                <Link href="/register">
                    Register
                </Link>
            </Item>

            <Item key="/logout"
                  onClick={(e) => logout()}
                  icon={<LogoutOutlined/>}>
                Logout
            </Item>
        </Menu>
    );
};

export default TopNav;