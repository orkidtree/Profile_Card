// Changes made by Orkid De Castro on 04/27/2026
// - Added personal profile photo
// - Updated name and course information
// - Added bio section with custom styling
// - Centered all content using flexbox
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{ uri: 'pfp.jpg' }}
        style={styles.photo}
      />
      
      {/* Orkid De Castro */}
      <Text style={styles.name}>Orkid De Castro</Text>
      
      {/* Course */}
      <Text style={styles.course}>MMA Student • CS126-1L</Text>
      
      {/* Bio */}
      <Text style={styles.bio}>
        Hi! I'm Orkid, a traditional artist who is trying their best to learn programming. This is a whole new environment for me, but I'm excited to explore the world of coding and see where it takes me. I hope to combine my artistic skills with programming to create unique projects in the future!
      </Text>
    </View>
  );
}

