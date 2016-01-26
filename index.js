"use strict"
/**
 * Created by kalbsco on 1/26/2016.
 */
new Vue({
    el: '#app',
    created: function () {
        window.addEventListener('keyup', this.emptyMessage)
    },
    data: {
        message: 'Yo!',
        todoToAdd: '',
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js' },
            { text: 'Build Something Awesome' }
        ],
        isEmpty : false
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        pigLatinize: function () {
            let termArray = this.message.split(' ');

            for (let i = 0; i < termArray.length; i++) {
                let newone = termArray[i].slice(1) + termArray[i].split('')[0] + "ay";
                termArray[i] = newone;
            }
            this.message = termArray.join(' ');
        },
        emptyMessage : function() {
            if (this.message.length == 0) {
                this.isEmpty = true;
            }
            else {
                this.isEmpty = false;
            }
        },
        addToDo : function(){
            this.todos.push({text: this.todoToAdd});
        },
        removeToDo : function(index){
            this.todos.splice(index, 1);
        }
    }
})