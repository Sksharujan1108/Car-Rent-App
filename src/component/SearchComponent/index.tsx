import React from 'react';
import {Pressable, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import TextInputComponent from '../TextInput';
import {styles} from './styles';

interface ISearchProps {
  onFilterPress?: () => void;
  onPress?: () => void;
  value?: string | undefined;
  placeholder?: string;
  onChangeText?: (value: string) => void;
}

const SearchComponent = (props: ISearchProps) => {
  const {onFilterPress, onPress, value, onChangeText} = props;
  return (
    <View style={[styles.flexRow]}>
      <TextInputComponent
        leftAction={
          <AntDesign color={colors.gray} name="search1" size={scale(22)} />
        }
        containerStyle={styles.inputContainer}
        placeholder="Search your dream car....."
        onPress={onPress}
        value={value}
        onChangeText={onChangeText}
      />
      <Pressable
        onPress={onFilterPress}
        style={[styles.borderRound, styles.wh]}>
        <MaterialCommunityIcons
          name="filter-outline"
          size={scale(26)}
          color={colors.gray}
        />
      </Pressable>
    </View>
  );
};

export default SearchComponent;
