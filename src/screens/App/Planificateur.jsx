import React from "react";

import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Divider, Icon, Layout, List, ListItem, Text } from "@ui-kitten/components";

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

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
            <Divider style={{ marginBottom: 12 }} />
            <View>
                <List
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    }
})
