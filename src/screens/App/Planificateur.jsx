import React from "react";

import { SafeAreaView, StyleSheet, View } from "react-native";
import { Avatar, Button, Icon, List, ListItem, Text, TopNavigation } from "@ui-kitten/components";

const data = new Array(20).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

export function Planificateur ({ navigation })
{
    const renderItemAccessory = () => (
        <Button size='tiny' status="danger">
            Supprimer
        </Button>
    );

    const renderItemIcon = (props) => (<Icon {...props} name='person' />);
    const PlusIcon = (props) => (<Icon {...props} name='plus' />);
    const TimeIcon = (props) => (<Icon {...props} name='clock' />);

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Avatar
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <Text {...props}>
                Shanbora
            </Text>
        </View>
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
            style={styles.listItem}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                alignment="start"
                title={renderTitle}
                style={{ backgroundColor: '#061d38' }}
            />
            <View style={{ padding: 24 }}>
                <Text style={styles.price}>Budget disponible</Text>
                <Text category='h2' style={styles.price}>1564 €</Text>
            </View>
            <View style={styles.actions}>
                <View style={styles.buttonWithText}>
                    <Button
                        style={styles.button}
                        status='primary'
                        accessoryLeft={PlusIcon}
                    />
                    <Text style={styles.buttonText}>Ajouter</Text>
                </View>
                <View style={styles.buttonWithText}>
                    <Button
                        style={styles.button}
                        status='primary'
                        accessoryLeft={TimeIcon}
                    />
                    <Text style={styles.buttonText}>Économies</Text>
                </View>
            </View>
            <View style={styles.viewList}>
                <List
                    style={styles.list}
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    price: {
        textAlign: 'center',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 48,
        marginBottom: 24
    },
    buttonWithText: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 100
    },
    buttonText: {
        textAligne: 'center',
        marginTop: 8
    },
    button: {
        flexDirection: 'column',
        borderRadius: 200,
        width: 48,
        height: 48
    },
    viewList: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: '#061d38',
    },
    list: {
        backgroundColor: 'transparent'
    },
    listItem: {
        backgroundColor: 'transparent'
    }
})
