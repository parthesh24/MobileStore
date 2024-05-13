import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import List from '../components/productList';
import axios from 'axios';
import renderClothes from '../components/displayProduct';

const ProductScreen = (props) => {
  const [itemData, setItemData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.1.66:5000/api/products`);
        const info = response.data;
        setFilteredData(info);
        setItemData(info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredData(itemData);
    } else {
      const filtered = itemData.filter(clothes =>
        clothes.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search Mobile..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#fff"
      />
      <List data={filteredData} navigation={props.navigation} renderElement={renderClothes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#fff",
    backgroundColor: '#212121'
  },
  search: {
    width: "85%",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    backgroundColor: '#FC5936',
    color: '#FC5936',
    paddingLeft: 10,
  },
});

export default ProductScreen;
