import { View } from 'react-native';

/*
    - Container Component -

    props:
    - colors: color palette of page
    - style: additional style of container
    - grey: boolean, is grey with no shadow
*/

export default function Container(props) {

    function greyStyle(grey){

        if (!grey){

            return {

                shadowOffset: {
        
                    width: 0,
                    height: 2,
                },
        
                backgroundColor: props.colors[1],
                shadowOpacity: 0.25,
                shadowRadius: 8,
                elevation: 8,
            }
        }
        
        return {

            backgroundColor: props.colors[7],
        }
    }

    return (

        <View 
            style={[{

                borderRadius: 50,
                padding: 16,
                alignItems: 'center',
                width:'100%',
            }, 
                greyStyle(props.grey),
                props.style
            ]}
        >
            {props.children}

        </View>
    );
}
