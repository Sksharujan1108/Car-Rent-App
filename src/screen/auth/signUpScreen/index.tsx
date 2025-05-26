/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import assets from '@/assets';
import TextInputComponent from '@/component/TextInput';
import CheckBoxComponent from '@/component/checkBox';
import PrimaryButton from '@/component/primaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthStackScreenProps} from '@/navigation/navigation-model/authStackModel/authModel';

const SignUpScreen = ({navigation}: AuthStackScreenProps<'SignUpScreen'>) => {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [formData, setFormData] = useState({
    user: {
      fullName: '',
      email: '',
      password: '',
      country: '',
    },
    error: {
      fullNameError: '',
      emailError: '',
      passwordError: '',
      countryError: '',
    },
  });

  // on Change Text ----
  const onChangeTextField = useCallback((name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      user: {
        ...prev.user,
        [name]: value,
      },
    }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={[styles.root]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVisible ? 0 : -insets.top}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.mainWrapper}>
            <View style={styles.headerRowContainer}>
              <Image
                source={assets?.logoBlack}
                resizeMode="contain"
                style={styles.carLogo}
              />
              <Text style={styles.headerTitle}>Qent</Text>
            </View>
            {/*  */}
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Sign Up</Text>
            </View>
            {/*  */}
            <View style={styles.inputWrapper}>
              <TextInputComponent
                placeholder="Full Name"
                value={formData?.user?.fullName}
                onChangeText={text => {
                  console.log('fullName', text);
                  onChangeTextField('fullName', text);
                }}
              />
              <TextInputComponent
                placeholder="Email/Phone Number"
                value={formData?.user?.email}
                onChangeText={text => {
                  console.log('text', text);
                  onChangeTextField('email', text);
                }}
              />
              <TextInputComponent
                placeholder="Password"
                value={formData?.user?.password}
                secureTextEntry
                onChangeText={text => {
                  console.log('password', text);
                  onChangeTextField('password', text);
                }}
              />
              <TextInputComponent
                placeholder="Country"
                value={formData?.user?.country}
                onChangeText={text => {
                  console.log('country', text);
                  onChangeTextField('country', text);
                }}
              />
            </View>
            {/*  */}
            <View style={styles.mainFlexRowWrapper}>
              <View style={styles.flexRowWrapper}>
                <CheckBoxComponent
                  onPress={e => {
                    console.log('checkbox pressed', e);
                  }}
                  isChecked={false}
                />
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </View>
              <Pressable>
                <Text style={styles.rememberMeText}>Forgot Password?</Text>
              </Pressable>
            </View>
            {/*  */}
            <View style={styles.buttonWrapper}>
              {/* Login */}
              <PrimaryButton
                label="Login"
                onPress={() => {
                  console.log('Login button pressed');
                }}
              />
              {/* Sign Up */}
              <PrimaryButton
                containerStyle={styles.signUpButton}
                textStyle={styles.signUpText}
                label="Sign Up"
                onPress={() => {
                  console.log('Login button pressed');
                }}
              />
            </View>
            {/*  */}
            <View style={styles.borderWrapper}>
              <View style={styles.borderLine} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.borderLine} />
            </View>
            {/*  */}
            <View style={styles.buttonWrapper}>
              {/* Login */}
              <PrimaryButton
                containerStyle={styles.payButton}
                textStyle={styles.signUpText}
                child={<MaterialIcons name="apple" size={2} color="#000" />}
                label="Apple Pay"
                onPress={() => {
                  console.log('Login button pressed');
                }}
              />
              {/* Sign Up */}
              <PrimaryButton
                containerStyle={styles.payButton}
                textStyle={styles.signUpText}
                child={<AntDesign name="google" size={24} color="#000" />}
                label="Google Pay"
                onPress={() => {
                  console.log('Login button pressed');
                }}
              />
            </View>
          </View>
          {/*  */}
          <View style={styles.footerWrapper}>
            <Text style={styles.alreadyHaveText}>
              Already have an account ? {''}
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
