import { colors } from '@/theme/colors';
import { scale } from '@/theme/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: scale(22),
        height: scale(22),
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(4),
        backgroundColor: colors?.checkBoxBg,
    },
    checkIcon: {
    },
});
