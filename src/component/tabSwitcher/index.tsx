import {FlatList, Pressable, Text, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

interface TabSwitcherProps {
  tabContainerStyle?: ViewStyle;
  title?: string;
  data?:
    | {
        id: number;
        label: string;
        value: string;
      }[]
    | undefined;
  onPress?: (index: number) => void;
}

const TabSwitcher = (props: TabSwitcherProps) => {
  const {title, tabContainerStyle, data, onPress} = props;
  const [active, setActive] = useState(data?.[0]?.id || 0);
  return (
    <View style={styles.typeView}>
      <Text style={styles.filterTypeText}>{title}</Text>
      <View style={[styles.tabContainer, tabContainerStyle]}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => {
            return (
              <Pressable
                style={[
                  styles.tab,
                  active === item?.id && styles.activeTab,
                ]}
                onPress={() => {
                  onPress?.(item.id); // optional chaining to call onPress only if it's defined
                  setActive(item.id);
                }}
              >
                <Text
                  style={[
                    styles.tabText,
                    active === item?.id && styles.tabTextActive,
                  ]}>
                  {item.label}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TabSwitcher;
