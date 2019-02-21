import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class ProductFetch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:5000/articles/');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.products,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 50 }}>

                <Text>The list is below </Text>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item._id}, {item.name}, {item.price}, {item.identifyBy}, {item.description}</Text>}
                    keyExtractor={({ _id }, index) => _id}
                />
            </View>
        );
    }
}