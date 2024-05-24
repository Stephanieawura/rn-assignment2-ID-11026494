import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>"My name is <Text style={styles.largeWeight}>  Stephanie Awurabena Dunyo </Text> ".</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
fontSize:24,

  },
  largeWeight:{
    fontWeight:'bold'
  }
});
