<Modal
  isVisible={isModalVisible}
  animationIn={'slideInUp'}
  animationOut={'slideOutDown'}
  avoidKeyboard={true}
  animationInTiming={500}
  animationOutTiming={500}
  onBackButtonPress={() => toggleModal(false)}
  onSwipeComplete={() => toggleModal(false)}
  swipeDirection={'down'}
  backgroundColor={'transparent'}
  backdropColor={'black'}
  backdropOpacity={0.4}>
  <View
    style={{
      position: 'absolute',
      bottom: 0,
      height: Height * 0.2,
      width: '100%',
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 20,
    }}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          toggleModal(false);
          FileModal(true);
        }}>
        <Text style={{fontSize: ms(21), color: colors.primary}}>
          Photo or Video
        </Text>
        {/* <View style={{borderWidth: 0.4, borderColor: '#D1D9DB', width: '100%' }}></View> */}
      </TouchableOpacity>
    </View>

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity>
        <Text style={{fontSize: ms(21), color: colors.primary}}>
          iCloud Drive
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => toggleModal(false)}>
        <Text style={{fontSize: ms(21), color: colors.primary}}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>;
