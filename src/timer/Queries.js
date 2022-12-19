import { gql } from '@apollo/client';

export const CREATE_TIMER = gql`
  mutation CreateTimer{($item: Timer!) {
    createTimer(Timer: $item) {
    }}
  }
`;
