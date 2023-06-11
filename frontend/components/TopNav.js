import {Menu} from "antd";
import Link from "next/link";
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';

const {Item} = Menu;
const TopNav = () => {
    return (
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined/>}>
                <Link href="/">
                    Home
                </Link>
            </Item>

            <Item icon={<LoginOutlined/>}>
                <Link href="/login">
                    Login
                </Link>
            </Item>

            <Item icon={<UserAddOutlined/>}>
                <Link href="/Register">
                    Register
                </Link>
            </Item>
        </Menu>
    );
};

export default TopNav;