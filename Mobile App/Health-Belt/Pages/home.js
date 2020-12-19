import * as React from 'react';
import { View, Text} from 'react-native';

function home({navigate}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
}

export default home;