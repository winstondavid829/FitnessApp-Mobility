import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../constants';

const SelectionSection = props => {
  const [active, setActive] = useState(props.selected);
  props.setSelect(active);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.steps}>Step {props.stepNumber} of 6</Text>
      <Text style={styles.title}>{props.title}</Text>
      {props.data?.map((item, index) => {
        const selection = item.section;
        return (
          <TouchableOpacity
            key={index}
            style={styles.container(props.selected, selection)}
            onPress={() => setActive(item.section)}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.cardText}>{item.section}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SelectionSection;

const styles = StyleSheet.create({
  container: (selected, selection) => ({
    height: responsiveHeight(10),
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: selected === selection ? 'red' : 'lightgray',
    flexDirection: 'row',
    marginVertical: 5,
  }),
  cardText: {
    color: Colors.BLACK,
    fontFamily: Fonts.boldFont,
    fontSize: 17,
  },
  emoji: {
    fontSize: 20,
    fontFamily: Fonts.boldFont,
    marginRight: 20,
    marginLeft: 20,
  },
  mainContainer: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.boldFont,
    fontSize: 20,
    marginBottom: 20,
  },
  steps: {
    alignSelf: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.boldFont,
    fontSize: 17,
    marginBottom: 50,
  },
});
