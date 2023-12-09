import React, { FC } from 'react';
import { ButtonHeight } from 'common/button/buttonSchema';
import Button from 'components/common/button/Button';
import cls from './KeyboardSettingsContent.module.css';


interface IKeyboardSettingsProps {
  handleClose: () => void
}

const KeyboardSettingsContent: FC<IKeyboardSettingsProps> = ({ handleClose }) => {
  return (
    <div className={cls.keyboard_settings_modal_main}>
      <div className={cls.ksm_1}>
        <h1 className={cls.ksm_h1}>Настройка клавиатуры</h1>
      </div>
      <div className={cls.ksm_line}></div>
      <div className={cls.ksm_2}>
        <div className={cls.ksm_2_1}>
          <div><p>Виртуальная клавиатура</p></div>
          <div className={cls.ksm_2_1_btns}>
            <div className={cls.ksm_2_btns}>
              <Button height={ButtonHeight.M}>Включить</Button>
            </div>
            <Button white={true} height={ButtonHeight.M}>Выключить</Button>
          </div>
        </div>
        <div className={cls.ksm_2_2}>
          <div><p>Виртуальные руки</p></div>
          <div className={cls.ksm_2_1_btns}>
            <div className={cls.ksm_2_btns}>
              <Button height={ButtonHeight.M}>Включить</Button>
            </div>
            <Button white={true} height={ButtonHeight.M}>Выключить</Button>
          </div>
        </div>
      </div>
      <div className={cls.ksm_3}>
        <div className={cls.ksm_3_1}>
          <p>Звук клавиш</p>
          <div>
            <Button white={true} height={ButtonHeight.M}>Клавиатура</Button>
            <Button height={ButtonHeight.M}>Печатная машинка</Button>
            <Button white={true} height={ButtonHeight.M}>Выключить</Button>
          </div>
        </div>
      </div>
      <div className={cls.ksm_3}>
        <div className={cls.ksm_3_1}>
          <p>Звук ошибок</p>
          <div>
            <Button white={true} height={ButtonHeight.M}>Включить</Button>
            <Button height={ButtonHeight.M}>Выключить</Button>
          </div>
        </div>
      </div>
      <div className={cls.ksm_line}></div>
      <div className={cls.ksm_4}>
        <Button onClick={handleClose} white={true} height={ButtonHeight.M}>Отменить</Button>
        <Button onClick={handleClose} height={ButtonHeight.M}>Применить</Button>
      </div>
    </div>
  );
};

export default KeyboardSettingsContent;
