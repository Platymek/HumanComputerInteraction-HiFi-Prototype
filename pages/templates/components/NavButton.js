import { useState } from 'react';
import { Image } from 'react-native';
import { Pressable } from 'react-native';

export default function NavButton(props) {

    const [hovering, setHovering] = useState(false);

    if (!props.visible) {

        return (

            <Pressable

                style={({ pressed }) => [{

                    borderRadius: 16,

                    backgroundColor: pressed || hovering
                        ? props.colors[7]
                        : props.colors[1],

                    marginLeft: 4,
                }]}

                onHoverIn={() => {

                    setHovering(true);
                }}

                onHoverOut={() => {

                    setHovering(false);
                }}

                unstable_pressDelay={1}

                onPress={props.onPress}
            >

                <Image

                    source={props.source}

                    style={{

                        width: props.size,
                        height: props.size,
                        margin: 9,
                        tintColor: props.colors[2],
                    }}
                />

            </Pressable>
        )
    }
}