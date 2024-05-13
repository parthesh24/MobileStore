import React from 'react';
import { StyleSheet, Text, View, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useCart } from '../context';

const ProductDetail = ({ route }) => {
  const { name, url, image, stars, total_reviews, price_string, asin } = route.params.item;


  const { addItemToCart } = useCart();

  const handlePress = () => {
    addItemToCart(route.params.item);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.modelName}>{name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.price}>{price_string}</Text>
            <View style={styles.ratingContainer}>
              <Rating readonly={true} imageSize={20} showRating={false} startingValue={stars} style={{marginTop:20}}/>
              <Text style={styles.reviews}>{total_reviews}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.buyButton}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} style={styles.cartButton}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Reduced padding slightly for a tighter layout
  },
  image: {
    width: 250, // Reduced width slightly
    height: 250, // Reduced height slightly
    marginBottom: 15, // Reduced margin slightly
    resizeMode: 'contain'
  },
  detailsContainer: {
    alignItems: 'center',
  },
  modelName: {
    fontSize: 18, // Reduced font size slightly
    fontWeight: 'bold',
    marginBottom: 8, // Reduced margin slightly
    textAlign: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems:'center',
    width: "90%"
  },
  ratingContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    flexWrap: 'wrap',
    marginTop: 15, // Reduced margin slightly
    gap: 20, // Reduced gap between buttons
  },
  buyButton: {
    backgroundColor: '#FF8C00', // Changed to a slightly darker orange
    paddingVertical: 12, // Reduced padding slightly
    paddingHorizontal: 25, // Reduced padding slightly
    borderRadius: 7, // Increased border radius slightly for softer corners
  },
  cartButton: {
    backgroundColor: '#0072BD', // Changed to a slightly darker blue
    paddingVertical: 12, // Reduced padding slightly
    paddingHorizontal: 25, // Reduced padding slightly
    borderRadius: 7, // Increased border radius slightly for softer corners
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: 18, // Reduced font size slightly
  },
  price: {
    fontSize: 18, // Reduced font size slightly
    color:'red',
    fontWeight:"600"
  },
  rating: {
    fontSize: 14, // Reduced font size slightly
    marginTop: 5, // Reduced margin slightly
  },
  
});

export default ProductDetail;
