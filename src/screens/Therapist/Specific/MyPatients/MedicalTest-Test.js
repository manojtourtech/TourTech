import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import colors from '../../../../theme/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const MedicalTesttest = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.BackgroundColor}}>
      <View style={{flex: 0.88, paddingBottom: vs(9)}}>
        <View style={[styles.topView, {elevation: 4}]}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('יאופר קית')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MedicalTests')}>
              <View
                style={{
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconAnt name="right" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main PART ------------------------------------------------------ */}
        <ScrollView>
          <View style={{marginTop: vs(15)}}>
            <View style={{marginTop: vs(12)}}>
              <Card style={styles.card8}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={styles.Text8}>
                    {reverseText('םד תוקידב לש האצות')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(18),
                      color: colors.textColor2,
                      marginRight: s(15),
                      marginTop: vs(8),
                    }}>
                    29 {reverseText('ינויב')} 2021 | 10:00
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-end',
                      marginRight: s(15),
                      marginTop: vs(8),
                    }}>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor2,
                        marginRight: s(8),
                      }}>
                      {reverseText('האופר תאפרמ')}
                    </Text>
                    <IconIon
                      name="md-location-sharp"
                      size={s(22)}
                      color={colors.textColor2}
                    />
                  </View>

                  {/* Horizontal Line------------------------------------ */}
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#D1D9DB',
                      width: '92%',
                      alignSelf: 'center',
                      marginTop: vs(7),
                    }}></View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-end',
                      marginRight: s(4),
                      marginTop: vs(15),
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: ms(16),
                        color: colors.textColor2,
                        fontWeight: 'bold',
                        marginRight: s(8),
                      }}>
                      {reverseText('ןהכ םייח לפוטמ')}
                    </Text>
                    <Avatar.Image
                      style={{marginRight: s(12)}}
                      source={{
                        uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                      }}
                      size={s(45)}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card9}>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: s(10),
                    marginVertical: vs(10),
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      height: vs(17),
                      width: '100%',
                      flexDirection: 'row',
                    }}>
                    <View style={{flex: 1}}>
                      <Text style={styles.reportText}>Tests</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={styles.reportText}>Results</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#000000',
                      width: '100%',
                      alignSelf: 'center',
                    }}></View>

                  <View
                    style={{flex: 1, marginTop: vs(5), flexDirection: 'row'}}>
                    {/* Left---------------------------------------------------- */}

                    <View style={{flex: 1}}>
                      <Text style={styles.reportText}>Chemistry</Text>
                      <View style={{marginLeft: vs(20), marginTop: vs(5)}}>
                        <Text>Gulocose serum fasting</Text>
                        <Text>Triglycerides</Text>
                        <Text>Cholesterol</Text>
                        <Text>Cholesterol risk factor</Text>
                        <Text>Vitamin B12</Text>
                        <Text>Ferritin</Text>
                        <Text>sTSH</Text>
                      </View>

                      <Text style={styles.reportText}>Hematology</Text>
                      <View style={{marginLeft: vs(20), marginTop: vs(5)}}>
                        <Text>Hemoglobin</Text>
                        <Text>Hematocrit</Text>
                        <Text>RBC</Text>
                        <Text>RDW</Text>
                        <Text>WBC</Text>
                      </View>

                      <Text style={styles.reportText}>Pulmonary function</Text>
                      <View style={{marginLeft: vs(20), marginTop: vs(5)}}>
                        <Text>FVC (L)</Text>
                        <Text>Percentage of perdicted value</Text>
                        <Text>FEV/FVC(%)</Text>
                        <Text>Post-bronchodilation</Text>
                      </View>

                      <Text style={styles.reportText}>Allergy/Immunology</Text>
                    </View>

                    {/* Right---------------------------------------------------- */}
                    <View style={{flex: 1}}>
                      <View style={{marginLeft: vs(20), marginTop: vs(25)}}>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>Below average risk</Text>
                        <Text>Not B12 deficient</Text>
                        <Text>Possibly iron deficient</Text>
                        <Text>WNL</Text>
                      </View>

                      <View style={{marginLeft: vs(20), marginTop: vs(22)}}>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                      </View>

                      <View style={{marginLeft: vs(20), marginTop: vs(22)}}>
                        <Text>3.77</Text>
                        <Text>107</Text>
                        <Text style={{marginTop: vs(15)}}>90</Text>
                        <Text>No significant improvement</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>

              <Card style={styles.card9}>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: s(10),
                    marginVertical: vs(10),
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      height: vs(17),
                      width: '100%',
                      flexDirection: 'row',
                    }}>
                    <View style={{flex: 1}}>
                      <Text style={styles.reportText}>Tests</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={styles.reportText}>Results</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#000000',
                      width: '100%',
                      alignSelf: 'center',
                    }}></View>

                  <View
                    style={{flex: 1, marginTop: vs(5), flexDirection: 'row'}}>
                    {/* Left---------------------------------------------------- */}

                    <View style={{flex: 1}}>
                      <Text style={styles.reportText}>Chemistry</Text>
                      <View style={{marginLeft: vs(20), marginTop: vs(5)}}>
                        <Text>Gulocose serum fasting</Text>
                        <Text>Triglycerides</Text>
                        <Text>Cholesterol</Text>
                        <Text>Cholesterol risk factor</Text>
                        <Text>Vitamin B12</Text>
                        <Text>Ferritin</Text>
                        <Text>sTSH</Text>
                      </View>

                      <Text style={styles.reportText}>Hematology</Text>
                      <View style={{marginLeft: vs(20), marginTop: vs(5)}}>
                        <Text>Hemoglobin</Text>
                        <Text>Hematocrit</Text>
                        <Text>RBC</Text>
                        <Text>RDW</Text>
                        <Text>WBC</Text>
                      </View>

                      <Text style={styles.reportText}>Pulmonary function</Text>
                      <View style={{marginLeft: vs(20), marginTop: vs(5)}}>
                        <Text>FVC (L)</Text>
                        <Text>Percentage of perdicted value</Text>
                        <Text>FEV/FVC(%)</Text>
                        <Text>Post-bronchodilation</Text>
                      </View>

                      <Text style={styles.reportText}>Allergy/Immunology</Text>
                    </View>

                    {/* Right---------------------------------------------------- */}
                    <View style={{flex: 1}}>
                      <View style={{marginLeft: vs(20), marginTop: vs(25)}}>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>Below average risk</Text>
                        <Text>Not B12 deficient</Text>
                        <Text>Possibly iron deficient</Text>
                        <Text>WNL</Text>
                      </View>

                      <View style={{marginLeft: vs(20), marginTop: vs(22)}}>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                        <Text>WNL</Text>
                      </View>

                      <View style={{marginLeft: vs(20), marginTop: vs(22)}}>
                        <Text>3.77</Text>
                        <Text>107</Text>
                        <Text style={{marginTop: vs(15)}}>90</Text>
                        <Text>No significant improvement</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MedicalTesttest;
