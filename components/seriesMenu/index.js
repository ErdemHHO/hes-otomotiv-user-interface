'use client'

import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import styles from "./styles.module.css";

function SeriesMenu() {
    const [selectedItem, setSelectedItem] = useState('Menu Item 1');

    const handleItemClick = (itemName) => {
      setSelectedItem(itemName);
    };
  
    return (
      <div className='mt-5'>
        <DropdownButton title="1 Serisi" drop="end" variant="primary" align="end" direction="up" className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 1 - Item 1')}>
            Menu 1 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 1 - Item 2')}>
            Menu 1 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 1 - Item 3')}>
            Menu 1 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="2 Serisi" drop="end" variant="primary" align="end" direction="up" className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="3 Serisi" drop="end" variant="primary" align="end" direction="up" className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="4 Serisi" drop="end" variant="primary" align="end" direction="up"  className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="5 Serisi" drop="end" variant="primary" align="end" direction="up"  className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="6 Serisi" drop="end" variant="primary" align="end" direction="up"  className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="7 Serisi" drop="end" variant="primary" align="end" direction="up"  className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="8 Serisi" drop="end" variant="primary" align="end" direction="up"  className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="X Serisi" drop="end" variant="primary" align="end" direction="up"  className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="MINI COOPER" drop="end" variant="primary" align="end" direction="up" className='menuButton'>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 1')}>
            Menu 2 - Item 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 2')}>
            Menu 2 - Item 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick('Menu 2 - Item 3')}>
            Menu 2 - Item 3
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
}

export default SeriesMenu

