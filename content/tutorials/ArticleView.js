import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default class ArticleView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('title', 'A Nested Details Screen'),
        };
      };

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        try {
            this.setState({
                isLoading: false,
            });
        }
        catch(error) {
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
        const title = navigation.getParam('title', 'some default value');
        const subtitle = navigation.getParam('subtitle', 'some default value');
        const content = navigation.getParam('content', 'some default value');
        return (
            <View>
                <Text style={styles.titleContainer}>{title}</Text>
                <Text style={styles.subtitleContainer}>{subtitle}</Text>
                <Text style={styles.contentContainer}>{content}</Text>
            </View>
        );
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
        fontSize: 20,
        color: 'black',
        paddingHorizontal: 5,
        paddingVertical: 2
    },
 })

