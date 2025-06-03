import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {typography} from '@/theme/typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(3),
  },
  dollarContainer: {
    borderColor: colors.gray,
    borderWidth: scale(1),
    height: scale(14),
    width: scale(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  price: {
    fontSize: FontSize.FONT_12Px,
    color: colors.black,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(2),
  },

  text: {
    fontSize: FontSize.FONT_16Px,
    color: colors.black,
    fontFamily: typography.bold,
  },
  textBold: {
    fontFamily: typography.semiBold,
  },

  buttonStyles: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(8),
  },
  textStyles: {
    fontSize: FontSize.FONT_12Px,
  },
});
