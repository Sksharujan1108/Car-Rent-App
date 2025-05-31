/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import Header from '@/component/header';
import {scale} from '@/theme/scale';
import SearchComponent from '@/component/SearchComponent';
import assets from '@/assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { renderMarginBottom } from '@/utils/ui-utils';

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* header */}
        <Header />
        {/*  */}
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <SearchComponent />
          <View style={styles.contentContainer}>
            <FlatList
              data={carListData}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.viewContainer}>
                    <Pressable style={styles.favContainer}>
                      <MaterialCommunityIcons
                        name={'cards-heart-outline'}
                        size={scale(18)}
                      />
                    </Pressable>
                    {/*  */}
                    <View style={styles.imageContainer}>
                      <Image
                        source={assets?.ferrari}
                        style={styles.imageStyle}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text>{item?.name}</Text>
                      {renderMarginBottom(4)}
                      <View style={styles.rowContainer}>
                        <Text>{item?.rating}</Text>
                        <MaterialIcons
                          name="star"
                          size={scale(20)}
                          color={colors.star}
                        />
                      </View>
                      {/*  */}
                      {renderMarginBottom(4)}
                      <View style={styles.rowContainer}>
                        <MaterialIcons
                          name="location-pin"
                          size={scale(16)}
                          color={colors.gray}
                        />
                        <Text>{item?.location}</Text>
                      </View>
                      {/*  */}
                      {renderMarginBottom(4)}
                      <View style={[styles.rowContainer, styles.justifyStyle]}>
                        <View style={styles.flexRow}>
                          <MaterialCommunityIcons
                          name="sofa-single-outline"
                          size={scale(16)}
                          color={colors.gray}
                         />
                        <Text>{item?.seats}</Text>
                        </View>
                        {/*  */}
                        <View style={styles.flexRow}>
                          <Fontisto name="dollar" size={scale(12)} color={colors.gray} />
                        <Text>${item?.pricePerDay}/Day</Text>
                        </View>
                      </View>
                      {renderMarginBottom(4)}
                    </View>
                  </TouchableOpacity>
                );
              }}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

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
  {
    id: 7,
    name: 'Lamborghini Huracan',
    rating: 4.9,
    location: 'Miami',
    seats: '2 Seats',
    pricePerDay: 350,
    image: 'lamborghini',
  },
  {
    id: 8,
    name: 'Lamborghini Huracan',
    rating: 4.9,
    location: 'Miami',
    seats: '2 Seats',
    pricePerDay: 350,
    image: 'lamborghini',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  contentContainer: {
    flex: 1,
    marginTop: scale(20),
    padding: scale(10),
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    backgroundColor: 'blue',
  },

  viewContainer: {
    width: '48%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: scale(16),

  },
  favContainer: {
    position: 'absolute',
    right: scale(4),
    top: scale(4),
    zIndex: 999,
    width: scale(30),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  imageContainer: {
    width: '100%',
    height: scale(120),
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    backgroundColor: colors.carBg,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },

  textContainer: {
    padding: scale(5),
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },

  justifyStyle: {
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
});
