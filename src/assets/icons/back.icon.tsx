import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const BackIcon = (props: IconProps): ReactElement => {
	const color = props.color || COLORS.FONT;
	
	const size = props.size;
	const width = 6;
	const height = 12;
	const scale = size ? (size / height) : 1;
 
	return (
		<Svg width={width * scale} height={height * scale} viewBox={`0 0 ${width} ${height}`}>
      <Path id="ArrowLeft" d="M499.8,9.28a.818.818,0,0,0,0-1.061.616.616,0,0,0-.943,0L494.2,13.47a.818.818,0,0,0,0,1.061l4.667,5.25a.615.615,0,0,0,.943,0,.818.818,0,0,0,0-1.061L495.61,14Z" transform="translate(-494 -8)" fill={color}/>
    </Svg>
	);
};

export default BackIcon;
