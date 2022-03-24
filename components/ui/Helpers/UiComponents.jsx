import React, { useRef, useEffect } from 'react'
import { components } from 'react-select'
const { Option, SingleValue, MenuList, MultiValue } = components
import Scrollbar from 'react-smooth-scrollbar'
import Icon from "../../Icon"
import { Form } from "react-bootstrap"
import { FixedSizeList as List } from "react-window";


export const customSingleValue = (props) => (
  <SingleValue {...props}>
    {props.data.icon && <Icon variant={props.data.icon} />}
    {props.data.label}
  </SingleValue>
);

export const customMultiValue = (props) => (
  <MultiValue {...props}>
    {props.data.value}
  </MultiValue>
);

export const customOptionValueAdv = (props) => (
  <Option className={`${props.data.isExclude ? 'exclude' : ''}`} {...props}>
    {props.data.value}
  </Option>
);

export const customOptionValue = (props) => (
  <Option className={`${props.data.isExclude ? 'exclude' : ''}`} {...props}>
    {props.data.icon && <Icon variant={props.data.icon} />}
    {props.data.label}
  </Option>
);


export const OptionComp = ({ children, ...props }) => {
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
  const newProps = Object.assign(props, { innerProps: rest });
  return (
    <components.Option
      {...newProps}
    >
      {children}
    </components.Option>
  );
};

export const customOptionAdv = (props) => {

  const { onMouseMove, onMouseOver, ...rest } = props.innerProps
  const newProps = { ...props, innerProps: rest }

  return <Option className={`${props.data.isExclude ? 'exclude' : ''}`} {...newProps}>
    <div className='custom-checkbox-offset'>
      <Form.Check
        className="custom-checkbox-sd mr-1"
        value={""}
        custom
        defaultChecked={props.isSelected}
        type="checkbox"
      />
      {props.data.label}
    </div>
  </Option>
};

export const scrollBar = (props) => {
  return (
    <MenuList {...props}>
      <Scrollbar style={{ maxHeight: 300 }} alwaysShowTracks={true}>
        {props.children}
      </Scrollbar>
    </MenuList>
  );
};

export const scrollBarAdv = (props) => {

  const height = 35;
  const { options, children, maxHeight, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;
  const scrolRef = useRef()

  const onScroll = ({offset:{y}}) => {
    scrolRef.current.scrollTo(y);
  }

  useEffect(()=>{
    onScroll({offset:{y:0}})
  }, [props])

  return (
    <MenuList {...props}>
      <Scrollbar
        style={{ maxHeight: maxHeight }}
        alwaysShowTracks={true}
        onScroll={onScroll}
        >
        <List
          height={maxHeight}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset}
          style={{ overflow: false }}
          ref={scrolRef}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
      </Scrollbar>
    </MenuList>
  );
};
