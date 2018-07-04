import * as analysisActions from './analysis/actions';
import * as channelActions from './channel/actions';
import * as clusterActions from './cluster/actions';
import * as datasetActions from './dataset/actions';

export type AllActions = channelActions.Actions
    | datasetActions.Actions
    | analysisActions.Actions
    | clusterActions.Actions