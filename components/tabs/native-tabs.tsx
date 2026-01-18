import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { HomeIcon, NewspaperIcon, SettingsIcon } from '../icons';
import Tab from './tab';

export default function NativeTabsComponent() {
  return (
    <NativeTabs>
      <Tab label="Map" name="index" icon={<HomeIcon />} />
      <Tab label="Feed" name="feed" icon={<NewspaperIcon />} />
      <Tab label="Settings" name="settings" icon={<SettingsIcon />} />
    </NativeTabs>
  );
}
