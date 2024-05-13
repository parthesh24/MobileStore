import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const renderCart = ({item, props}) => {
    
    const { navigation, handleAddItem,handleRemoveItem, handleDeleteItem } = props
    const handlePress = () => {
        navigation.navigate('ProductDetail', { item });
    }

    

    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
                <View style={styles.item}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
                            {item.name}
                        </Text>
                        <Text style={styles.price}>{item.price_string}</Text>
                    </View>
                </View>
                <View style={styles.itemQuantity}>
                    <TouchableOpacity onPress={()=>handleAddItem(item)}>
                        <Text style={styles.buyButton}>Add</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>Quantity : {item.quantity}</Text>
                    <TouchableOpacity onPress={()=>handleRemoveItem(item)}>
                        <Text style={styles.cartButton}>Remove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleDeleteItem(item)}>
                        <MaterialIcons name="delete" size={24} color="red"/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12, // Increased padding slightly
      },
      itemQuantity: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd", // Slightly lighter border color
        padding: 8, // Decreased padding slightly
      },
      imageContainer: {
        width: 90, // Reduced width by 10px
        height: 90, // Reduced height by 10px
        marginRight: 12, // Increased margin slightly
        backgroundColor: "#eee", // Lighter background color
      },
      infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      },
      title: {
        fontSize: 17, // Increased font size slightly
        fontWeight: "bold",
        marginBottom: 3, // Reduced margin slightly
      },
      price: {
        fontSize: 15, // Increased font size slightly
        color: "#209EFD", // Changed color to a darker blue
      },
      buyButton: {
        backgroundColor: '#FF8C00', // Slightly darker orange
        paddingVertical: 7, // Increased padding slightly
        paddingHorizontal: 25, // Decreased padding slightly
        borderRadius: 7, // Increased border radius slightly
        color: "white"
      },
      cartButton: {
        backgroundColor: '#0072BD', // Slightly darker blue
        paddingVertical: 7, // Increased padding slightly
        paddingHorizontal: 25, // Decreased padding slightly
        borderRadius: 7, // Increased border radius slightly
        color: "white"
      },
      quantity: {
        fontSize: 16,
        fontWeight: "bold",
      },
      deleteButton: {
        backgroundColor: 'red', // You can set a base color here
        padding: 7, // Increased padding slightly
        borderRadius: 7, // Increased border radius slightly
        alignItems: 'center', // Center content horizontally
      },
      
});

export default renderCart;
