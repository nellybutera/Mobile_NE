import React, {useState} from "react";
import { View, TextInput, StyleSheet} from "react-native";

const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        onSearch(searchText);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search your prefered restaurant"
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    input:{
        backgroundColor:'#fff',
        borderRadius: 20,
        paddingTop:'1%',
        // paddingLeft:'5%',
        paddingBottom:'2%',
        // paddingRight:'5%',
        textAlign: 'center',
        width: '100%',
        // marginTop: '25%',
        // marginLeft: '11%'
    }
});

export default SearchBar;