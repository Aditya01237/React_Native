import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TravelCard = () => {
  return (
    <View>
      <Text style={styles.heading}>TravelCard</Text>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/a7/be/ce/a7becec68631a36448debe2640b38856.jpg',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.heading1}>Spiti Valley</Text>
          <Text style={styles.desc}>
            Spiti Valley is a cold desert mountain valley in Himachal Pradesh,
            India. It's located at an altitude of 4,270 meters (14,000 feet)
            above sea level, and is surrounded by Lahaul, Ladakh, Kinnaur, and
            Kullu
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/a7/be/ce/a7becec68631a36448debe2640b38856.jpg',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.heading1}>Spiti Valley</Text>
          <Text style={styles.desc}>
            Spiti Valley is a cold desert mountain valley in Himachal Pradesh,
            India. It's located at an altitude of 4,270 meters (14,000 feet)
            above sea level, and is surrounded by Lahaul, Ladakh, Kinnaur, and
            Kullu
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/a7/be/ce/a7becec68631a36448debe2640b38856.jpg',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.heading1}>Spiti Valley</Text>
          <Text style={styles.desc}>
            Spiti Valley is a cold desert mountain valley in Himachal Pradesh,
            India. It's located at an altitude of 4,270 meters (14,000 feet)
            above sea level, and is surrounded by Lahaul, Ladakh, Kinnaur, and
            Kullu
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TravelCard;

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
    paddingHorizontal: 5,
  },
  cardImage: {
    marginVertical: 5,
    height: 250,
    width: 370,
    borderRadius: 8,
  },
  heading1: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  desc: {
    fontSize: 25,
    color: 'black',
  },
});
