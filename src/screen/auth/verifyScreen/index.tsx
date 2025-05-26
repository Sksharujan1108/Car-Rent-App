import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import assets from '@/assets';
import PrimaryButton from '@/component/primaryButton';
import TextInputComponent from '@/component/TextInput';
import {renderMarginTop} from '@/utils/ui-utils';
import React, {useState} from 'react';
import {AuthStackScreenProps} from '@/navigation/navigation-model/authStackModel/authModel';
import { styles } from './styles';
import CountryComponent from '@/component/countryPicker';

const VerifyScreen = ({navigation}: AuthStackScreenProps<'VerifyScreen'>) => {
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
                Verify your phonenumber
              </Text>
              {renderMarginTop(12)}
              <Text style={styles.infoText}>
                we have sent you an SMS with a code to number
              </Text>
            </View>
            {/*  */}
            <View style={styles.inputContainer}>
              <CountryComponent/>
              {/*  */}
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
                navigation.navigate('ResetScreen');
              }}
              label="Continue"
              textStyle={styles.buttonText}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;
