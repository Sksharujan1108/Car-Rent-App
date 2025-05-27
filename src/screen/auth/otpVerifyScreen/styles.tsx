import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {typography} from '@/theme/typography';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backGround,
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: scale(18),
        marginTop: Platform.OS === 'android' ? scale(40) :  scale(10),
    },
    flex: {
      flex: 1,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
    },
    carLogo: {
      height: scale(38),
      width: scale(38),
    },
    titleStyle: {
      fontSize: FontSize.FONT_24Px,
      color: colors.black,
      flex: 1,
      fontFamily: typography.bold,
    },

    main: {
    //   flex: 0.8,
      justifyContent: 'center',
    },
    textContainer: {
      paddingTop: scale(38),
      marginBottom: scale(12),
    },
    textStyle: {
      color: colors.black,
      fontSize: FontSize.FONT_26Px,
      fontFamily: typography.semiBold,
    },
    textCenter: {
      textAlign: 'center',
    },
    infoText: {
      color: colors.placeholderText,
      fontFamily: typography.regular,
      textAlign: 'center',
    },

    inputContainer: {
    //   rowGap: scale(6),
    
    },
    buttonText: {
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_18Px,
    },
    didntreceiveText: {
      color: colors.placeholderText,
      fontFamily: typography.regular,
    },
  });
