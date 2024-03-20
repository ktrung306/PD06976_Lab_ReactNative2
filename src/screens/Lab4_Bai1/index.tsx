import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { launchCamera, ImagePickerResponse, OptionsCommon, CameraOptions } from "react-native-image-picker";
import { styles } from "./styles";

const Lab4_Bai1 = () => {
  const [Images, setImages] = useState<string | undefined>(
    "https://upload.wikimedia.org/2048px-Default_pfp.svg.png"
  );

  const onOpenCamera = async () => {
    const commonOptions: OptionsCommon = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
    };

    const cameraOptions: CameraOptions = {
      cameraType: 'front',
      saveToPhotos: true,
      ...commonOptions,
    };

    try {
      const response: ImagePickerResponse = await launchCamera(cameraOptions);
      if (response.assets && response.assets.length > 0) {
        setImages(response.assets[0].uri); // Chọn ảnh đầu tiên từ danh sách assets
      } else if (response.errorMessage) {
        Alert.alert('Có lỗi xãy ra', response.errorMessage);
      }
    } catch (error) {
      console.log('Lỗi khi chụp ảnh:', error);
      Alert.alert('Có lỗi xãy ra', 'Không thể chụp ảnh.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpenCamera}>
        <Image source={{uri: Images}} style={styles.avatar}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onOpenCamera}>
        <Text style={styles.buttonText}>Chụp hình</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lab4_Bai1;
