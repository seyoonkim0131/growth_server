import Board from '../../../entities/Board'
import { ReadBoardOneResponse, ReadBoardOneQueryArgs } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers'
import { authMiddleware, makeMiddleware } from "../../../utils/middlewares";

const resolvers:  Resolvers = {
    Query: {
        ReadBoardOne: makeMiddleware( authMiddleware,
            async(_, args: ReadBoardOneQueryArgs ):Promise<ReadBoardOneResponse> => {
                const {no} = args
                const board: Board | undefined = await Board.findOne(no);
                if(board) {
                    return {
                        ok: true,
                        error: null,
                        board: board
                    }
                } else {
                    return {
                        ok: false,
                        error: 'error',
                        board: null
                    }
                }
            }
        )
    }
};

export default resolvers;