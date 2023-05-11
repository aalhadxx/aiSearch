import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {API_KEY,API_URL} from "@env";
import axios from 'axios';
import SendButton from '../assets/send-button.svg';

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const apiKey = API_KEY ;
  const apiUrl =  API_URL;
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    Keyboard.dismiss();
    const prompt = textInput;
    const response = await axios.post(apiUrl, {
      prompt: prompt,
      max_tokens: 300,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const botResponse = response.data.choices[0].text;
    setMessages([
      ...messages,
      { type: 'user', text: textInput },
      { type: 'bot', text: botResponse }
    ]);
    setTextInput('');
  }

  const renderChatItem = ({ item }) => {
    return (
      <View style={styles.chatItem}>
        {item.type === 'user' ? (
          <View style={[styles.chatBubble, styles.userChat]}>
            <Text selectable={true} style={styles.chatText}>{item.text}</Text>
          </View>
        ) : (
          <View style={[styles.chatBubble, styles.botChat]}>
            <Text style={styles.chatText} selectable={true}>AI</Text>
            <Text style={styles.chatText} selectable={true}>{item.text}</Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
      <Text style={styles.title}>AI ChatBot</Text>
    </View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderChatItem}
        contentContainerStyle={styles.chatList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={text => setTextInput(text)}
          placeholder='Ask me anything'
          placeholderTextColor="#5f5f5f"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
        >
          <View>
            <SendButton width={20} height={23} fill={'#fff'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#0084ff',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'Helvetica',
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
    alignItems: 'center',
  },
  userChat: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    marginLeft: 'auto'
  },
  botChat: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    marginRight: 'auto',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingRight: 8,
  },
  chatText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000000',
    marginLeft: 10
  },
  sendButton: {
    backgroundColor: '#0084FF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  apiKeyContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  apiKeyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  apiKeyInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: '#333333',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
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
    alignItems: 'center',
  },
  userChat: {
    backgroundColor: '#5A5A5A',
    alignSelf: 'flex-end',
    marginLeft: 'auto'
  },
  botChat: {
    backgroundColor: '#2B2B2B',
    alignSelf: 'flex-start',
    marginRight: 'auto',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingRight: 8,
  },
  chatText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10
  },
  sendButton: {
    backgroundColor: '#0084FF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  header:{
    width:'100%',
    backgroundColor:'#000'
  },
  text: {
    color:'#FFF',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'notoserif',
  }
});




export default AiChat;
