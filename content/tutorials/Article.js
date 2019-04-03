import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true,
        id: 0 }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:5000/articles/');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.articles,
            }, function () {
                console.log(this.state.dataSource);
                var received = this.state.dataSource;
                console.log(received);
                //console.log(responseJson.articles);
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
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const title = navigation.getParam('title', 'some default value');
        const subtitle = navigation.getParam('subtitle', 'some default value');
        const content = navigation.getParam('content', 'some default value');
        return (
            <View>
                <Text style={styles.titleContainer}>{title}</Text>
                <Text style={styles.subtitleContainer}>{subtitle}</Text>
                <Text style={styles.contentContainer}>{content}</Text>
            </View>
        //     <View>
        //     {
        //        this.state.dataSource.map((item, index) => (
        //           <View
        //              key = {item._id}
        //              style = {styles.container}
        //              onPress = {() => this.props.navigation.navigate('Article')}>
        //              <Text style = {styles.titleContainer}>
        //                 {item.title}
        //              </Text>
        //              <Text>itemId: {JSON.stringify(itemId)}</Text>
        //              <Text style = {styles.subtitleContainer}>
        //                 {item.subtitle}
        //              </Text>
        //              <Text style = {styles.contentContainer}>
        //                 {item.content}
        //              </Text>
        //           </View>
        //        ))
        //     }
        //  </View>
        );

        // return (
        //     <View style={{ flex: 1, paddingTop: 50 }}>

        //         <Text>Articles </Text>

        //         <FlatList
        //             data={this.state.dataSource}
        //             renderItem={({ item }) => 
        //             <Text>{item._id}, {item.title}, {item.subtitle}, {item.image}, {item.content}</Text>
        //         }
        //             keyExtractor={({ _id }, index) => _id}
        //         />
        //     </View>
        // );
    }
}

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: 'white',
       alignItems: 'center',
    },
    text: {
       color: '#282b26'
    },
    titleContainer: {
        textAlign: 'center',
        fontSize: 30,
        color: '#00386b',
        // backgroundColor: '#9842f4',
    },
    subtitleContainer: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    contentContainer: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 5,
        paddingVertical: 2
    },
 })
/**
 * <View>
            {
               this.state.dataSource.map((item, index) => (
                  <TouchableOpacity
                     key = {item._id}
                     style = {styles.container}
                     onPress = {() => this.props.navigation.navigate('Home')}>
                     <Text style = {styles.text}>
                        {item.title}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
 */

/**
 * <View style={{ flex: 1, paddingTop: 50 }}>

                <Text>Articles </Text>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item._id}, {item.title}, {item.subtitle}, {item.image}, {item.content}</Text>}
                    keyExtractor={({ _id }, index) => _id}
                />
            </View>
 */

