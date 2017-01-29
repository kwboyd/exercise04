// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    tasks: [
      {
        toDoItemTitle: 'First task',
        toDoItemContent: 'Example text'
      }
    ],
    toDoItemTitleInput: '',
    toDoItemContentInput: ''
  },
  methods: {
    addTask: function() {
      this.tasks.push ({
        toDoItemTitle: this.toDoItemTitleInput,
        toDoItemContent: this.toDoItemContentInput
      });
      this.toDoItemContentInput =  '';
      this.toDoItemTitleInput =  '';
    },
    deleteTask: function(i) {
      this.tasks.splice(i, 1)
    },
    cancelTask: function() {
    this.toDoItemTitleInput = '',
    this.toDoItemContentInput = ''
    }
  }
});
