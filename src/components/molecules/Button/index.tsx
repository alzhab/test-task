import React, {ReactElement, useContext} from 'react';
import {ButtonProps, ButtonStylesInterface} from './interfaces';
import {TouchableOpacity} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {COLORS, Colors} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {AI, ButtonTypes, JC, TextAlign} from '@types';

const Index = (props: ButtonProps): ReactElement => {
	const type = props.type || 'PRIMARY';
	const shadow = {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9
  
	};
	const isUnpressed = props.type === 'UNPRESSED';
 
	const styles: ButtonStylesInterface = {
		borderRadius: props.solid ? 0 : scaleSize(19),
		alignItems: 'center',
		justifyContent: 'center'
	};
	let color = Colors.FONT_LIGHT;
	
	switch (type) {
	case ButtonTypes.PRIMARY:
		color = Colors.FONT_LIGHT;
		styles.backgroundColor = COLORS.PRIMARY;
		break;
	case ButtonTypes.EMPTY:
		styles.backgroundColor = 'transparent';
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT;
		break;
  case ButtonTypes.BORDERED:
    styles.backgroundColor = 'transparent';
    styles.borderWidth = 1;
    styles.borderColor = COLORS.BORDER;
    color = Colors.FONT;
    break;
	}
 
	if (props.full) {
		styles.width = '100%';
	}
 
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={() => props.click()}
			style={[{
				paddingVertical: props.empty ? 0 :scaleSize(22),
				paddingHorizontal: props.empty ? 0 : scaleSize(15)
			}, styles, isUnpressed && shadow, props.styles]}>
			<Flex full ai={AI.center} jc={JC.center}>
				{props.title && <Text
					color={props.color || color}
					size={props.size}
					family={props.family}
					textAlign={TextAlign.center}
				>{props.title}</Text>}
    
				{props.children ? props.children : null}
			</Flex>
		</TouchableOpacity>
	);
};

export default Index;
