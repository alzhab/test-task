import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const PhoneIcon = (props: IconProps): ReactElement => {
	const color = props.color || COLORS.FONT;
	
	const size = props.size;
	const width = 12;
	const height = 12;
	const scale = size ? (size / height) : 1;
 
	return (
		<Svg width={width * scale} height={height * scale} viewBox={`0 0 ${width} ${height}`}>
      <Path id="FontAwsome_phone-alt_" data-name="FontAwsome (phone-alt)" d="M11.658,8.486,9.033,7.361a.563.563,0,0,0-.656.162L7.214,8.943A8.687,8.687,0,0,1,3.061,4.79l1.42-1.163a.561.561,0,0,0,.162-.656L3.518.346A.566.566,0,0,0,2.873.021L.436.583A.563.563,0,0,0,0,1.131,10.874,10.874,0,0,0,10.875,12.006a.563.563,0,0,0,.548-.436l.563-2.438a.569.569,0,0,0-.328-.647Z" fill={color} transform="translate(0 -0.006)"/>
    </Svg>
	);
};

export default PhoneIcon;
