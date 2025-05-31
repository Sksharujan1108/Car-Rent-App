import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import assets from '@/assets';
import Octicons from 'react-native-vector-icons/Octicons';
import {scale} from '@/theme/scale';
import {colors} from '@/theme/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerRowContainer}>
        <Image
          source={assets?.logoBlack}
          resizeMode="contain"
          style={styles.carLogo}
        />
        <Text style={styles.headerTitle}>Qent</Text>
      </View>
      {/*  */}
      <View style={styles.flexRow}>
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
      </View>
    </View>
  );
};

export default Header;
