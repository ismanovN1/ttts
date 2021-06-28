import ProfileReducer from "./Profile-reducer";
import DialogReducer from "./Dialog-reducer";


const store = {
    _state: {
        ProfilePage: {
            Posts: [
                {id: 1, comment: 'hello my best friend', likesCountes: 20},
                {id: 2, comment: 'like ', likesCountes: 20},
                {id: 3, comment: 'Respect', likesCountes: 20},
                {id: 4, comment: 'good image', likesCountes: 24},
            ],
            NewPost: 'Assalam alleykum, ',
        },
        DialogPage: {
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
        },
    },






    getState() {
        return this._state
    },

    _callsubscriber() {
        '';
    },

    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch: function (action) {
        this._state = ProfileReducer(this._state , action );
        this._state = DialogReducer(this._state , action );
        this._callsubscriber(this);


    },
}
export default store;