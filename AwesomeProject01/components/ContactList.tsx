import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text>ContactList</Text>
      <ScrollView horizontal={true}>
        {contacts.map(({uid, name, imageUrl}) => (
          <View key={uid} style={styles.card}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.cardImage}
            />
            <Text style={styles.heading1}>{name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 300,
    width: 200,
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
    marginVertical: 10,
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  heading1: {
    marginVertical: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});
