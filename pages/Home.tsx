import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.view}>
      <Text>Home page</Text>
      <SearchBar
        contents={['대건고', '대건중', '대건학사', '체육관']}
        dispatch={setSearchInput}
        now={searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
