import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ConnectionBanner({ message, isError }) {
  return (
    <View
      style={[
        styles.banner,
        isError ? styles.errorBanner : styles.successBanner,
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    zIndex: 9999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: height * 0.05,
  },
  errorBanner: {
    backgroundColor: '#e74c3c',
  },
  successBanner: {
    backgroundColor: '#27ae60',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: width * 0.034,
    textAlign: 'center',
  },
});