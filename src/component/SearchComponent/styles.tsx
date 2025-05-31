import {StyleSheet} from 'react-native';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(14),
      paddingVertical: scale(15),
      paddingHorizontal: scale(18),
      backgroundColor: colors.backGround,
    },
    inputContainer: {
      flex: 1,
      marginTop: 0,
      paddingVertical: 0,
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
    wh: {
      backgroundColor: colors.white,
    },
  });
