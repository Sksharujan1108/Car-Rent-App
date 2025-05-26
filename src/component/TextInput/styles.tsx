import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/font-size';
import { scale } from '@/theme/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(12),
        padding: scale(10),
        paddingVertical: scale(2),
        borderWidth: 2,
        borderColor: colors?.border,
        borderRadius: scale(10),
        backgroundColor: colors?.white,
    },
    input: {
        flex: 0.95,
        paddingVertical: scale(12),
        fontSize: FontSize?.FONT_14Px,
        fontWeight: '400',
        color: colors?.black,
        // backgroundColor: 'red',
    },
    eyeStyle: {
        width: scale(22),
        height: scale(22),
    },
});
