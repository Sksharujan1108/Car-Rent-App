import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import { renderMarginTop } from '@/utils/ui-utils';
import assets from '@/assets';
import { styles } from './styles';

interface ICarProps {
  text: string;
  onPress?: () => void;
  isSelected?: boolean;
  isHorizontal?: boolean;
}

const CardBrandCard = ({ text, onPress, isSelected = false, isHorizontal = false }: ICarProps) => {
  const styleSheet = styles(isHorizontal, isSelected);

  return (
    <Pressable style={styleSheet.brandContainer} onPress={onPress}>
      <View style={styleSheet.brand}>
        <Image resizeMode="contain" source={assets?.tesla} style={styleSheet.brandImage} />
      </View>
      {renderMarginTop(4)}
      <Text style={styleSheet.brandText}>{text}</Text>
    </Pressable>
  );
};

export default CardBrandCard;
