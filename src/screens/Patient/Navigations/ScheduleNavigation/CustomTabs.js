import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFound from 'react-native-vector-icons/Foundation';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../theme/colors';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

export default function MyTabBar({
  state,
  descriptors,
  navigation,
  position,
  tabContainer,
  tabStyle,
  tabData,
}) {
  console.log('tabData', tabData);
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.button2}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                ...styles.tabStyle,
                ...{
                  backgroundColor:
                    isFocused && index === 0
                      ? 'green'
                      : isFocused && index === 1
                      ? 'blue'
                      : isFocused && index === 2
                      ? 'orange'
                      : colors.white,
                },
              }}>
              {index === 0 ? (
                <>
                  <IconFontisto
                    name="doctor"
                    size={s(23)}
                    color={isFocused ? colors.white : '#2F950B'}
                  />
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: isFocused ? colors.white : '#2F950B',
                    }}>
                    {reverseText(tabData[0].tabName)}
                  </Text>
                </>
              ) : index === 1 ? (
                <>
                  <IconFont5
                    name="capsules"
                    size={s(23)}
                    color={isFocused ? colors.white : '#1F61AE'}
                  />
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: isFocused ? colors.white : '#1F61AE',
                    }}>
                    {reverseText(tabData[1].tabName)}
                  </Text>
                </>
              ) : (
                <>
                  <IconFound
                    name="clipboard-notes"
                    size={s(23)}
                    color={isFocused ? colors.white : '#F99E4B'}
                  />
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: isFocused ? colors.white : '#F99E4B',
                    }}>
                    {reverseText(tabData[2].tabName)}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button2: {
    // flex: 1,
    margin: s(10),
    height: 65,
    // width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
    // marginTop: '35@vs',
    // margin: 20,
    elevation: 2,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 0.7,
    borderColor: colors.borderColor,
  },
  tabStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
