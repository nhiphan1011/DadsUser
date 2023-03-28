import { gql } from "graphql-request";

export const checkUserGraph = gql`
  query CheckUser($address: String!) {
    checkUser(address: $address) {
      msg
      success
      data {
        address
        nonce 
      }
    }
  }
`;

export const registerUserGraph = gql`
  mutation SignupUser($addInput: AddInput!) {
    signupUser(AddInput: $addInput) {
      msg
      success
      data {
        address
        category
        coinsDads
        coinsReward
        createdAt
        status
      }
    }
  }
`;
export const REGISTER_FORM = gql`
  mutation SignupUser($addInput: AddInput!) {
    signupUser(AddInput: $addInput) {
      msg
      success
      data {
        address
        category
        coinsDads
        coinsReward
        createdAt
        status
      }
    }
  }
`;

export const loginUserGraph = gql`
  mutation LoginUser($web3Token: String!) {
    loginUser(web3Token: $web3Token) {
      accessToken
      msg
      success
    }
  }
`;

export const getNonceGraph = gql`
  mutation GetNonce($address: String!) {
    getNonce(address: $address) {
      msg
      success
      data {
        address
        nonce
      }
    }
  }
`;
