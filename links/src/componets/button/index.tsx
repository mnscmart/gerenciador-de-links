import{TouchableOpacity,TouchableOpacityProps,Text} from"react-native"

import { styles } from "./styles"

type props = TouchableOpacityProps & {title:string}

export function Button({title,...rest}:props){

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}{...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )


}