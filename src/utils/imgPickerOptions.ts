import ImagePicker, {ImagePickerCustomButtonOptions, ImagePickerOptions} from 'react-native-image-picker';

export const getOptions = (
	title = 'Select Image',
) => {
	return {
		title,
		storageOptions: {
			skipBackup: true,
			path: 'images',
		},
	};
};

export const pickImage = (cb: (uri: string) => void, options: ImagePickerOptions = getOptions()) => {
	ImagePicker.showImagePicker(options, (response) => {
		console.log('Response = ', response);
  
		if (response.didCancel) {
			console.log('User cancelled image picker');
		} else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
		} else if (response.customButton) {
			console.log('User tapped custom button: ', response.customButton);
		} else {
			const source = { uri: response.uri };
   
			// You can also display the image using data:
			// const source = { uri: 'data:image/jpeg;base64,' + response.data };
   
			cb(response.uri)
		}
	});
};

