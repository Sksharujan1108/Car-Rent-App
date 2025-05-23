import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/font-size';
import { scale } from '@/theme/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingVertical: scale(14),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors?.button,
        borderRadius: scale(30),
    },
    label: {
        fontSize: FontSize?.FONT_16Px,
        fontWeight: '500',
        color: colors?.white,
    },
});
