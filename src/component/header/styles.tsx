import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(18),
    paddingVertical: scale(14),
    borderBottomWidth: 1,
    borderBottomColor: colors?.border,
  },
  headerRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(12),
  },
  borderRound: {
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(40),
    width: scale(40),
    borderRadius: scale(100),
  },
  carLogo: {
    width: scale(40),
    height: scale(40),
  },
  headerTitle: {
    fontSize: FontSize.FONT_24Px,
    fontWeight: '600',
    color: colors?.black,
  },
  t20: {
    fontSize: FontSize.FONT_20Px,
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(14),
  },
  bell: {
    width: scale(38),
    height: scale(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(100),
    borderWidth: 1,
    borderColor: colors?.border,
  },
  person: {
    width: '100%',
    height: '100%',
  },
});
