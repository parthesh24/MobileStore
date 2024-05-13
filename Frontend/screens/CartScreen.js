import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect} from 'react'
import List from '../components/productList'
import renderCart from '../components/renderCart'
import { useCart } from '../context'
import axios from 'axios'

const CartScreen = (props) => {
  const { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, clearCart } = useCart()

  

  const uniqueArr = {};
  const uniqueData = cartItems.map((item) => {
    if (item.asin in uniqueArr) {
      uniqueArr[item.asin].quantity += 1;
      return null;
    } else {
      uniqueArr[item.asin] = { ...item, quantity: 1 };
      return item;
    }
  }).filter(Boolean);

  const filteredData = [];
  for (let item in uniqueArr) {
    filteredData.push(uniqueArr[item]);
  }




  return (
    <View>
      <List data={filteredData} navigation={props.navigation} renderElement={renderCart} handleAddItem={addItemToCart} handleRemoveItem={removeItemFromCart} handleDeleteItem={deleteItemFromCart} />
      <View style={styles.buttonContainer}>
        {cartItems.length > 0 ? <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity> : <Text style={{marginTop:20}}>Nothing in present in cart</Text>}

      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    maxWidth: 80, // Reduced max width slightly
    backgroundColor: '#d9534f', // Changed background color to a darker red
    paddingVertical: 12, // Reduced padding slightly
    paddingHorizontal: 25, // Reduced padding slightly
    borderRadius: 7, // Reduced border radius slightly
    marginTop: 15, // Reduced margin slightly
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
