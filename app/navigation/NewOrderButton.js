import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppLargeText from '../components/AppLargeText';

const NewOrderButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="scan-helper" color={colors.white} size={30}/>
            {/* <AppLargeText style={{ fontSize: 50, textAlign: 'center', marginTop: 0, color: colors.white}}></AppLargeText> */}
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 70,
        justifyContent: 'center',
        width:70,
        borderRadius: 40,
        bottom: 30,
        borderColor: colors.secondary,
        borderWidth: 5
    }
})
export default NewOrderButton;