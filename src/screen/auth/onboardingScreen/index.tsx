import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import assets from '@/assets';
import {styles} from './styles';
import PrimaryButton from '@/component/primaryButton';
import { AuthStackScreenProps } from '@/navigation/navigation-model/authStackModel/authModel';

const OnBoardingScreen = ({navigation}: AuthStackScreenProps<'OnBoardingScreen'>) => {

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={assets?.whiteCarBg}
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
            <Text style={styles.title}>Welcome To</Text>
            <Text style={styles.title}>Qent</Text>
          </View>
        </SafeAreaView>
        {/* Button */}
        <PrimaryButton
          containerStyle={styles.buttonStyle}
          label="Get Started"
          onPress={() => {
            navigation.navigate('OnBoardingTwoScreen');
          }}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreen;
