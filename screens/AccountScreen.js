import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Avatar, ActivityIndicator} from 'react-native-paper';

const AccountScreen = () => {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const handlesync  = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handlesync1  = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>


      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.avatarContainer}>
            <Avatar.Image size={94} source={require('../assets/asas.png')} />
          </View>
          <Button icon="account">Luis Marquez</Button>
          <Button icon="email">Luisivmaraz03@gmail.com</Button>
          <Button icon="phone">+52 812 909 38 76 </Button>
          <Button icon="bag-suitcase">53 viajes</Button>
          <Button
            icon="cloud-sync"
            mode="contained"
            onPress={handlesync}
            style={styles.button}
            disabled={loading} 
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              'Sincronizar datos'
            )}
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          
          <Button icon="air-conditioner"> Aqui va la temperatura </Button>
          <Button icon="water">Aqui va la temperatura</Button>
          <Button icon="bus-alert"> Aqui va el estado del sensor presencia</Button>
          <Button
            icon="check-circle"
            mode="contained-tonal"
            onPress={handlesync1}
            style={styles.button}
            disabled={loading} 
          >
            {loading1 ? (
              <ActivityIndicator color="white" />
            ) : (
              'Abordar'
            )}
          </Button>
        </Card.Content>
      </Card>
      
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2E9FC',
  },
  card: {
    marginBottom: 20,
    elevation: 4, 
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    marginBottom: 8,
    fontSize: 16,
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default AccountScreen;
