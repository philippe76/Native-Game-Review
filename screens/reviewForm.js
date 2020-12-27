import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { globalStyle } from '../styles/global';
import { Formik } from 'formik';


const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyle.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    addReview(values);
                    actions.resetForm()
                }}
            >
                {formikprops => (
                    <View>
                        <TextInput 
                            style={globalStyle.input}
                            placeholder='Review title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                        />
                        <TextInput 
                            style={globalStyle.input}
                            multiline
                            placeholder='Review body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                        />
                        <TextInput 
                            style={globalStyle.input}
                            keyboardType= 'numeric'
                            placeholder='Rating (1-5)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                        />
                        <Button title='submit' color='maroon' onPress={formikprops.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm;