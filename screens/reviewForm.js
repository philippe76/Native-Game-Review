import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { globalStyle } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be number 1-5', val => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyle.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
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