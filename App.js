import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.png')} style={styles.imagen} />
      <Text style={styles.texto}>Beast Mode App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
  texto: {
    color: "#ffff",
  }

});
