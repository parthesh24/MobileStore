import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import CartIcon from './components/CartIcon';
import { CartProvider } from './context';
import { useCart } from './context';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ClothesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shoes" component={ProductScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

function AppDrawer() {
  const { cartItems } = useCart();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Store"
        component={ClothesStack}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="store" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({ color, size }) => <CartIcon count={cartItems.length} />,
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
