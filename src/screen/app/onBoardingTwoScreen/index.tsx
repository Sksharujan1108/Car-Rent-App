import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import assets from '@/assets';
import {styles} from './styles';
import PrimaryButton from '@/component/primaryButton';

const OnBoardingTwoScreen = () => {
    // const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={assets?.carBg}
      resizeMode="cover">
      <ImageBackground
        style={styles.overlayBgContainer}
        source={assets?.overlayBg}
        resizeMode="cover">
        <SafeAreaView
          style={styles.safeareaViewContainer}
        >
          <View style={styles.logoContainer}>
            <Image
              source={assets?.logo}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          {/* Text Container */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Lets Start</Text>
            <Text style={styles.title}>A New Experience</Text>
            <Text style={styles.title}>With Car rental</Text>
          </View>
        </SafeAreaView>
        {/* Button */}
        <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Discover your next advenure with Qent. we're here to</Text>
            <Text style={styles.infoText}>provide you with a seamless car rental experience.</Text>
            <Text style={styles.infoText}>Let's get started on your journey.</Text>
        </View>
        <PrimaryButton
          containerStyle={styles.buttonStyle}
          label="Get Started"
          onPress={() => {}}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingTwoScreen;
