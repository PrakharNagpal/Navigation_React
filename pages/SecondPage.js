import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is Second Page of the App
          </Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
            title="Go to SecondPage... again"
            onPress={() => navigation.push('SecondPage')}
          />
         
        
          <Button title="Go to First Page" onPress={() => navigation.navigate('FirstPage')} />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('ThirdPage', { someParam: 'Param1' })}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default SecondPage ;  