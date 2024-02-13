import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import TravelCard from './components/TravelCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <TravelCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
