import { merge } from 'lodash';
import { viewerResolvers } from './Viewer';
import { userResolvers } from './User';

export const resolvers = merge(viewerResolvers, userResolvers);
