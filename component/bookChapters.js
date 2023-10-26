import React from "react";
import { View, Text, StyleSheet } from "react-native";

const bookChapters = ({ title }) => {
  return (
    <View style={styles.chapterContainer}>
    <Text style={styles.chapterTitle}>{title}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    chapterContainer: {
      
     
      padding: 10,
      marginBottom: 10,
    },
    chapterTitle: {
      fontSize: 18,
     
    },
  });

export default bookChapters