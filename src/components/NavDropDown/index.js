import React from 'react'

import dynamic from 'next/dynamic'

const { AiFillPhone, AiOutlineMail } = dynamic(() => import('react-icons/ai'))
const { FaLocationArrow } = dynamic(() => import("react-icons/fa"))

const { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } = dynamic(() => import('./NavDropDown'))

const NavDropDown = (props) => (
  <div>
    NavDropDown
  </div>
);

export default NavDropDown
