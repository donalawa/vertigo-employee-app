import React,  {useEffect,  useState} from 'react';
import { StyleSheet, View, Button, Text,  Dimensions, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialIcons } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ScanCodeScreen({ navigation  }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
        // console.log(`Bar code with type ${type} and data ${JSON.parse(data).code} has been scanned!`);
        if(type == 'org.iso.QRCode' &&  JSON.parse(data).code) {
            setScanned(true);
            console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
             //   ROUTE TO ENTER AMOUNT SCREEN
             navigation.navigate('TopUp', {code: JSON.parse(data).code})
        }
     
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <MaterialIcons onPress={() => navigation.navigate("HomePage")} color={colors.white} name="arrow-back" size={24}/>
                        <Text style={styles.titleText}>Scan Users Wallet Code</Text>
                    </View>
                    <View style={styles.codeScanView}>
                    <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                    />
                    </View>
                    <View style={styles.bottomContainer}>
                        <AppButton title={'Tap to Scan Again'} style={styles.button} onPress={() => setScanned(false)} />
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
   
    container: {
        flex: 1,
    },
    codeScanView: {
        height: Dimensions.get('screen').height - 240,
        width: Dimensions.get('screen').width
    },
    header: {
        height: 40,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    titleText: {
        color: colors.white
    }
})
export default ScanCodeScreen;