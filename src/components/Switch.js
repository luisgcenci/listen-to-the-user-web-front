import React from 'react';
import ReactSwitch from 'react-switch';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { updateNavBarCollapseStatus } from '../store/features/navSlice';

const Switch = () => {
  const navOpen = useAppSelector((state) => state.navBar.navOpen);
  const dispatch = useAppDispatch();

  const handleChange = (status) => {
    dispatch(updateNavBarCollapseStatus(status));
  };

  return (
    <ReactSwitch
      onChange={handleChange}
      checked={navOpen}
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};

export default Switch;
