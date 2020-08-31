import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Gallery extends Component {

    static navigationOptions = {
        title: 'GALLERY'
    }

    render() {
        return(
            <ScrollView>
                <Card>
                    <Text>GALLERY</Text>
                </Card>
            </ScrollView>
        );
    }
}

/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'mediumspringgreen'
    },
    scrollView: {
      backgroundColor: 'mediumspringgreen',
    },
    text: {
      fontSize: 42,
      color: 'mintcream'
    },
  });
  */
  
export default Gallery;