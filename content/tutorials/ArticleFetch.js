import React from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class ArticleFetch extends React.Component {

    static navigationOptions = {
        title: 'Articles',
    };

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:5000/articles');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.articles,
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
            <View>
            {
               this.state.dataSource.map((item, index) => (
                  <TouchableOpacity
                     key = {item._id}
                     style = {styles.container}
                     onPress = {() => this.props.navigation.navigate('Article', {
                        itemId: item._id,
                        title: item.title,
                        subtitle: item.subtitle,
                        content: item.content,
                     })}>
                     <Text style = {styles.text}>
                        {item.title}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
       padding: 20,
       backgroundColor: 'blue',
       alignItems: 'center',
       borderRadius: 4,
       borderWidth: 1.5,
       borderColor: '#d6d7da',   
       
    },
    text: {
       color: 'white',
       fontSize: 30,
       fontWeight: 'bold',
    }
 })