import React from 'react';
import {COLORS} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {ButtonTypes} from '@types';
import {FilterIcon} from '@icons';
import {Button} from '@components';

const FiletrButton = ({openFilter, setOpenFilter}: {openFilter: boolean, setOpenFilter: (val: boolean) => void}) => {
  return (
    <Button styles={{
      borderRadius: 5,
      backgroundColor: openFilter ? COLORS.PRIMARY : 'transparent',
      paddingVertical: scaleSize(7),
      paddingHorizontal: scaleSize(7)
    }} click={() => {
      setOpenFilter(!openFilter);
    }} empty type={ButtonTypes.EMPTY}>
      <FilterIcon color={openFilter ? COLORS.FONT_LIGHT : COLORS.FONT} size={16}/>
    </Button>
  );
};

export default FiletrButton;
