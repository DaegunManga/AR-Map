import React, {useState} from 'react';
import {Button, GestureResponderEvent, Text, View} from 'react-native';

interface SearchBarProps {
  contents: string[];
  dispatch: React.Dispatch<React.SetStateAction<string>>;
  now: string;
  onPress?: (e: GestureResponderEvent) => any;
}

export default function SearchBar({
  contents,
  dispatch,
  now,
  onPress,
}: SearchBarProps) {
  const [dropdownEnabled, setDropdownEnabled] = useState(false);

  const onPressBar = (e: GestureResponderEvent) => {
    e.preventDefault();
    setDropdownEnabled(current => !current);
  };

  const onDropdownChange = () => {
    dispatch(now);
  };

  return (
    <View>
      <Button onPress={onPressBar} title={now}></Button>
      <Button onPress={onPress} title="" /> {/** TODO: Add Search Icon */}
    </View>
  );
}
