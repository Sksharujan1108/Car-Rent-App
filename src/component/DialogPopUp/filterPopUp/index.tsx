/* eslint-disable react-hooks/exhaustive-deps */
import {Pressable, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomSheet from '@/component/bottomSheet';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '@/theme/scale';
import {colors} from '@/theme/colors';
import TabSwitcher from '@/component/tabSwitcher';
import {renderBoderBottom, renderMarginBottom, renderMarginTop} from '@/utils/ui-utils';
import Slider from '@react-native-community/slider';
import TextInputComponent from '@/component/TextInput';
import PrimaryButton from '@/component/primaryButton';

interface FilterPopUpCardProps {
  visible: boolean;
  setVisible: (e: any) => void;
}

const FilterPopUpCard = (props: FilterPopUpCardProps) => {
  const {visible, setVisible} = props;
  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  // Clamp value when min or max changes
  useEffect(() => {
    if (value < min) {setValue(min);}
    if (value > max) {setValue(max);}
  }, [min, max]);

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
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
            {/*  */}
            <Slider
              style={styles.slider}
              minimumValue={min}
              maximumValue={max}
              step={1}
              minimumTrackTintColor={colors.black}
              // maximumTrackTintColor={colors.black}
              thumbTintColor={colors.black}
              value={value}
              onValueChange={setValue}
            />
            {/*  */}
            <View style={styles.flexRow}>
              <TextInputComponent
                containerStyle={styles.inputContainer}
                keyboardType="numeric"
                onChangeText={e => setMin(Number(e))}
                placeholder="Min"
              />
              {/*  */}
              <TextInputComponent
                containerStyle={styles.inputContainer}
                keyboardType="numeric"
                onChangeText={e => setMax(Number(e))}
                placeholder="Max"
              />
            </View>
            {renderMarginTop(16)}
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            {/*  */}
            <TabSwitcher
              title="Rental Time"
              data={rentalData}
              onPress={e => console.log(e)}
              tabContainerStyle={styles.tabContainerStyle}
              tabStyle={styles.tabStyle}
              tabTextStyle={styles.tabTextStyle}
            />
            {/*  */}
            {renderMarginTop(8)}
            <View style={styles.flexRow}>
              <Text style={styles.placeHolder}>Pick up and Drop Date</Text>
              <Text style={styles.placeHolder}>05 June 2025</Text>
            </View>
            {/*  */}
            {renderMarginTop(8)}
            <TextInputComponent
              onChangeText={e => setMin(Number(e))}
              placeholder="Car Location"
            />
            {renderMarginTop(16)}
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            {/*  */}
            <TabSwitcher
              title="Siting Capacity"
              data={sitingCapacity}
              onPress={e => console.log(e)}
              tabContainerStyle={styles.tabContainerStyle}
              tabStyle={[styles.tabStyle, styles.sitingCapTab]}
              tabTextStyle={styles.tabTextStyle}
            />
            {/*  */}
            <TabSwitcher
              title="Fuel Type"
              data={FuelType}
              onPress={e => console.log(e)}
              tabContainerStyle={styles.tabContainerStyle}
              tabStyle={styles.tabStyle}
              tabTextStyle={styles.tabTextStyle}
            />
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            <View style={styles.flexRow}>
              <Text style={styles.clearAll}>Clear All</Text>
              <PrimaryButton
                label="Show 100+ cars"
                textStyle={styles.btnTextStyle}
                containerStyle={styles.btnContainerStyle}
                onPress={() => console.log('Pressed')}
              />
            </View>
            {renderMarginBottom(16)}
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

const rentalData = [
  {
    id: 1,
    label: 'Hour',
    value: 'Hour',
  },
  {
    id: 2,
    label: 'Day',
    value: 'Day',
  },
  {
    id: 3,
    label: 'Monthly',
    value: 'Monthly',
  },
  {
    id: 4,
    label: 'Weekly',
    value: 'Weekly',
  },
];

const sitingCapacity = [
  {
    id: 1,
    label: '2',
    value: '2',
  },
  {
    id: 2,
    label: '4',
    value: '4',
  },
  {
    id: 3,
    label: '5',
    value: '5',
  },
  {
    id: 4,
    label: '6',
    value: '6',
  },
];

const FuelType = [
  {
    id: 1,
    label: 'Electric',
    value: 'Electric',
  },
  {
    id: 2,
    label: 'Petrol',
    value: 'Petrol',
  },
  {
    id: 3,
    label: 'Diesel',
    value: 'Diesel',
  },
  {
    id: 4,
    label: 'Hybrid',
    value: 'Hybrid',
  },
];
