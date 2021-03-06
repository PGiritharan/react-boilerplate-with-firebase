import authReucer from '../../reducers/auth';

test ('should set uid for login', ()=>{
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReucer({},action);
    expect(state.uid).toBe(action.uid);
});

test ('should clear uid for logout', ()=>{
    const action = {
        type: 'LOGOUT'
    };
    const state = authReucer({uid:'anything'},action);
    expect(action).toEqual({});
});