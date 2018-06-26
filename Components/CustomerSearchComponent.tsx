import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class CustomerSearchComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Customer Search Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });