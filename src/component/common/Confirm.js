import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({children, visible, onAccept, onDecline}) => {

    const{
        containerStyle,
        textStyle,
        cardSectionStyle
    } = Styles;

    return(
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onrequestclose={() => {}}>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection style={cardSectionStyle}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );

};

const Styles = {
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    }
};

export { Confirm }