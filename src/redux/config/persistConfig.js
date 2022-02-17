import _ from "lodash";
import { AsyncStorage } from "react-native";
import { createTransform, PersistConfig } from "redux-persist";
import Immutable from "seamless-immutable";

import { RootState } from "../reducers"; // for store config

const transform = createTransform(
  // transform state on its way to being serialized and persisted.
  // inboundState should be an immutable object
  (inboundState) => {
    if (_.has(inboundState, "asMutable")) {
      return inboundState.asMutable({ deep: true });
    }
    return inboundState;
  },
  // transform state being rehydrated
  // outboundState should be a raw object
  (outboundState) => {
    return Immutable(outboundState);
  }
);

const version = 1;

export const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version,
  transforms: [transform],
  migrate: (state) => {
    if (_.get(state, "_persist.version") === version) {
      return Promise.resolve(state);
    }
    return Promise.resolve({
      _persist: state._persist,
    });
  },
};
