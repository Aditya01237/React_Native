import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import TravelCard from './components/TravelCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <TravelCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
