import Board from '../../../entities/Board'
import { ReadBoardAllResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers'
import { authMiddleware, makeMiddleware } from "../../../utils/middlewares";

const resolvers:  Resolvers = {
    Query: {
        ReadBoardAll: makeMiddleware( authMiddleware,
            async(_, args ):Promise<ReadBoardAllResponse> => {
                const board = await Board.find();
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