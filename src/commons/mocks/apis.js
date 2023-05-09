import { graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");
export const apis = [
  gql.mutation("createBoard", (req, res, ctx) => {
    const { wrtier, title, contents } = req.variables.createBoardInput;

    return res(
      ctx.data({
        createBoard: {
          _id: "qqq",
          wrtier,
          title,
          contents,
          __typename: "Board",
        },
      })
    );
  }),
];
