import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const PlusIcon = (props: IconProps): ReactElement => {
	const color = props.color || COLORS.FONT;
	
	const size = props.size;
	const width = 12;
	const height = 12;
	const scale = size ? +(size / height).toFixed() : 1;
 
	return (
		<Svg width={width * scale} height={height * scale} viewBox={`0 0 ${width} ${height}`}>
      <Path d="M12 6C12 6.26529 11.8983 6.52174 11.7081 6.70744C11.5223 6.89757 11.2658 7.00369 11.0004 7.00369H7.00184V11.0007C7.00184 11.266 6.89569 11.5225 6.70549 11.7082C6.51972 11.8939 6.2676 12 6.00221 12C5.73682 12 5.48028 11.8939 5.29451 11.7082C5.10431 11.5225 4.99816 11.266 4.99816 11.0007V7.00369H0.999631C0.734243 7.00369 0.4777 6.89757 0.291928 6.70744C0.106156 6.52174 0 6.26529 0 6C0 5.73471 0.106156 5.48268 0.291928 5.29256C0.4777 5.10685 0.734243 5.00074 0.999631 5.00074H4.99816V1.00368C4.99816 0.738394 5.10431 0.481945 5.29451 0.296242C5.48028 0.106116 5.73682 0 6.00221 0C6.2676 0 6.51972 0.106116 6.70549 0.296242C6.89569 0.481945 7.00184 0.738394 7.00184 1.00368V5.00074H11.0004C11.2658 5.00074 11.5223 5.10685 11.7081 5.29256C11.8983 5.48268 12 5.73471 12 6Z" fill={color}/>
    </Svg>
);
};

export default PlusIcon;
