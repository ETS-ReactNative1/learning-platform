import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainNavigation from '../MainNavigation';

const DrawerWrapper = styled.div`
  position: fixed;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(215, 95, 129, 0.98);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 100px;
  z-index: 100;

  button {
    position: absolute;
    right: 20px;
    top: 20px;
    margin: 0;
  }

  i {
    color: rgb(255, 255, 255);
    display: block;
  }

  nav {
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  a {
    padding: 8px;
    font-size: 30px;
  }

  .fa-book-open {
    font-size: 40px;
    opacity: 0.5;
    position: absolute;
    top: 20px;
    left: 40px;
  }

  .fa-times {
    font-size: 30px;
  }
`;

function Drawer({ closeDrawer }) {
  return (
    <DrawerWrapper>
      <button type="button" onClick={() => closeDrawer()}>
        <i className="fas fa-times" />
      </button>
      <i className="fas fa-book-open" />
      <MainNavigation />
    </DrawerWrapper>
  );
}

Drawer.propTypes = {
  closeDrawer: PropTypes.func,
};

export default Drawer;
