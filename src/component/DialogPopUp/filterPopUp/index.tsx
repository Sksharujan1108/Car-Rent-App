import {Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import BottomSheet from '@/component/bottomSheet';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '@/theme/scale';
import {colors} from '@/theme/colors';
import TabSwitcher from '@/component/tabSwitcher';
import {renderBoderBottom, renderMarginBottom} from '@/utils/ui-utils';
import Slider from '@react-native-community/slider';

interface FilterPopUpCardProps {
  visible: boolean;
  setVisible: (e: any) => void;
}

const FilterPopUpCard = (props: FilterPopUpCardProps) => {
  const {visible, setVisible} = props;
  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <BottomSheet visible={visible} setVisible={setVisible}>
      <View style={styles.filterView}>
        {/*  */}
        <View style={styles.header}>
          <Pressable>
            <MaterialIcons
              name="close"
              size={scale(22)}
              color={colors.crossBg}
              onPress={() => setVisible(false)}
            />
          </Pressable>
          <Text style={styles.text}>Filters</Text>
          <View style={styles._f08} />
        </View>
        {/*  */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.filterContainer}>
            <TabSwitcher
              title="Type of Cars"
              data={data}
              onPress={e => console.log(e)}
            />
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            <View style={styles.flexRow}>
              <Text style={styles.filterTypeText}>Price Range</Text>
              <Text style={styles.filterTypeText}>{value}$</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={min}
              maximumValue={max}
              step={1}
              minimumTrackTintColor={colors.black}
              maximumTrackTintColor={colors.black}
              thumbTintColor={colors.black}
              value={value}
              onValueChange={e => setValue(e)}
            />
          </View>
        </ScrollView>
        {/*  */}
      </View>
    </BottomSheet>
  );
};

export default FilterPopUpCard;

const data = [
  {
    id: 1,
    label: 'All Cars',
    value: 'All Cars',
  },
  {
    id: 2,
    label: 'Regular Cars',
    value: 'Regular Cars',
  },
  {
    id: 3,
    label: 'Luxury Cars',
    value: 'Luxury Cars',
  },
];
