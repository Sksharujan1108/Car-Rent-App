import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {typography} from '@/theme/typography';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.backGround,
  },
  mainWrapper: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? scale(30) : scale(0),
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: scale(40),
  },

  showCase: {
    paddingHorizontal: scale(18),
    rowGap: scale(12),
  },
  text: {
    fontSize: FontSize.FONT_16Px,
    color: colors.black,
    fontFamily: typography.semiBold,
  },

  showCaseCars: {
    flex: 1,
    marginTop: scale(24),
    padding: scale(18),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    backgroundColor: colors?.white,
  },
  flatListColumnWrapper: {
    justifyContent: 'space-between',
  },
});
