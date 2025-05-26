/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import { useSignin } from './login.hook';

const LoginScreen = ({navigation}: AuthStackScreenProps<'LoginScreen'>) => {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const {isSecure, setIsSecure} = useSignin();

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
      email: '',
      password: '',
    },
    error: {
      emailError: '',
      passwordError: '',
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
        {/*  */}
        <StatusBar
          barStyle="dark-content"
          hidden={false}
        />
        {/*  */}
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: 10}}
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
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.title}>Ready to hit the road.</Text>
            </View>
            {/*  */}
            <View style={styles.inputWrapper}>
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
                isSecure
                secureTextEntry={!isSecure}
                onChangeText={text => {
                  console.log('password', text);
                  onChangeTextField('password', text);
                }}
                onSecurePress={() => {
                  setIsSecure(!isSecure);
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
              <Pressable
                onPress={() => {
                  navigation.navigate('ResetScreen');
                }}
              >
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
                child={<MaterialIcons name="apple" size={24} color="#000" />}
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
            <Text style={styles.dontHaveText}>
              Don't have an account ? {''}
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('SignUpScreen');
              }}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
