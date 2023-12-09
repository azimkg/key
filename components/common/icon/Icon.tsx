'use client';

import { FC, SVGProps } from 'react';
import Clock from '@icons/clock.svg';
import Star from '@icons/start.svg';
import Success from '@icons/success.svg';
import { iconPath } from 'common/icon/types';


const icons: Record<iconPath, FC<SVGProps<SVGSVGElement>>> = {
  [iconPath.START_ICON]: Star,
  [iconPath.CLOCK_ICON]: Clock,
  [iconPath.SUCCESS_ICON]: Success
};
interface IIconProps extends SVGProps<SVGSVGElement>{
  pathIcon: iconPath
}
const Icon = ({ pathIcon, ...other }: IIconProps) => {
  const SVG = icons[pathIcon];
  return <SVG {...other}/>;
};

export default Icon;
