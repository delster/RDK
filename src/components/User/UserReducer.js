export const ACTIONS = {};

export const onClickLeft = () => {
    return {};
};

export const onClickRight = () => {
    return {};
};

const ACTION_HANDLERS = {};

const defaultState = {};

export const reducer = (state = defaultState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
