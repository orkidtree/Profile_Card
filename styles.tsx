import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes it circular
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  course: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 20,
  },
});
