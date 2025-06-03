import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {typography} from '@/theme/typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  typeView: {
    paddingVertical: scale(12),
  },
  filterTypeText: {
    fontSize: FontSize.FONT_16Px,
    fontFamily: typography.semiBold,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.btnBorder,
    borderRadius: scale(30),
    marginTop: scale(10),
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    flex: 1,
  },
  tab: {
    paddingHorizontal: scale(18),
    paddingVertical: scale(12),
    borderRadius: scale(30),
  },
  activeTab: {
    backgroundColor: colors.black,
  },
  tabText: {
    fontSize: FontSize.FONT_14Px,
    color: colors.black,
    fontFamily: typography.medium,
  },
  tabTextActive: {
    color: colors.white,
  },
});
