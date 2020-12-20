import * as React from 'react';
import { View, Text} from 'react-native';

function profile({navigate}) {
    return (
      <View style={{ backgroundColor: 'rgb(167,159,202)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
}

export default profile;

