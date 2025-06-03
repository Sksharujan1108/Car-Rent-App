/* eslint-disable @typescript-eslint/no-shadow */
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '@/component/header';
import {styles} from './styles';
import SearchComponent from '@/component/SearchComponent';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/navigation/navigation-model/bottomModels';
import CardBrandCard from '@/component/carBrandCard';
import SectionHeader from '@/component/sectionHeader';
import CarListCard from '@/component/carListCard';
import assets from '@/assets';
import CarCardActionBottom from '@/component/carCardActionBottom';
import FilterPopUpCard from '@/component/DialogPopUp/filterPopUp';

const SearchScreen = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamList, 'SearchScreen'>) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [showFilter, setShowFilter] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.mainWrapper}>
        {/* Header */}
        <Header title="Search" hasBack />
        {/*  */}
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          {/* Search */}
          <SearchComponent
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            onFilterPress={() => {
              setShowFilter(true);
            }}
          />
          {/*  */}
          <View style={[styles.showCase]}>
            <Text style={styles.text}>Brands</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={brandData}
              renderItem={({item, index}) => {
                return (
                  <CardBrandCard
                    text={item}
                    isSelected={selectedIndex === index}
                    onPress={() => setSelectedIndex(index)}
                    isHorizontal
                  />
                );
              }}
            />
          </View>
          {/*  */}
          <FlatList
            style={[styles.showCaseCars]}
            data={carListData}
            numColumns={2}
            nestedScrollEnabled
            keyExtractor={(item, index) =>
              item?.id?.toString() ?? index.toString()
            }
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={
              <SectionHeader title="Recommend For You" onPress={() => {}} />
            }
            renderItem={({ item, index}) => {
              return (
                <CarListCard
                  carImage={assets?.ferrari}
                  carName={item?.name}
                  rating={item?.rating}
                  carSeats={item?.seats}
                  location={item?.location}
                  price={item?.pricePerDay}
                  bottomActions={
                    <CarCardActionBottom
                      onPress={(item) => {
                        console.log('item', item);
                      }}
                      price={item?.pricePerDay}
                    />
                  }
                />
              );
            }}
            columnWrapperStyle={styles.flatListColumnWrapper}
          />
        </ScrollView>

        {/*  */}
        <FilterPopUpCard
          visible={showFilter}
          setVisible={setShowFilter}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const brandData = ['All', 'Tesla', 'BMW', 'Toyota', 'Honda', 'Audi'];

const carListData = [
  {
    id: 1,
    name: 'Ferrari',
    rating: 5.0,
    location: 'Washington DC',
    seats: '4 Seats',
    pricePerDay: 200,
    image: 'ferrari', // this should match a key in your assets
  },
  {
    id: 2,
    name: 'Tesla Model S',
    rating: 4.8,
    location: 'Los Angeles',
    seats: '5 Seats',
    pricePerDay: 180,
    image: 'tesla',
  },
  {
    id: 3,
    name: 'Lamborghini Huracan',
    rating: 4.9,
    location: 'Miami',
    seats: '2 Seats',
    pricePerDay: 350,
    image: 'lamborghini',
  },
  {
    id: 4,
    name: 'Lamborghini Huracan',
    rating: 4.9,
    location: 'Miami',
    seats: '2 Seats',
    pricePerDay: 350,
    image: 'lamborghini',
  },
  {
    id: 5,
    name: 'Lamborghini Huracan',
    rating: 4.9,
    location: 'Miami',
    seats: '2 Seats',
    pricePerDay: 350,
    image: 'lamborghini',
  },
  {
    id: 6,
    name: 'Lamborghini Huracan',
    rating: 4.9,
    location: 'Miami',
    seats: '2 Seats',
    pricePerDay: 350,
    image: 'lamborghini',
  },
];

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
