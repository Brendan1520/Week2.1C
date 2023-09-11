const todoApp = Vue.createApp({
    data() {
        return{
            
            todos: [], /* Array for adding todos */
            todo1:''
        };
    },
    methods: {
        addtodo() {
                         /*Check for no whitespace */

            if(this.todo1 !== '') {
                this.todos.push({text: this.todo1.trim()});
             /*Reset the Input */
                this.todo1='';
            }
        },

        deletetodo(index) {
            this.todos.splice(index,1);

        }
    }
}).mount('#todoApp');

const exploration = Vue.createApp({
    data() {
        return {
         messagevisible: true,
         switchmessage2: true, 
         numbers: [1,2,3,4,5,6,7,8,9,10], 
         name:'' 
        };
    },
    methods: {
    /*Change visibilities */

    movemessage() {
        this.messagevisible = !this.messagevisible;

    },
    movemessage2() {
        this.switchmessage2 = !this.switchmessage2;
    }
}

}).mount('#exploration')