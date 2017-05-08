import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({size}) => {
    return(
        <View>
            <ActivityIndicator
                size={size}
            />
        </View>
    );
};

export { Spinner }