{
  /* Second Modal */
}
<Modal
  isVisible={isModalFile}
  animationIn={'slideInUp'}
  animationOut={'slideOutDown'}
  avoidKeyboard={true}
  animationInTiming={500}
  animationOutTiming={500}
  onBackButtonPress={() => FileModal(false)}
  onSwipeComplete={() => FileModal(false)}
  swipeDirection={'down'}
  backgroundColor={'transparent'}
  backdropColor={'black'}
  backdropOpacity={0.4}>
  <View
    style={{
      marginTop: vs(170),
      height: Height * 1,
      width: Width * 1,
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 20,
    }}>
    <View style={{flex: 0.15}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: vs(20),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => FileModal(false)}>
          <Text style={{fontSize: ms(18), color: '#2596be'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: ms(18),
              fontWeight: 'bold',
              color: 'black',
              marginLeft: vs(80),
            }}>
            Browse
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: vs(18),
              width: s(18),
              borderRadius: 18,
              marginLeft: vs(80),
              borderWidth: 2,
              borderColor: '#2596be',
            }}>
            <IconEnt
              name="dots-three-horizontal"
              size={s(12)}
              color={'#2596be'}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* TextInput */}
      <View
        style={{
          alignSelf: 'center',
          height: vs(42),
          width: '90%',
          paddingHorizontal: s(10),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          marginTop: vs(12),
          borderRadius: 10,
        }}>
        <TouchableOpacity>
          <IconIon name="search-outline" size={s(22)} color={'#b3b3b3'} />
        </TouchableOpacity>
        <Text style={{fontSize: ms(18), color: '#b3b3b3', left: s(7)}}>
          Search
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(10),
          width: '100%',
          alignSelf: 'center',
        }}></View>
    </View>
    <View style={{flex: 0.85}}>
      {/* Mid */}
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: vs(15),
        }}>
        <Text style={{fontSize: ms(18), fontWeight: 'bold'}}>Locations</Text>
        <IconAnt
          style={{marginLeft: s(218)}}
          name="down"
          size={s(18)}
          color={'#2596be'}
        />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(10),
          width: '94%',
          alignSelf: 'flex-end',
        }}></View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: s(18),
          marginTop: vs(10),
        }}>
        <IconMaterial name="apple-icloud" size={s(23)} color={'#2596be'} />
        <Text style={{fontSize: ms(16), marginLeft: s(12)}}>iCloud Drive</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '85%',
          alignSelf: 'flex-end',
        }}></View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: s(18),
          marginTop: vs(15),
        }}>
        <IconEnt name="mobile" size={s(23)} color={'#2596be'} />
        <TouchableOpacity>
          <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
            On My iPhone
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '85%',
          alignSelf: 'flex-end',
        }}></View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: s(18),
          marginTop: vs(15),
        }}>
        <IconIon name="ios-trash-outline" size={s(23)} color={'#2596be'} />
        <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
          Recently Deleted
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '94%',
          alignSelf: 'flex-end',
        }}></View>

      {/* Favorite */}

      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <Text style={{fontSize: ms(18), fontWeight: 'bold'}}>Favorites</Text>
        <IconAnt
          style={{marginLeft: s(218)}}
          name="down"
          size={s(18)}
          color={'#2596be'}
        />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '94%',
          alignSelf: 'flex-end',
        }}></View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: s(18),
          marginTop: vs(15),
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: vs(23),
            width: s(23),
            borderRadius: 23,
            borderWidth: 2,
            borderColor: '#2596be',
          }}>
          <IconAnt name="arrowdown" size={s(18)} color={'#2596be'} />
        </View>
        <Text style={{fontSize: ms(16), marginLeft: s(12)}}>Downloads</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '94%',
          alignSelf: 'flex-end',
        }}></View>

      {/* Tags */}

      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <Text style={{fontSize: ms(18), fontWeight: 'bold'}}>Tags</Text>
        <IconAnt
          style={{marginLeft: s(250)}}
          name="down"
          size={s(18)}
          color={'#2596be'}
        />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '94%',
          alignSelf: 'flex-end',
        }}></View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: s(18),
          marginTop: vs(15),
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: vs(21),
            width: s(21),
            borderRadius: 21,
            backgroundColor: '#fc9429',
          }}></View>
        <Text style={{fontSize: ms(16), marginLeft: s(12)}}>#New</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '85%',
          alignSelf: 'flex-end',
        }}></View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: s(18),
          marginTop: vs(15),
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: vs(21),
            width: s(21),
            borderRadius: 21,
            backgroundColor: '#fc3d3d',
          }}></View>
        <Text style={{fontSize: ms(16), marginLeft: s(12)}}>#Stories</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#D1D9DB',
          marginTop: vs(8),
          width: '85%',
          alignSelf: 'flex-end',
        }}></View>
    </View>

    {/* BottomView */}

    <View style={styles.modalBottomView}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: vs(10),
        }}>
        <TouchableOpacity>
          <IconIon name="time" size={s(23)} color={'#b3b3b3'} />
        </TouchableOpacity>
        <Text style={{color: '#b3b3b3'}}>Recents</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: vs(10),
          marginLeft: s(150),
        }}>
        <TouchableOpacity>
          <IconIon name="browsers" size={s(23)} color={'#2596be'} />
        </TouchableOpacity>
        <Text style={{color: '#2596be'}}>Browse</Text>
      </View>
    </View>
  </View>
</Modal>;

{
  /* MODAL END */
}
