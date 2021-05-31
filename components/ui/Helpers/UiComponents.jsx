import React from 'react'
import { components } from 'react-select'
const { Option, SingleValue, MenuList } = components
import Scrollbar from 'react-smooth-scrollbar'
import Icon from "../../Icon"

export const customSingleValue = (props) => (
  <SingleValue {...props}>
    {props.data.icon && <Icon variant={props.data.icon} />}
    {props.data.label}
  </SingleValue>
);

export const customOptionValue = (props) => (
  <Option className={`${props.data.isExclude ? 'exclude' : ''}`} {...props}>
    {props.data.icon && <Icon variant={props.data.icon} />}
    {props.data.label}
  </Option>
);

export const scrollBar = (props) => {
  return (
    <MenuList {...props}>
      <Scrollbar style={{ maxHeight: 300 }} alwaysShowTracks={true}>
        {props.children}
      </Scrollbar>
    </MenuList>
  );
};
