const ADDMESSAGE = 'ADDMESSAGE';
let initialiser  = {

        Users: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Vova'},
            {id: 5, name: 'Daler'},
        ],
        Messages: [
            {id: 1, message: 'hello'},
            {id: 2, message: 'how are you'},
            {id: 3, message: 'i am good'},
        ],
        NewMessage: '',

}

const DialogReducer = ( state = initialiser, action ) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADDMESSAGE:
            let Text = {id: 4, message: action.text};
            stateCopy.Messages = [...state.Messages]
            stateCopy.Messages.push(Text);
            break;
    }
    return stateCopy
}
export const sendMessage = (text) => ({type: ADDMESSAGE, text})

export default DialogReducer;