import Board from '../../../entities/Board'
import {
    CreateBoardMutationArgs, CreateBoardResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    CreateBoard: async (
      _,
      args: CreateBoardMutationArgs
    ): Promise<CreateBoardResponse> => {
      try {
        await Board.insert({title: args.title, body: args.body, file: args.file, createId: args.createId, updateId: args.createId});
        return {
          ok: true,
          error: null,
          token: 'board insert success'
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};
export default resolvers;