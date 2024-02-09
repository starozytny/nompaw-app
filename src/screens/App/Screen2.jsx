import React from "react";
import { SafeAreaView, Text } from "react-native";

import { Divider, Layout, TopNavigation } from "@ui-kitten/components";

export function Screen2 ({ navigation })
{
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='ok' alignment='center' />
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>okokkokkko</Text>
            </Layout>
        </SafeAreaView>
    );
}
