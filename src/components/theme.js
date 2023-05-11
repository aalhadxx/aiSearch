import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  chatList: {
    flexGrow: 1,
    paddingVertical: 10
  },
  chatItem: {
    marginBottom: 10
  },
  chatBubble: {
    borderRadius: 20,
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputBackgroundColor: '#FFFFFF',
  backgroundColor: '#F5F5F5',
  textColor: '#000000'
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10
  },
  chatList: {
    flexGrow: 1,
    paddingVertical: 10
  },
  chatItem: {
    marginBottom: 10
  },
  chatBubble: {
    borderRadius: 20,
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputBackgroundColor: '#242424',
  backgroundColor: '#121212',
  textColor: '#FFFFFF'
});
