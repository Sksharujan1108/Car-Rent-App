import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '@/theme/font-size';
import {typography} from '@/theme/typography';

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: scale(15),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: scale(16),
  },
  favContainer: {
    position: 'absolute',
    right: scale(4),
    top: scale(4),
    zIndex: 999,
    width: scale(30),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  carBackground: {
    width: '100%',
    height: scale(120),
    borderTopRightRadius: scale(16),
    borderTopLeftRadius: scale(16),
    backgroundColor: colors.carBg,
  },
  carImage: {
    width: '100%',
    height: '100%',
  },

  textContainer: {
    padding: scale(5),
  },
  title: {
    fontSize: FontSize.FONT_13Px,
    color: colors.placeholderText,
    fontFamily: typography.regular,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(2),
  },

  text: {
    fontSize: FontSize.FONT_13Px,
    color: colors.placeholderText,
    fontFamily: typography.regular,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scale(5),
    rowGap: scale(10),
  },

  priceContainer: {
    //   paddingVertical: scale(4),
    alignItems: 'center',
    columnGap: scale(8),
  },
  textBold: {
    fontFamily: typography.semiBold,
  },
  dollarContainer: {
    width: scale(14),
    height: scale(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: scale(1),
    borderColor: colors.gray,
    borderRadius: 100,
  },
});
