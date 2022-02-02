import { FunctionComponent, useState, useRef } from 'react';
import { NavMenu } from '../../components/navigation/NavMenu';
import Form from '../ui/Form';
import IconWithRef from '../ui/refs/IconWithRef';
import InputWithRef from '../ui/refs/InputWithRef';
import Icon from '../ui/Icon';
import SubmitButton from '../ui/SubmitButton';
import { InputEvent, SubmitEvent } from '../../common/EventTypes';
import styles from './Overlay.module.css';
import buttonStyles from '../ui/Button.module.css';
import iconStyles from '../ui/Icon.module.css';
import formStyles from '../ui/Form.module.css';
import navStyles from '../navigation/NavMenu.module.css';
import inputStyles from '../ui/Input.module.css';
import { OverlayUpper } from './OverlayUpper';
import { OverlayLower } from './OverlayLower';
import {
  addElement,
  toggleElement,
  elementHasClass,
} from '../../utils/DomUtils';

export const Overlay: FunctionComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const openIconRef = useRef<HTMLElement>(null);
  const closeIconRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchInputShrinkStyle = inputStyles['shrink'];
  const iconHideStyle = 'hide';

  const doNothing = () => {};

  const handleMenuOpenClick = () => {
    if (searchInputRef && searchInputRef.current) {
      const searchInputEl: HTMLInputElement = searchInputRef?.current;

      if (elementHasClass(searchInputEl, searchInputShrinkStyle)) {
        toggleElement(searchInputEl, searchInputShrinkStyle)
      } else {
        setSearchInputValue('')
        addElement(searchInputEl, searchInputShrinkStyle);
      }
      searchInputEl.focus();

      if(openIconRef && openIconRef.current && closeIconRef && closeIconRef.current) {
        addElement(openIconRef.current, iconHideStyle);
        toggleElement(closeIconRef.current, iconHideStyle);
      }
    } else {
      console.error('Failed to Access DOM');
    }
  };

  const handleMenuCloseClick = () => {
    if(searchInputRef && searchInputRef.current && openIconRef && openIconRef.current && closeIconRef && closeIconRef.current) {
      setSearchInputValue('')
      toggleElement(searchInputRef.current, searchInputShrinkStyle);
      closeIconRef.current.classList.remove(iconHideStyle);
      addElement(closeIconRef.current, iconHideStyle);
      toggleElement(openIconRef.current, iconHideStyle);
    }
  };

  const handleSearchInputChange = (event: InputEvent) => {
    event.preventDefault();

    if (searchInputRef && searchInputRef.current) {
      const searchInputEl: HTMLInputElement = searchInputRef?.current;

      if(searchInputEl?.value?.trim()) {
        setSearchInputValue(searchInputEl.value)
      }
    }
  };

  const handleSearchInputClick = () => {
    if (searchInputRef && searchInputRef.current) {
      const searchInputEl: HTMLInputElement = searchInputRef?.current;

      if(searchInputEl.value.trim()) {
        setSearchInputValue(searchInputEl?.value)
      }

      if (elementHasClass(searchInputEl, searchInputShrinkStyle)) {
        toggleElement(searchInputEl, searchInputShrinkStyle);
      } else {
        addElement(searchInputEl, searchInputShrinkStyle);
      }
      searchInputEl.focus();
    }
  };

  const handleSearchFormSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    if (searchInputRef && searchInputRef.current) {
      const searchInputEl: HTMLInputElement = searchInputRef?.current;
      
      if (searchInputEl?.value && !elementHasClass(searchInputEl, searchInputShrinkStyle)) {
        alert(`Searching for: '${searchInputEl.value}'`);
        searchInputEl.value = '';
        setSearchInputValue('')
      }
    }

  };

  return (
    <article className={styles['overlay-image']}>
      <NavMenu styles={navStyles['nav-menu']}>
        <IconWithRef
          ref={openIconRef}
          styles={`fas fa-bars ${iconStyles['nav-menu-icon']}`}
          onClick={handleMenuOpenClick}
        />

        <IconWithRef
          ref={closeIconRef}
          styles={`fas fa-times ${iconStyles['fa-times']} ${iconStyles['nav-menu-icon']} ${iconHideStyle}`}
          onClick={handleMenuCloseClick}
        />
      </NavMenu>

      <Form
        styles={formStyles['search-form']}
        action={'#none'}
        noValidateFlag={true}
        inputValue={searchInputValue}
        onSubmit={handleSearchFormSubmit}
      >

        <InputWithRef
          styles={inputStyles['search-input'] + ' ' + inputStyles['shrink']}
          inputType="search"
          placeholderText="Search"
          ref={searchInputRef}
          onClick={handleSearchInputClick}
          onChange={handleSearchInputChange}
        />

        <SubmitButton styles={buttonStyles['search-button']}>
          <Icon
            styles={`fas fa-search ${iconStyles['search-icon']}`}
            onClick={doNothing}
          />
        </SubmitButton>
      </Form>

      <OverlayUpper>
        <OverlayLower />
      </OverlayUpper>
    </article>
  );
};
