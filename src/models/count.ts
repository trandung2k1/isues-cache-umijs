import { AnyAction, DvaModel } from '@umijs/max';
// eslint-disable-next-line no-promise-executor-return
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export interface CountModelState {
  num: number;
}
export default {
  namespace: 'count',
  state: {
    num: 0,
  },
  reducers: {
    add(state: any): any {
      state.num += 1;
    },
    decrement(state: CountModelState, action: AnyAction): any {
      state.num -= action.payload;
    },
  },
  effects: {
    *addAsync(_action: any, { put }: any) {
      yield delay(1000);
      yield put({ type: 'add' });
    },
    *decrementAsync(_action: any, { put }: any) {
      yield delay(1000);
      yield put({ type: 'decrement', payload: 3 });
    },
    // eslint-disable-next-line require-yield, @typescript-eslint/no-unused-vars
    *throwError(_action: any) {
      throw new Error('effect error');
    },
  },
} as DvaModel<CountModelState>;
