import { gql } from "graphql-request";

export const MUTATION_INFO_USERS = gql`
  mutation UpdateSubmission($updateInput: UpdateInput!) {
    updateSubmission(UpdateInput: $updateInput) {
      success
      msg
    }
  }
`;
