import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {typography} from '@/theme/typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  filterView: {
    flex: 0.85,
    backgroundColor: colors.white,
    borderTopRightRadius: scale(15),
    borderTopLeftRadius: scale(15),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(12),
    paddingHorizontal: scale(18),
    borderBottomColor: colors.btnBorder,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: FontSize.FONT_16Px,
    color: colors.black,
    fontFamily: typography.bold,
  },
  _f08: {
    flex: 0.08,
  },

  scrollView: {
    flexGrow: 1,
    paddingBottom: scale(20),
  },

  filterContainer: {
    flex: 1,
    paddingHorizontal: scale(18),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: scale(12),
  },
  filterTypeText: {
    fontSize: FontSize.FONT_16Px,
    fontFamily: typography.semiBold,
  },
  slider: {
    width: '100%',
    height: scale(40),
  },

  inputContainer: {
    width: '48%',
    // backgroundColor: 'red',
  },
  tabContainerStyle: {
    borderWidth: 0,
  },
  tabStyle: {
    borderWidth: 1,
    borderColor: colors.btnBorder,
  },
  tabTextStyle: {
    color: colors.placeholderText,
    fontFamily: typography.regular,
    fontSize: FontSize.FONT_13Px,
  },
  placeHolder: {
    color: colors.placeholderText,
  },
  sitingCapTab: {
    paddingHorizontal: scale(32),
  },

  clearAll: {
    color: colors.black,
    fontSize: FontSize.FONT_12Px,
    fontFamily: typography.regular,
  },
  btnContainerStyle: {
    paddingVertical: scale(10),
      paddingHorizontal: scale(12),
      backgroundColor: colors.black,
  },
  btnTextStyle: {
    fontSize: FontSize.FONT_12Px,
  },
});
