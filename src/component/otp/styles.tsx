import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/font-size';
import { scale } from '@/theme/scale';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: scale(12),
    },
    input: {
        width: scale(50),
        height: scale(55),
        marginHorizontal: scale(4),
        borderWidth: 1,
        borderColor: colors?.btnBorder,
        borderRadius: scale(4),
        backgroundColor: colors?.white,

        textAlign: 'center',
        fontSize: FontSize.FONT_20Px,
        fontFamily: typography?.regular,
    },
});
