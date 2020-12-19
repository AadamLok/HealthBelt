import * as React from 'react';
import { View, Text} from 'react-native';

function profile({navigate}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
}

export default profile;