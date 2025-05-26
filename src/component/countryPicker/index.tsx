import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BootmSheet from '../bottomSheet';
import {styles} from './styles';
import {ICountryProps} from './props';

const CountryComponent = (props: ICountryProps) => {
  const {onPress} = props;
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => {
          setIsVisible(!isVisible);
        }}>
        <Text style={styles.text}>
          {selectedCountry?.flag}
          {'\t'}
          {selectedCountry?.name}
        </Text>
        {/*  */}
        <BootmSheet
          visible={isVisible}
          setVisible={setIsVisible}
        >
          <View style={styles.bottomSheetContainer}>
            <FlatList
              data={countries}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.code}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.itemWrapper}
                    activeOpacity={0.6}
                    onPress={() => {
                      setSelectedCountry(item);
                      setIsVisible(false);
                      onPress?.(item); // Call the onPress callback with the selected item
                    }}>
                    <Text style={styles.text}>
                      {item?.flag} {item?.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </BootmSheet>
      </Pressable>
    </View>
  );
};

export default CountryComponent;

const countries = [
  {code: 'IN', name: 'India', flag: '🇮🇳', ph: '+91'},
  {code: 'US', name: 'United States', flag: '🇺🇸', ph: '+1'},
  {code: 'GB', name: 'United Kingdom', flag: '🇬🇧', ph: '+44'},
  {code: 'FR', name: 'France', flag: '🇫🇷', ph: '+33'},
  {code: 'DE', name: 'Germany', flag: '🇩🇪', ph: '+49'},
  {code: 'JP', name: 'Japan', flag: '🇯🇵', ph: '+81'},
  {code: 'CN', name: 'China', flag: '🇨🇳', ph: '+86'},
  {code: 'CA', name: 'Canada', flag: '🇨🇦', ph: '+1'},
];
