import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductFormScreen from './screens/ProductFormScreen';
import HomeScreen from './screens/HomeScreen';
import EditProductFormScreen from './screens/EditProductFormScreen';
import AccountScreen from './screens/AccountScreen'; // Asegúrate de crear este nuevo componente
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Crea un nuevo componente que encapsulará la navegación de pestañas
function HomeTabs() {

  return (

    
    <Tab.Navigator>


      <Tab.Screen
      name="Check My Bus"
      component={HomeStack}
      options={{
      tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="bus" size={24} color={color} />
      ),
    }}
    />

      <Tab.Screen name="Nuevo" 
      component={ProductFormScreen} 
      options={{ 
        tabBarIcon: ({color})=>(
        <MaterialCommunityIcons name = "cards-outline" size={24} color={color} /> 
       )
      }}
      />




      <Tab.Screen name="Cuenta" 
      component={AccountScreen} 
      options={{
        tabBarIcon: ({color}) =>(
          <MaterialCommunityIcons name ="ticket-account" size={24} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>


      <Stack.Screen 
        name="Tus Boletos Aqui" 
        component={HomeScreen} 
      />

      
      <Stack.Screen
        name="ProductFormScreen" 
        component={ProductFormScreen} 
        options={{
          title: 'Agregar producto',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen name="Editar" component={EditProductFormScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}

export default App;
