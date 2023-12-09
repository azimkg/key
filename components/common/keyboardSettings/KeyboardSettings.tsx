import React from 'react';
import HandOff from '@icons/handOff.svg';
import HandOn from '@icons/handOn.svg';
import KeyboardOff from '@icons/keyboardOff.svg';
import KeyboardOn from '@icons/keyboardOn.svg';
import Settings from '@icons/settings.svg';
import SoundOn from '@icons/soundOn.svg';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getHandsVisible, getKeyboardAndHands, getKeyboardVisible } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useSelector } from 'react-redux';
import cls from './KeyboardSettings.module.css';


const KeyboardSettings = () => {
  const dispatch = useAppDispatch();
  const keyboardVisible = useSelector(getKeyboardVisible);
  const handsVisible = useSelector(getHandsVisible);
  const keyboardAndHands = useSelector(getKeyboardAndHands);
  const handleKeyboardVisible = () => {
    dispatch(keyboardActions.setKeyboardVisible(!keyboardVisible));
  };
  const handleHandVisible = () => {
    dispatch(keyboardActions.setHandsVisible(!handsVisible));
  };
  const handleModalOpen = () => {
    dispatch(keyboardActions.setSettingsModal(true));
  };

  return (
    <div className={cls.keyboard_top_icons_group}>
      <div>
        <SoundOn />
      </div>
      <div onClick={handleKeyboardVisible}>
        {keyboardVisible ? <KeyboardOn /> : <KeyboardOff />}
      </div>
      <div onClick={handleHandVisible}>
        {keyboardAndHands ? <HandOn /> : <HandOff />}
      </div>
      <div className={cls.keyboard_vertical_line}></div>
      <div onClick={handleModalOpen}>
        <Settings />
      </div>
    </div>
  );
};

export default KeyboardSettings;
