import { IResolvers } from 'apollo-server-express';

export const viewerResolvers: IResolvers = {
  Query: {
    authUrl: (): string => {
      return 'Query.authUrl';
    },
  },
  Mutation: {
    logIn: (): string => {
      return 'Mutation.logIn';
    },
    logOut: (): string => {
      return 'Mutation.logOut';
    },
  },
};
