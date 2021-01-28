import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const LogoIcon = (props: IconProps): ReactElement => {
	const color = props.color || COLORS.FONT;
	
	const size = props.size;
	const width = 11;
	const height = 14;
	const scale = size ? +(size / height).toFixed() : 1;
 
	return (
		<Svg width={width * scale} height={height * scale} viewBox={`0 0 ${width} ${height}`}>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.57585 1.29996C6.97108 1.01717 6.32016 0.868348 5.66144 0.862268C4.99829 0.851148 4.33998 0.986269 3.72659 1.25941C3.1132 1.53255 2.55754 1.93799 2.09345 2.45106C1.15117 3.48438 0.617832 4.87465 0.606625 6.3268C0.595419 7.77895 1.10723 9.17868 2.03343 10.2289L5.07455 13.6376C5.13576 13.7071 5.20917 13.7628 5.29047 13.8012C5.37178 13.8396 5.45935 13.8601 5.54806 13.8615C5.63664 13.8636 5.72465 13.8454 5.80626 13.8081C5.88788 13.7708 5.96126 13.7151 6.02157 13.6448L9.11604 10.2867C10.0592 9.25431 10.5938 7.86456 10.6062 6.4124C10.6187 4.96025 10.1081 3.56 9.18274 2.50883C8.72698 1.99378 8.18062 1.58275 7.57585 1.29996ZM5.55453 8.23981C6.44602 8.23981 7.16872 7.45722 7.16872 6.49185C7.16872 5.52648 6.44602 4.7439 5.55453 4.7439C4.66303 4.7439 3.94033 5.52648 3.94033 6.49185C3.94033 7.45722 4.66303 8.23981 5.55453 8.23981Z" fill={color}/>
    </Svg>
	);
};

export default LogoIcon;
