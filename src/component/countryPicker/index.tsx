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
          {' '}
          {selectedCountry?.ph}
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
                    }}
                  >
                    <Text style={styles.text}>
                      {item?.flag} {' '} {item?.ph}
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
  { code: 'AF', name: 'Afghanistan', flag: '🇦🇫', ph: '+93' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱', ph: '+355' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿', ph: '+213' },
  { code: 'AS', name: 'American Samoa', flag: '🇦🇸', ph: '+1-684' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩', ph: '+376' },
  { code: 'AO', name: 'Angola', flag: '🇦🇴', ph: '+244' },
  { code: 'AI', name: 'Anguilla', flag: '🇦🇮', ph: '+1-264' },
  { code: 'AQ', name: 'Antarctica', flag: '🇦🇶', ph: '+672' },
  { code: 'AG', name: 'Antigua and Barbuda', flag: '🇦🇬', ph: '+1-268' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', ph: '+54' },
  { code: 'AM', name: 'Armenia', flag: '🇦🇲', ph: '+374' },
  { code: 'AW', name: 'Aruba', flag: '🇦🇼', ph: '+297' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', ph: '+61' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹', ph: '+43' },
  { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿', ph: '+994' },
  { code: 'BS', name: 'Bahamas', flag: '🇧🇸', ph: '+1-242' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭', ph: '+973' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', ph: '+880' },
  { code: 'BB', name: 'Barbados', flag: '🇧🇧', ph: '+1-246' },
  { code: 'BY', name: 'Belarus', flag: '🇧🇾', ph: '+375' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪', ph: '+32' },
  { code: 'BZ', name: 'Belize', flag: '🇧🇿', ph: '+501' },
  { code: 'BJ', name: 'Benin', flag: '🇧🇯', ph: '+229' },
  { code: 'BM', name: 'Bermuda', flag: '🇧🇲', ph: '+1-441' },
  { code: 'BT', name: 'Bhutan', flag: '🇧🇹', ph: '+975' },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴', ph: '+591' },
  { code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦', ph: '+387' },
  { code: 'BW', name: 'Botswana', flag: '🇧🇼', ph: '+267' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', ph: '+55' },
  { code: 'IO', name: 'British Indian Ocean Territory', flag: '🇮🇴', ph: '+246' },
  { code: 'VG', name: 'British Virgin Islands', flag: '🇻🇬', ph: '+1-284' },
  { code: 'BN', name: 'Brunei', flag: '🇧🇳', ph: '+673' },
  { code: 'BG', name: 'Bulgaria', flag: '🇧🇬', ph: '+359' },
  { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫', ph: '+226' },
  { code: 'BI', name: 'Burundi', flag: '🇧🇮', ph: '+257' },
  { code: 'KH', name: 'Cambodia', flag: '🇰🇭', ph: '+855' },
  { code: 'CM', name: 'Cameroon', flag: '🇨🇲', ph: '+237' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', ph: '+1' },
  { code: 'CV', name: 'Cape Verde', flag: '🇨🇻', ph: '+238' },
  { code: 'KY', name: 'Cayman Islands', flag: '🇰🇾', ph: '+1-345' },
  { code: 'CF', name: 'Central African Republic', flag: '🇨🇫', ph: '+236' },
  { code: 'TD', name: 'Chad', flag: '🇹🇩', ph: '+235' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱', ph: '+56' },
  { code: 'CN', name: 'China', flag: '🇨🇳', ph: '+86' },
  { code: 'CX', name: 'Christmas Island', flag: '🇨🇽', ph: '+61' },
  { code: 'CC', name: 'Cocos (Keeling) Islands', flag: '🇨🇨', ph: '+61' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴', ph: '+57' },
  { code: 'KM', name: 'Comoros', flag: '🇰🇲', ph: '+269' },
  { code: 'CG', name: 'Congo (Brazzaville)', flag: '🇨🇬', ph: '+242' },
  { code: 'CD', name: 'Congo (Kinshasa)', flag: '🇨🇩', ph: '+243' },
  { code: 'CK', name: 'Cook Islands', flag: '🇨🇰', ph: '+682' },
  { code: 'CR', name: 'Costa Rica', flag: '🇨🇷', ph: '+506' },
  { code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮', ph: '+225' },
  { code: 'HR', name: 'Croatia', flag: '🇭🇷', ph: '+385' },
  { code: 'CU', name: 'Cuba', flag: '🇨🇺', ph: '+53' },
  { code: 'CY', name: 'Cyprus', flag: '🇨🇾', ph: '+357' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', ph: '+420' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰', ph: '+45' },
  { code: 'DJ', name: 'Djibouti', flag: '🇩🇯', ph: '+253' },
  { code: 'DM', name: 'Dominica', flag: '🇩🇲', ph: '+1-767' },
  { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴', ph: '+1-809' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨', ph: '+593' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬', ph: '+20' },
  { code: 'SV', name: 'El Salvador', flag: '🇸🇻', ph: '+503' },
  { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶', ph: '+240' },
  { code: 'ER', name: 'Eritrea', flag: '🇪🇷', ph: '+291' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪', ph: '+372' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹', ph: '+251' },
  { code: 'FJ', name: 'Fiji', flag: '🇫🇯', ph: '+679' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮', ph: '+358' },
  { code: 'FR', name: 'France', flag: '🇫🇷', ph: '+33' },
  { code: 'GA', name: 'Gabon', flag: '🇬🇦', ph: '+241' },
  { code: 'GM', name: 'Gambia', flag: '🇬🇲', ph: '+220' },
  { code: 'GE', name: 'Georgia', flag: '🇬🇪', ph: '+995' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', ph: '+49' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭', ph: '+233' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷', ph: '+30' },
  { code: 'GD', name: 'Grenada', flag: '🇬🇩', ph: '+1-473' },
  { code: 'GT', name: 'Guatemala', flag: '🇬🇹', ph: '+502' },
  { code: 'GN', name: 'Guinea', flag: '🇬🇳', ph: '+224' },
  { code: 'GW', name: 'Guinea-Bissau', flag: '🇬🇼', ph: '+245' },
];


