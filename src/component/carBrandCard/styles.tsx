import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/font-size';
import { scale } from '@/theme/scale';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = (
  isHorizontal: boolean | undefined,
  isSelected: boolean | undefined,
) =>
  StyleSheet.create({
    brandContainer: {
      marginRight: isHorizontal ? scale(18) : scale(30),
      alignItems: 'center',
      flexDirection: isHorizontal ? 'row' : 'column',
      columnGap: isHorizontal ? scale(4) : 0,
      backgroundColor: isSelected ? colors.bgTab : colors.backGround,
      paddingHorizontal: scale(3),
      paddingVertical: scale(5),
      borderRadius: scale(30),
    },
    brand: {
      backgroundColor: colors.black,
      borderRadius: scale(100),
      height: isHorizontal ? scale(30) : scale(40),
      width: isHorizontal ? scale(32) : scale(40),
      alignItems: 'center',
      justifyContent: 'center',
    },
    brandText: {
      color: isSelected ? colors.white : colors.placeholderText,
      fontSize: isHorizontal ? FontSize.FONT_14Px : FontSize.FONT_12Px,
      fontFamily: isHorizontal ? typography.semiBold : typography.regular,
      marginRight: isHorizontal ? scale(6) : 0,
    },
    brandImage: {
      height: isHorizontal ? scale(18) : scale(28),
      width: isHorizontal ? scale(18) : scale(28),
      textAlign: 'center',
    },
  });
