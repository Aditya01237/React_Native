import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCard</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.text}>Coral</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 8,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#42A5F5', // blue color
  },
  cardThree: {
    backgroundColor: '#66BB6A', // green color
  },
  cardFour: {
    backgroundColor: 'coral', // green color
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Added textAlign to center the text within the card
  },
});
