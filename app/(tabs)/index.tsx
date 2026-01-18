import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Button, Input } from '~/components/ui';

export default function Map() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Button className="bg-red-700/80">
        <Text className="text-white font-medium text-center">Click me button</Text>
      </Button>

      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        className="m-2"
        thumbColorClassName="accent-white"
        trackColorOnClassName="accent-blue-500 dark:accent-blue-400"
        trackColorOffClassName="accent-gray-300 dark:accent-gray-700"
        ios_backgroundColorClassName="accent-gray-300"
      />

      <Input isRequired label="Email" placeholder="Enter your email" errorText="Email is required" className="w-1/2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
