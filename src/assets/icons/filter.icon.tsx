import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const LogoIcon = (props: IconProps): ReactElement => {
	const color = props.color || COLORS.FONT;
	
	const size = props.size;
	const width = 16;
	const height = 12;
	const scale = size ? (size / height) : 1;
 
	return (
		<Svg width={width * scale} height={height * scale} viewBox={`0 0 ${width} ${height}`}>
      <Path id="Filter" d="M-863,12a1,1,0,0,1-1-1,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm-2-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h10a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm-2-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Z" transform="translate(868)" fill={color}/>
    </Svg>
	);
};

export default LogoIcon;
