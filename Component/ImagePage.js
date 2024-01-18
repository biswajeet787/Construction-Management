import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagePage = ({ navigation }) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false); // Hide the image after 4 seconds
      navigation.navigate('LoaderPage'); // Navigate to LoaderPage after hiding the image
    }, 4000); // 4000 milliseconds = 4 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      {showImage ? (
        <Image
        source={require('../image/DLB.png')} // Adjust the path as per your project structure
        style={styles.image}
        resizeMode="contain"
      />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5b0888',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ImagePage;