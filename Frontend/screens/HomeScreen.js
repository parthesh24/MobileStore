import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/123.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* <Text style={styles.title}>Welcome to Shoe Haven</Text> */}
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Store')}
        >
          <Text style={styles.buttonText}>Explore Now</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%', // Reduced height slightly
    width:'100%',
    backgroundColor:'#FFFFF0', // Changed background color to a slightly lighter shade of gray
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'5%', // Increased margin slightly for better spacing
    backgroundColor: 'blue', // Changed background color to a slightly darker shade of orange
    width: '55%', // Reduced width slightly
    borderRadius: 25, // Reduced border radius for a less rounded look
  },
  buttonText: {
    fontSize: 18, // Reduced font size slightly
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 15, // Reduced margin slightly for better spacing
  },
  
});

export default HomeScreen;
