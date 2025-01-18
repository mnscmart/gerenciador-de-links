import { View, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Input } from "@/componets/input";
import { Categories } from "@/componets/categories";

export default function Add(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>
                <Text style={styles.label}>Selecione uma categoria</Text>
                <Categories/>
                <View style={styles.form}>
                <Input placeholder="Nome"/>
                <Input placeholder="Url"/>
                </View>
        </View>


    )
}