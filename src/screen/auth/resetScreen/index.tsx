import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {styles} from './styles';
import assets from '@/assets';
import PrimaryButton from '@/component/primaryButton';
import TextInputComponent from '@/component/TextInput';
import {renderMarginTop} from '@/utils/ui-utils';
import React, {useState} from 'react';
import {AuthStackScreenProps} from '@/navigation/navigation-model/authStackModel/authModel';

const ResetScreen = ({navigation}: AuthStackScreenProps<'ResetScreen'>) => {
  const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');
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
                Reset your password
              </Text>
              {renderMarginTop(12)}
              <Text style={styles.infoText}>
                Enter the email address associated with your account and
              </Text>
              <Text style={styles.infoText}>
                we'll send you a link to reset your password.
              </Text>
            </View>
            {/*  */}
            <View style={styles.inputContainer}>
              <TextInputComponent
                placeholder={'Email'}
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
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
              onPress={() => navigation.navigate('LoginScreen')}
              style={[styles.dontHaveText, styles.textCenter]}>
              Return to sign in
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.footerContainer}>
          <Text
            onPress={() => {
              navigation.goBack();
            }}
            style={[styles.dontHaveText, styles.textCenter]}>
            Create a New account{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetScreen;
