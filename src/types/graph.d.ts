export const typeDefs = ["type ReadBoardAllResponse {\n  ok: Boolean!\n  error: String\n  board: [Board]\n}\n\ntype Query {\n  ReadBoardAll: ReadBoardAllResponse!\n  ReadBoardOne(no: Int!): ReadBoardOneResponse!\n}\n\ntype ReadBoardOneResponse {\n  ok: Boolean!\n  error: String\n  board: Board\n}\n\ntype Board {\n  no: Int!\n  title: String!\n  body: String\n  file: String\n  createId: String!\n  createDate: String!\n  updateId: String!\n  updateDate: String!\n}\n\ntype User {\n  no: Int!\n  id: String!\n  name: String!\n  password: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignIn(id: String!, password: String!): SignInResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  ReadBoardAll: ReadBoardAllResponse;
  ReadBoardOne: ReadBoardOneResponse;
}

export interface ReadBoardOneQueryArgs {
  no: number;
}

export interface ReadBoardAllResponse {
  ok: boolean;
  error: string | null;
  board: Array<Board> | null;
}

export interface Board {
  no: number;
  title: string;
  body: string | null;
  file: string | null;
  createId: string;
  createDate: string;
  updateId: string;
  updateDate: string;
}

export interface ReadBoardOneResponse {
  ok: boolean;
  error: string | null;
  board: Board | null;
}

export interface Mutation {
  SignIn: SignInResponse;
}

export interface SignInMutationArgs {
  id: string;
  password: string;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface User {
  no: number;
  id: string;
  name: string;
  password: string | null;
}
