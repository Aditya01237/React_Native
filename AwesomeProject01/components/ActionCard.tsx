import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}>ActionCard</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/a7/be/ce/a7becec68631a36448debe2640b38856.jpg',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.heading1}>Spiti Valley</Text>
        <Text numberOfLines={5} style={styles.desc}>
          Spiti Valley is a cold desert mountain valley in Himachal Pradesh,
          India. It's located at an altitude of 4,270 meters (14,000 feet) above
          sea level, and is surrounded by Lahaul, Ladakh, Kinnaur, and Kullu
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Spiti')}>
          <Text style={styles.text}>Let's Gooo</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 30,
  },
  card: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 500,
    width: 380,
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
    backgroundColor: 'aliceblue',
  },
  cardImage: {
    height: 250,
    width: 380,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  heading1: {
    marginVertical: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  desc: {
    fontSize: 25,
    color: 'black',
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 10,
    marginHorizontal: 120,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: 'steelblue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
