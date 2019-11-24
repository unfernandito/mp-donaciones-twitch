import React from 'react'
import { Layout, Menu } from 'antd'

function Header(props){
    return (
        <Layout.Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1" onClick={() => null}>Inicio</Menu.Item>
                <Menu.Item key="2" onClick={() => null}>Login</Menu.Item>
                <Menu.Item key="3" onClick={() => null}>Registrarse</Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Header