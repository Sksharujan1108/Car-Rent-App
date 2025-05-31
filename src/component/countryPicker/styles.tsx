import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/font-size';
import { scale } from '@/theme/scale';
import { typography } from '@/theme/typography';
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
    text: {
        flex: 1,
        paddingVertical: scale(12),
        fontSize: FontSize?.FONT_16Px,
        fontWeight: '400',
        color: colors?.black,
        fontFamily: typography?.regular,
    },

    bottomSheetContainer: {
        flex: 0.4,
        padding: scale(18),
        backgroundColor: colors?.white,
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20),
    },
    itemWrapper: {
        paddingVertical: scale(4),
    },
});
