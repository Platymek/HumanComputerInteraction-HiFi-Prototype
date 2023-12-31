import { Pressable } from 'react-native';
import { Text, View, Image } from 'react-native';
import Container from './Container';

/*
    - BirdContainer Component -

    props:
    - colors: color palette of page
    - bird: bird class
*/

export default function BirdContainer(props) {

    return(
        
        <Container

            colors={props.colors}

            style={{

                borderRadius: 20,
                marginBottom: 16,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}
        >
            <View style={{
                
                width: '100%',
                maxWidth: 300,

                flexDirection: 'row',
                flexWrap: 'wrap',

                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>

                <Image 

                    style={{

                        height: 50,
                        width: 50
                    }}
                
                    source={props.bird.asset}
                />

                <Text style={{
                    
                    marginLeft: 12,
                    fontSize: 24,

                    color: props.colors[2],
                }}>
                    {props.bird.name}

                </Text>
            </View>
            
            <View 
                style={{

                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    width: '100%',
                    marginBottom: -8,
                    maxWidth: 300,
                }}
            >
                {props.children}
            </View>

        </Container>
    )
}
