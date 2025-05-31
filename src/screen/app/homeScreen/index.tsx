import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Header from '@/component/header';
import SearchComponent from '@/component/SearchComponent';
import CardBrandCard from '@/component/carBrandCard';
import SectionHeader from '@/component/sectionHeader';
import CarListCard from '@/component/carListCard';
import assets from '@/assets';

const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.mainWrapper}>
        {/* Header */}
        <Header />
        {/*  */}
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <SearchComponent />
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
              <SectionHeader title="Best Cars" onPress={() => {}} />
            }
            renderItem={({item}) => {
              return (
                <CarListCard
                  carImage={assets?.ferrari}
                  carName={item?.name}
                  rating={item?.rating}
                  carSeats={item?.seats}
                  location={item?.location}
                  price={item?.pricePerDay}
                />
              );
            }}
            columnWrapperStyle={styles.flatListColumnWrapper}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const brandData = ['Tesla', 'BMW', 'Toyota', 'Honda', 'Audi'];

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
