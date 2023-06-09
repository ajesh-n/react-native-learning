import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface HeaderProps {
    likedCards: number
}

const Header: FunctionComponent<HeaderProps> = ({ likedCards }): JSX.Element => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Like It</Text>
            <Icon style={styles.icon} name="heart" size={24} color="red" />
            <Text style={{ fontSize: 24, marginEnd: 15 }}>{likedCards.toString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    title: {
        flex: 1,
        fontSize: 24,
        marginStart: 15
    },
    icon: {
        marginEnd: 5
    }
});

export default Header;
