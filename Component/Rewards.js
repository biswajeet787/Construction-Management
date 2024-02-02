import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Rewards = () => {
  const handleCardPress = (cardTitle) => {
    // Handle card press logic here
    console.log(`Card pressed: ${cardTitle}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How To Refer & earn?</Text>
      <Text style={styles.heading}>Utech Rewards & Referrals</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Refer a Home Builder or Partner to Utec and earn Referral and Reward Stars.
          You can use the following incentives.
        </Text>
      </View>
      <View>
        <Text style={styles.line}>Refer Services to Earn rewards</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={() => handleCardPress('Refer Home Builders')}>
          <View style={styles.card}>
            <Icon name="home-city" size={60} color="#713ABE" />
            <Text style={styles.cardTitle}></Text>
          </View>
        </TouchableOpacity>

        {/* Add margin to create a gap */}
        <TouchableOpacity onPress={() => handleCardPress('Refer Partners')}>
          <View style={[styles.card, { marginLeft: 16 }]}>
            <Icon name="home" size={60} color="#713ABE" />
            <Text style={styles.cardTitle}></Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Add text components below each card */}
      <View style={styles.textBelowCardsContainer}>
        <Text style={styles.textBelowCards}>Refer Home Builders</Text>
        <Text style={styles.textBelowCards}>Refer Partners</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor:'#E5CFF7'
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line:{
    fontSize:17,
    marginBottom: 10,
    fontWeight:'bold',
  },
  descriptionContainer: {
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 30,
    marginBottom: 16,
    width: 190,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
  textBelowCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 17,
  },
  textBelowCards: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Rewards;
