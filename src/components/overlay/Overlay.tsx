import React, { FunctionComponent, useState, useRef } from 'react';
import { NavMenu } from '../../components/navigation/NavMenu';
import Form from '../ui/Form';
import IconWithRef from '../ui/refs/IconWithRef';
import InputWithRef from '../ui/refs/InputWithRef';
import Icon from '../ui/Icon';
import SubmitButton from '../ui/SubmitButton';
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
import { InputEvent, SubmitEvent } from '../../common/Types';

export const Overlay: FunctionComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const openIconRef = useRef<HTMLElement>(null);
  const closeIconRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const doNothing = () => {};

  const handleMenuOpen = () => {
    if (searchInputRef && searchInputRef.current) {
      const searchInputEl: HTMLInputElement = searchInputRef?.current;

      searchInputEl.focus();

      if (elementHasClass(searchInputEl, 'shrink')) {
        toggleElement(searchInputEl, 'shrink')
      } else {
        setSearchInputValue('')
        addElement(searchInputEl, 'shrink');
      }

      addElement(searchInputEl, 'hide');

      if(closeIconRef && closeIconRef.current) {
        toggleElement(closeIconRef.current, 'hide');
      }
    } else {
      console.error('Failed to Access DOM');
    }
  };

  const handleMenuClose = () => {
    if(searchInputRef && searchInputRef.current && closeIconRef && closeIconRef.current) {
      setSearchInputValue('')
      toggleElement(searchInputRef.current, 'shrink');
      closeIconRef.current.classList.remove('hide');
      toggleElement(searchInputRef.current, 'hide');
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

      if (elementHasClass(searchInputEl, 'shrink')) {
        toggleElement(searchInputEl, 'shrink');
      } else {
        addElement(searchInputEl, 'shrink');
      }
      searchInputEl.focus();
    }
  };

  const handleSearchFormSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    if (searchInputRef && searchInputRef.current) {
      const searchInputEl: HTMLInputElement = searchInputRef?.current;
      
      if (searchInputEl?.value && !elementHasClass(searchInputEl, 'shrink')) {
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
          onClick={handleMenuOpen}
        />

        <IconWithRef
          ref={closeIconRef}
          styles={`fas ${iconStyles['fa-times']} ${iconStyles['nav-menu-icon']} hide`}
          onClick={handleMenuClose}
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
          styles={inputStyles['search-input'] + ' shrink'}
          inputType="search"
          placeholderText="Search"
          ref={searchInputRef}
          onClick={handleSearchInputClick}
          onChange={handleSearchInputChange}
        />

        {/* Wrap with CSSTransition */}
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
