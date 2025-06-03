import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import assets from '@/assets';
import Octicons from 'react-native-vector-icons/Octicons';
import {scale} from '@/theme/scale';
import {colors} from '@/theme/colors';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  hasBack?: boolean;
  title: string;
}

const Header = (props: HeaderProps) => {
  const {hasBack, title} = props;
  const navigation = useNavigation();

  const onPress = () => {
    if (hasBack) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerRowContainer}>
        {hasBack ? (
          <Pressable onPress={onPress} style={styles.borderRound}>
            <MaterialIcons
              name="chevron-left"
              size={scale(28)}
              color={colors.black}
            />
          </Pressable>
        ) : (
          <React.Fragment>
            <Image
              source={assets?.logoBlack}
              resizeMode="contain"
              style={styles.carLogo}
            />
            <Text style={styles.headerTitle}>{title}</Text>
          </React.Fragment>
        )}
      </View>
      {hasBack && <Text style={[styles.headerTitle, styles.t20]}>{title}</Text>}
      {/*  */}
      <View style={styles.flexRow}>
        {hasBack ? (
          <Pressable style={styles.borderRound}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={scale(26)}
              color={colors.black}
            />
          </Pressable>
        ) : (
          <React.Fragment>
            <Pressable style={styles.bell}>
              <Octicons name="bell" size={scale(28)} color={colors?.gray} />
            </Pressable>
            {/*  */}
            <Pressable style={styles.bell}>
              <Image
                source={assets?.person}
                resizeMode="contain"
                style={styles.person}
              />
            </Pressable>
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default Header;
