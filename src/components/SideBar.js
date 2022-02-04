import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaHome } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import 'react-pro-sidebar/dist/css/styles.css';
import 'components/css/SideBar.css';
import Switch from './Switch';
import { useAppSelector } from '../hooks/hooks';

const SideBar = () => {
  const navOpen = useAppSelector((state) => state.navBar.navOpen);

  return (
    <ProSidebar collapsed={!navOpen}>
      <SidebarHeader className="NavHeader">
        <div className="Switch">
          <Switch />
        </div>
        <Image className="NavImage" src="perfil.jpeg" />
        {navOpen
          ? (
            <>
              <h3 className="RestaurantName">Morty</h3>
              <h5 className="RestaurantDescription">Hi, I am Morty.</h5>
            </>
          )
          : null }
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}>
            <Link to="/home"> Home </Link>
          </MenuItem>
          <MenuItem icon={<FiSettings />} onSelect={null}>
            <Link to="/settings"> Settings </Link>
          </MenuItem>
          {/* <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu> */}
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        Footer
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
