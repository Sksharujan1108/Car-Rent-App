import { Pressable, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../primaryButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { styles } from './styles';
import { scale } from '@/theme/scale';
import { colors } from '@/theme/colors';



interface CarCardActionBottomProps {
    onPress: (item: any) => void;
    price?: number;
}

const CarCardActionBottom = (props: CarCardActionBottomProps) => {
    const { onPress, price } = props;
  return (
    <View style={[styles.flex, styles.priceContainer]}>
      <View style={[styles.flex]}>
        <Pressable style={styles.dollarContainer}>
          <Fontisto name="dollar" size={scale(8)} color={colors.gray} />
        </Pressable>
        <Text style={[styles.text, styles.textBold, styles.price]}>
          ${price}/Day
        </Text>
      </View>
      {/*  */}
      <PrimaryButton
        label="Book now"
        containerStyle={styles.buttonStyles}
        textStyle={styles.textStyles}
        onPress={onPress}
      />
    </View>
  );
};

export default CarCardActionBottom;
