import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { AuthStackScreenProps } from '@/navigation/navigation-model/authStackModel/authModel';
import { styles } from './styles';
import assets from '@/assets';
import { renderMarginTop } from '@/utils/ui-utils';
import PrimaryButton from '@/component/primaryButton';
import OtpComponent from '@/component/otp';

const OtpVerifyScreen = ({navigation}: AuthStackScreenProps<'OtpVerifyScreen'>) => {
  return (
    <SafeAreaView style={styles.container}>
      {/*  */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.mainContainer}>
        {/*  */}
        <View style={styles.flex}>
          <View style={styles.flexRow}>
            <Image source={assets?.logoBlack} style={styles.carLogo} />
            <Text style={styles.titleStyle}>Qent</Text>
          </View>
          {/*  */}
          <View style={styles.main}>
            <View style={styles.textContainer}>
              <Text style={[styles.textStyle, styles.textCenter]}>
                Enter verifaction code
              </Text>
              {renderMarginTop(12)}
              <Text style={styles.infoText}>
                we have send a code to : +100******1234
              </Text>
            </View>
            {/*  */}
            {renderMarginTop(12)}
            <View style={styles.inputContainer}>
                <OtpComponent
                    onOTPChange={(e) => {
                        console.log('otp', e);
                    }} // Placeholder for OTP input handler
                />
            </View>
            {renderMarginTop(28)}
            <PrimaryButton
              onPress={() => {
                navigation.navigate('VerifyScreen');
              }}
              label="Continue"
              textStyle={styles.buttonText}
            />
            {renderMarginTop(28)}
            <Text
              style={[styles.didntreceiveText, styles.textCenter]}>
              Didn't receive the code ? {'\t'}
              <Text>Resend</Text>
            </Text>
          </View>
        </View>x
      </View>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;
