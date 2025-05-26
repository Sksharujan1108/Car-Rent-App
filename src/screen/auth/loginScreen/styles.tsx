import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/font-size';
import { scale } from '@/theme/scale';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.backGround,
    },
    root : {
        flex: 1,
    },
    mainWrapper: {
        // flex: 1,
                marginTop: Platform.OS === 'android' ? scale(30) :  scale(5),
        paddingHorizontal: scale(18),
    },
    headerRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: scale(12),
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
    titleWrapper: {
        marginTop: scale(40),
    },
    title: {
        fontSize: FontSize.FONT_28Px,
        fontWeight: '500',
        color: colors?.black,
    },

    inputWrapper: {
        rowGap: scale(8),
    },

    mainFlexRowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(14),
    },
    flexRowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    rememberMeText: {
        fontSize: FontSize.FONT_14Px,
        color: colors?.placeholderText,
        fontWeight: '500',
    },

    buttonWrapper: {
        marginTop: scale(20),
        rowGap: scale(14),
    },
    signUpButton: {
        borderWidth: 1,
        borderColor: colors?.button,
        backgroundColor: colors?.outlineButtonBg,
    },
    signUpText: {
        color: colors?.black,
    },

    borderWrapper: {
        marginTop: scale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: scale(12),
    },
    borderLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors?.border,
    },
    orText: {
        width: scale(20),
        fontSize: FontSize.FONT_14Px,
        color: colors?.placeholderText,
        fontWeight: '500',
        textAlign: 'center',
    },

    payButton: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: scale(5),
        borderWidth: 1,
        borderColor: colors?.button,
        backgroundColor: colors?.outlineButtonBg,
    },

    footerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(10),
        alignItems: 'center',
    },
    dontHaveText: {
        fontSize: FontSize.FONT_14Px,
        color: colors?.placeholderText,
        fontWeight: '400',
    },
    signUp: {
        fontSize: FontSize.FONT_14Px,
        color: colors?.placeholderText,
        fontWeight: '400',
    },
});
