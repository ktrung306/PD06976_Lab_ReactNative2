import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { launchImageLibrary, ImagePickerResponse, OptionsCommon, ImageLibraryOptions } from "react-native-image-picker";
import { styles } from "./styles";

const Lab4_Bai2 = () => {
  const [Images, setImages] = useState<string | undefined>(
    "https://upload.wikimedia.org/2048px-Default_pfp.svg.png"
  );

  const onOpenLibrary = async () => {
    const commonOptions: OptionsCommon = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
    };

    const libraryOptions: ImageLibraryOptions = {
      selectionLimit: 1, // Chỉ chọn 1 ảnh từ thư viện
      ...commonOptions,
    };

    const response: ImagePickerResponse = await launchImageLibrary(libraryOptions);
    if (!response.didCancel) {
      if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
        setImages(imageUri);
      }
    } else {
      Alert.alert('Thông báo', 'Bạn đã hủy việc chọn ảnh.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpenLibrary}>
        <Image source={{ uri: Images }} style={styles.avatar} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onOpenLibrary}>
        <Text style={styles.buttonText}>Chụp ảnh từ thư viện</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lab4_Bai2;
