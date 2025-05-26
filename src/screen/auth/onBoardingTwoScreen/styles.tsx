import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {scale} from '@/theme/scale';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  overlayBgContainer: {
    // height: '80%',
    flex: 1,
    paddingHorizontal: scale(18),
    justifyContent: 'space-between',
  },
  safeareaViewContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? scale(0) : scale(20),
  },
  logoContainer: {
    alignSelf: 'flex-start',
    marginTop: scale(20),
    padding: scale(12),
    backgroundColor: colors?.white,
    borderRadius: 100,
  },
  logo: {
    width: scale(36),
    height: scale(36),
  },
  textContainer: {
    marginTop: scale(10),
  },
  title: {
    fontSize: FontSize.FONT_30Px,
    color: colors?.white,
    fontWeight: 'bold',
  },
  infoTextContainer: {
    marginBottom: scale(40),
  },
  infoText: {
    fontSize: FontSize.FONT_13Px,
    color: colors?.white,
    fontWeight: '400',
  },

  buttonStyle: {
    marginBottom: scale(32),
  },
});
