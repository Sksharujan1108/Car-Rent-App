import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {JSX} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from './styles';
import {scale} from '@/theme/scale';
import {renderMarginBottom} from '@/utils/ui-utils';
import {colors} from '@/theme/colors';

interface ICarComponentProps {
  id?: number;
  carImage?: ImageSourcePropType | undefined;
  carName?: string | undefined;
  rating?: string | number;
  location?: string | undefined;
  carSeats?: string | undefined;
  price?: string | number;
  bottomActions?: JSX.Element;
}

const CarListCard = (props: ICarComponentProps) => {
  const {carImage, carName, rating, location, carSeats, price, bottomActions} =
    props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Pressable style={styles.favContainer}>
        <MaterialCommunityIcons name={'cards-heart-outline'} size={scale(18)} />
      </Pressable>
      {/*  */}
      <View style={styles.carBackground}>
        <Image source={carImage} resizeMode="contain" style={styles.carImage} />
      </View>
      {/*  */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{carName}</Text>
        {renderMarginBottom(4)}
        <View style={styles.flex}>
          <Text style={styles.title}>{rating}</Text>
          <MaterialIcons name="star" size={scale(20)} color={colors.star} />
        </View>
        {/*  */}
        {renderMarginBottom(4)}
        <View style={[styles.flex]}>
          <MaterialIcons
            name="location-pin"
            size={scale(16)}
            color={colors.gray}
          />
          <Text style={styles.text}>{location}</Text>
        </View>
        {/*  */}
        {renderMarginBottom(6)}
        <View style={styles.footerWrapper}>
          <View style={[styles.flex]}>
            <MaterialCommunityIcons
              name="sofa-single-outline"
              size={scale(16)}
              color={colors.gray}
            />
            <Text style={[styles.text, styles.textBold]}>{carSeats}</Text>
          </View>
          <View style={[styles.flex]}>
            <Pressable style={styles.dollarContainer}>
              <Fontisto name="dollar" size={scale(8)} color={colors.gray} />
            </Pressable>
            <Text style={[styles.text, styles.textBold]}>${price}/Day</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarListCard;
