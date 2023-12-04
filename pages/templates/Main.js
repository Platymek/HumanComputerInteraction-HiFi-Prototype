import { View } from "react-native";
import Header from "./components/Header";
import { ScrollView } from "react-native";

/*

	- Main Template -

	props:
    - colors: color palette of page
    - navigate: navigation class
	- children: takes in children

*/

export default function Main(props) {

	return (

		<View style={{

			flex: 1
		}}>

			<Header

				colors={props.colors}
				navigation={props.navigation}
			/>

			<ScrollView style={{

				maxWidth: 500,
				width: '100%',
			}}>
				<View style={{

					padding:16,
				}}>
					{props.children}

				</View>
			</ScrollView>

		</View>
	)
}
